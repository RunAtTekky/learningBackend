import express from "express";
import path from "path";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  const pathLocation = path.resolve();
  res.sendFile(path.join(pathLocation, "./index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
