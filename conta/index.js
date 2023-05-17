const express = require("express");
var amqp = require("amqplib/callback_api");

const app = express();
const port = 3001;

app.use(require("cors")());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = express.Router();
router.get("/", (req, res) => res.sendFile("/index.html", { root: __dirname }));

app.use("/", router);
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
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
    const msg = {
      cpf: "12345678910",
      nome: "Ismael",
      idade: 20,
      valor: 1000,
    };

    channel.assertQueue(queue, {
      durable: false,
    });

    channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));
    console.log(" [x] Sent %s", msg);
  });
});
