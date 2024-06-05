import express from "express";
import path from "path";

const app = express();
const users = [];

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

// Setting up view engine
app.set("view engine", "ejs");
const port = 5000;

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/success", (req, res) => {
  res.render("success");
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  users.push({ userName: req.body.name, email: req.body.email });

  res.redirect("/success");
});

app.get("/users", (req, res) => {
  res.json({
    users,
  });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
