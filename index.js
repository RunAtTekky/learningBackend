import http from "http";
import { generateLovePercent } from "./features.js";

console.log(generateLovePercent());

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/about") {
    res.end("<h1>About</h1>");
  } else if (req.url === "/love") {
    res.end(`<h1>Love is ${generateLovePercent()}</h1>`);
  }
});

server.listen(5000, () => {
  console.log("Server is working");
});
