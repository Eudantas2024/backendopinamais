const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

function autenticarToken(tipoEsperado) {
  return (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Token inválido ou ausente." });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: "Token inválido ou expirado." });
      }

      if (tipoEsperado && decoded.tipo !== tipoEsperado) {
        return res.status(403).json({ error: "Acesso não autorizado para este tipo de usuário." });
      }

      req.userId = decoded.id;
      req.email = decoded.email;
      next();
    });
  };
}


module.exports = autenticarToken;
