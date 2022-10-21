const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./Data/categories.json");
const news = require("./Data/news.json");

app.get("/", (req, res) => {
  res.send("hurray ! news api running");
});

app.get("/news-categories", (req, res) => {
  res.send(categories);
});

app.get("/news/:id", (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  const selectedNews = news.find((singleNews) => singleNews._id === id);
  res.send(selectedNews);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;

  if (id == 08) {
    res.send(news);
  } else {
    const selectedCategory = news.filter(
      (singleCategory) => singleCategory.category_id === id
    );
    res.send(selectedCategory);
  }
});

app.listen(port, () => {
  console.log(`news server listening on port, `, port);
});
