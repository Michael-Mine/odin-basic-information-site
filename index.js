import http from "node:http";
import fs from "node:fs";

const hostname = "localhost";
const port = 8000;

const server = http.createServer((req, res) => {
  console.log("requested " + req.method + " at " + req.url);

  res.setHeader("Content-Type", "text/html");

  let path = "./pages/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/contact-me":
      path += "contact-me.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
