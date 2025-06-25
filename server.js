const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const startDatabase = require("./config/database");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3005;

// Conectar ao banco de dados MongoDB
startDatabase();

// Configuração CORS para aceitar localhost e produção
const allowedOrigins = [
  "https://guileless-pudding-f723e6.netlify.app", // produção
  "https://opina-mais.netlify.app",
  "http://localhost:5173",
  "http://localhost:5174"
   // frontend local Vite padrão
];

app.use(cors({
  origin: function(origin, callback){
    // Permite requisições sem origem (ex: Postman, curl)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `CORS policy: The origin ${origin} is not allowed.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use(express.json()); // Para requisições JSON
app.use(express.urlencoded({ extended: true })); // Para formulários URL encoded
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Servir arquivos estáticos (uploads)

// Rotas
const adminRoutes = require("./routes/adminRoutes");
const consumidorRoutes = require("./routes/consumidorRoutes");
const empresaRoutes = require("./routes/empresaRoutes");
const reclamacaoRoutes = require("./routes/reclamacaoRoutes");

// Uso das rotas com prefixos
app.use("/api/admin", adminRoutes);
app.use("/api/consumidor", consumidorRoutes);
app.use("/api/empresa", empresaRoutes);
app.use("/api/reclamacoes", reclamacaoRoutes);

// Rota inicial simples para teste
app.get("/", (req, res) => {
  res.send("🟢 API do Opina + está em execução.");
});

// Middleware para rotas não encontradas
app.use((req, res) => {
  res.status(404).json({ error: "Rota não encontrada." });
});

// Middleware para tratamento de erros globais
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (err.name === "MulterError") {
    return res.status(400).json({ error: err.message });
  }
  res.status(500).json({ error: "Erro interno do servidor." });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
