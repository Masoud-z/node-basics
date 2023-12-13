const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
//   process.exit();
});

server.listen(8800);

console.log("you can access the server on:");
console.log("localhost:8800");
