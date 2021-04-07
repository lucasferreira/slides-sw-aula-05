const fs = require("fs");

fs.writeFile("HelloWorld.txt", "Hello World UNISATC", err => {
  if (err) throw err;

  console.log("o arquivo foi salvo com sucesso");
});
