const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config()

// console.log(process.env)
const path = __dirname + '/app/views/';
const app = express();

app.use(express.static(path));

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));


// app.use(express.json());
app.use(bodyParser.json());


// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Conectado ao Banco!");
  })
  .catch(err => {
    console.log("Não foi possível conectar ao Banco!", err);
    process.exit();
  });

// rota simples
app.get("/", (req, res) => {
  // res.json({ message: "Bem Vindo ao Projeto Ucrania" });
  res.sendFile(path + "index.html");
});

require("./app/routes/acolhedor.routes")(app);

// escolhe porta pra receber as requisições
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}.`);
});
