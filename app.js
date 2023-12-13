const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  //   process.exit();
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First page</title></head>");
  res.write("<body><h1>This is my first page rendered on the server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(8800);

console.log("you can access the server on:");
console.log("localhost:8800");
