const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./Data/categories");

app.get("/", (req, res) => {
  res.send("hurray ! news api running");
});

app.get("/news-categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`news server listening on port, `, port);
});
