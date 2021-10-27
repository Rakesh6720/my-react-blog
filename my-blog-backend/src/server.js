import express from "express";
import bodyParser from "body-parser";
import path from "path";

const mongoConnect = require("../util/database").mongoConnect;
const getDb = require("../util/database").getDb;
const Article = require("../models/article");

const app = express();

app.use(express.static(path.join(__dirname, "/build")));
app.use(bodyParser.json());

//const db = getDb();
//const articlesInfo = db.collections("articles");

app.get("/api/articles/fetch-all", async (req, res) => {
  await Article.fetchAll()
    .then((articles) => {
      res.status(200).json(articles);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/api/articles/:name", async (req, res) => {
  const articleName = req.params.name;
  const articleInfo = await Article.fetch(articleName);
  res.status(200).json(articleInfo);
});

app.post("/api/articles/:name/upvote", async (req, res) => {
  const articleName = req.params.name;
  const article = await Article.fetch(articleName);
  const db = getDb();
  await db
    .collection("articles")
    .updateOne(
      { name: article.name },
      { $set: { upvotes: article.upvotes + 1 } }
    );

  const updatedArticle = await Article.fetch(articleName);

  res.status(200).json(updatedArticle);
});

app.post("/api/articles/:name/add-comment", async (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;
  const article = await Article.fetch(articleName);
  const db = getDb();
  await db
    .collection("articles")
    .updateOne(
      { name: article.name },
      { $set: { comments: article.comments.concat({ username, text }) } }
    );
  const updatedArticle = await Article.fetch(articleName);

  res.status(200).json(updatedArticle);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

mongoConnect(() => {
  app.listen(8000);
});
