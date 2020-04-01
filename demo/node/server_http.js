const http = require("http");

const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.end("<h1>Hello World!</h1>\n");
  } else if (req.url === "/teste") {
    res.end("<h1>Vc acessou a pg de teste</h1>\n");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
