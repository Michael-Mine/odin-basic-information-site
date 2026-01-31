import http from "node:http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  console.log("response made");
  res.end(
    JSON.stringify({
      data: "Hello World!",
    })
  );
});

server.listen(8000);
