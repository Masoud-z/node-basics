const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First page</title></head>");
  res.write(
    "<body><h1>This is my first page rendered on the server!</h1></body>"
  );
  res.write("</html>");
  res.end();
});

server.listen(8800);

console.log("you can access the server on:");
console.log("localhost:8800");
