// import { generateListOfTransactions } from "./pages/pages";

const express = require("express");
var amqp = require("amqplib/callback_api");

const app = express();
const port = 3000;

app.use(require("cors")());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = express.Router();
let transactions = [];

router.get("/", (req, res) =>
  res.sendFile("/pages/index.html", { root: __dirname })
);
router.get("/transacoes", (req, res) => {
  return res.send(generateListOfTransactions(transactions));
});

amqp.connect("amqp://user:password@localhost", (error, connection) => {
  if (error) {
    throw error;
  }
  connection.createChannel((error1, channel) => {
    if (error1) {
      throw error1;
    }
    const queue = "cpf_isma";

    channel.assertQueue(queue, {
      durable: false,
    });

    channel.consume(queue, (msg) => {
      transactions.push(JSON.parse(msg.toString()));
      console.log(msg.content.toString());
    });
  });
});

app.use("/", router);
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

defaultHtml = (children) => `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Extrato</title>
  </head>
  <body>
    ${children}
  </body>
</html>
`;

function generateListOfTransactions(transactions) {
  console.log("chamou função");
  console.log(transactions);
  let body = transactions
    .map((transaction) => {
      return `<li>Transação recebida de ${transaction.nome} de R$${transaction.valor} reais</li>`;
    })
    .join("");

  return defaultHtml(`<ul>${body}</ul>`);
}
