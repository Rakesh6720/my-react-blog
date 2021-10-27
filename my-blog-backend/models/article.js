const getDb = require("../util/database").getDb;

class Article {
  constructor(name) {
    this.name = name;
    this.upvote = 0;
    this.comments = [];
  }

  save() {
    const db = getDb();
    return db
      .collection("articles")
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("articles")
      .find()
      .toArray()
      .then((articles) => {
        console.log(articles);
        return articles;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static fetch(articleName) {
    const db = getDb();
    return db
      .collection("articles")
      .findOne({ name: articleName })
      .then((article) => {
        //console.log(article);
        return article;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Article;
