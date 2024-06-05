import express from "express";
import path from "path";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017", {
    dbName: "backend",
  })
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const Message = mongoose.model("Message", messageSchema);

const app = express();
const users = [];

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

// Setting up view engine
app.set("view engine", "ejs");
const port = 5000;

app.get("/", (req, res) => {
  console.log(req.cookie);
  res.render("login");
});

app.post("/login", (req, res) => {
  res.cookie("token", "iamin");
  res.redirect("/");
});

app.get("/add", async (req, res) => {
  await Message.create({ name: "Annu", email: "varun@google.com" });
  res.send("NOICE");
});

app.get("/success", (req, res) => {
  res.render("success");
});

app.post("/contact", async (req, res) => {
  const { name, email } = req.body;
  await Message.create({ name, email });

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
