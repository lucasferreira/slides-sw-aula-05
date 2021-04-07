const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

const port = 5000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/teste", function (req, res) {
  res.send(`
    <form action='/teste' method='post'>
      <input type='text' name='nome' placeholder='Seu Nome' />
    </form>
  `);
});

app.post("/teste", function (req, res) {
  res.send(`Seu nome é: ` + req.body.nome);
});

app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}/`);
});
