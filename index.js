import http from "node:http";
import fs from "node:fs";

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html");

  fs.readFile("./pages/index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });

  //   res.write("<p>hello world!</p>");
  //   res.end();

  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   console.log("response made");
  //   res.end(
  //     JSON.stringify({
  //       data: "Hello World!",
  //     })
  //   );
});

server.listen(8000);
