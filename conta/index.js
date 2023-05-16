const express = require("express");
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
