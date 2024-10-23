const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Configuração da conexão com o banco de dados PostgreSQL
const db = new Pool({
  host: "localhost", // ou o IP do seu servidor PostgreSQL
  user: "postgres", // usuário PostgreSQL
  password: "1234", // senha do PostgreSQL
  database: "Solvere_Tech", // banco de dados
  port: 5432, // porta padrão do PostgreSQL
});

// Verificar a conexão com o banco de dados
db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conectado ao banco de dados PostgreSQL!");
});

// Rota para gravar os dados
app.post("/gravar", (req, res) => {
  const { nome, telefone, email, senha } = req.body;
  if (!nome || !telefone || !email || !senha) {
    return res
      .status(400)
      .json({ message: "Todos os campos são obrigatórios." });
  }
  const query =
    "INSERT INTO pessoas (nome, telefone, email, senha) VALUES ($1, $2, $3, $4)";
  db.query(query, [nome, telefone, email, senha], (err, result) => {
    if (err) {
      console.error("Erro ao gravar no banco de dados:", err);
      return res.status(500).json({ message: "Erro ao gravar os dados." });
    }
    res.json({ message: "Dados gravados com sucesso!" });
  });
});

// Rota para login
app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: "Email e senha são obrigatórios." });
  }

  const query = "SELECT * FROM pessoas WHERE email = $1 AND senha = $2";
  db.query(query, [email, senha], (err, result) => {
    if (err) {
      console.error("Erro ao consultar no banco de dados:", err);
      return res.status(500).json({ message: "Erro ao realizar login." });
    }

    // Verificar se um usuário foi encontrado
    if (result.rows.length > 0) {
      const usuario = result.rows[0]; // Pega o primeiro usuário encontrado
      return res.json({
        success: true,
        message: "Login bem-sucedido!",
        userId: usuario.id, // Retorna o userId
      });
    } else {
      return res.json({ success: false, message: "Credenciais inválidas!" });
    }
  });
});

// Iniciar o servidor na porta 3000
app.listen(3000, "0.0.0.0", () => {
  console.log("Servidor rodando na porta 3000");
});
