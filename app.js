const http = require("http");

const routes = require("./routes");

const server = http.createServer(routes);

server.listen(8800);

console.log("you can access the server on:");
console.log("localhost:8800");
