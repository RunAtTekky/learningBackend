import express from "express";
import path from "path";

const app = express();

// Setting up view engine
app.set("view engine", "ejs");
const port = 5000;

app.get("/", (req, res) => {
  res.render("index", { name: "Varun" });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
