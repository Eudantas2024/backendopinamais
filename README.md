# 📢 OPINA+ — Sistema de Ouvidoria Digital

Sistema completo de ouvidoria para registro, moderação e exibição pública de reclamações ou sugestões. Desenvolvido com **React** no frontend e **Node.js + MongoDB** no backend.

---

## 🧰 Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- ✅ [Node.js](https://nodejs.org/) (v16 ou superior)
- ✅ [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- ✅ Gerenciador de pacotes **npm** (já incluído com o Node.js)

---

## 📁 Instalação

O projeto está dividido em duas pastas principais:

- `frontend/` — Interface do usuário (React)
- `backend/` — API e Banco de Dados (Express + MongoDB)

**Nota:** As pastas **não contêm** a pasta `node_modules`, para facilitar o envio do projeto.

### 1️⃣ Instalando as dependências

Acesse as pastas `frontend/` e `backend/` separadamente e execute:

```bash
npm install
```

---

## 🚀 Executando o Projeto

### ▶️ Frontend (React)

```bash
npm run dev
```

O sistema será iniciado geralmente em `http://localhost:5173/`.
No entanto essa versão do Frontend está sendo executada na web através do NetLify pelo link 
``

[NetLify Opina +](https://guileless-pudding-f723e6.netlify.app)

### 🖥️ Backend (Servidor Express)

```bash
npm run dev
```

O servidor será iniciado em `http://localhost:3005/` (ou conforme configurado), por conta da versão do frontend está sendo executada no Netlify, o backend também está sendo 
executado na Web, no endereço   `https://backendopinamais.onrender.com`, ele funciona tanto na versão localhost quanto na versão que está no Render.

---

## 🧪 Como Testar o Sistema

1. Acesse o sistema pelo navegador após iniciar o frontend.
2. Crie uma conta de **usuário fictício**, utilizando **um e-mail real** (o sistema envia notificações de status da sua reclamação).
3. Registre uma **reclamação**, **sugestão** ou **elogio**.
4. A publicação **aguarda aprovação administrativa**.

---





## 🔐 Acesso Administrativo

Para acessar o painel de moderação:

- 👤 **Usuário:** `admin@seudominio.com`  
- 🔑 **Senha:** `senac2025`

Acesse a área administrativa, aprove ou rejeite os conteúdos enviados pelos usuários.
Procure pelo ícone do cadeado 🔒 no Footer.

---

## 📝 Observações

- Apenas reclamações **aprovadas pelo administrador** serão exibidas publicamente.
- Os dados dos usuários são protegidos conforme boas práticas de autenticação com JWT.
- Este projeto é um protótipo acadêmico, ideal para testes e validações.

---
## 🛣️ Rotas da API

### 📄 GET /api/reclamacoes/aprovadas
🔓 Lista todas as reclamações publicadas (sem autenticação)

### 📥 POST /api/reclamacoes/upload
🔒 Cria uma nova reclamação com anexos (usuário autenticado)

### 📄 GET /api/reclamacoes/aprovadas/:id
🔓 Busca uma reclamação aprovada específica por ID

### 📤 PUT /api/reclamacoes/aprovar/:id
🔒 Aprova uma reclamação pendente (admin)

### ❌ DELETE /api/reclamacoes/:id
🔒 Exclui uma reclamação (admin)

## 📬 Contato

Em caso de dúvidas ou sugestões, entre em contato pelo e-mail:  
📧 `eudantas.alves@gmail.com   `
📧 `eudantas.ralves@senacsp.edu.br    `
📧 `douglas.rssimoes@senacsp.edu.br   `
📧 `felipe.ecamargo@senacsp.edu.br    `
📧 `simone.qbatista@senacsp.edu.br  `


---

## 👥 Créditos

**Equipe de Desenvolvimento:**

- Eudantas  
- Douglas  
- Felipe  
- Simone  

📘 *Técnico de Informática — SENAC Campinas*  
📅 *Junho de 2025*


## 🛡️ Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
