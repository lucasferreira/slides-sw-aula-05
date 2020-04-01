const express = require("express");

const app = express();

const port = 5000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/teste", function (req, res) {
  res.send("Teste");
});

app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}/`);
});
