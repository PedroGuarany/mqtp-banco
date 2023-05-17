import { generateListOfTransactions } from "./pages/pages.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from "express";
import amqp from "amqplib/callback_api.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = express.Router();
let transactions = [];

router.get("/", (req, res) =>
  res.sendFile("./pages/index.html", {root: dirname(fileURLToPath(import.meta.url))})
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
    const queue = "07103435316";

    channel.assertQueue(queue, {
      durable: false,
    });

    channel.consume(queue, (msg) => {
      transactions.push(JSON.parse(msg.content));
    }, {
      noAck: true
    });
  });
});

app.use("/", router);
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
