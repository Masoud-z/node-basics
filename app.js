const http = require("http");

const server = http.createServer((req, res) => {
  console.log("url:");
  console.log(req.url);
  console.log("**--++++--**");
  console.log("method:");
  console.log(req.method);
  console.log("**--++++--**");
  console.log("headers:");
  console.log(req.headers);
  //   process.exit();
});

server.listen(8800);

console.log("you can access the server on:");
console.log("localhost:8800");
