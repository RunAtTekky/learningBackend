import express from "express";

const app = express();
const port = 5000;

app.get("/getProducts", (req, res) => {
  res.json({
    success: true,
    products: ["football", "net", "goalpost"],
  });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
