const models = require("../models");

module.exports = {
  get: (req, res, next) => {
    models.Articles.find()
      .then((response) => {
        res.status(200).send(response);
      })
      .catch(next);
  },

  post: (req, res, next) => {
    const {
      title,
      author,
      description,
      content,
      url,
      urlToImage,
      publishedAt,
      source,
    } = req.body;

    models.Articles.create({
      title,
      author,
      description,
      content,
      url,
      urlToImage,
      publishedAt,
      source,
    })
      .then((createdArticle) => {
        console.log(createdArticle);
        res.status(200).send(createdArticle);
      })
      .catch(next);
  },

  put: (req, res, next) => {
    // const id = req.params.id;
    // const { articles } = req.body;
    // models.Articles.updateOne({ _id: id }, { articles })
    //   .then((updatedArticles) => {
    //     res.status(200).send(updatedArticles);
    //     console.log("Successfully updated articles");
    //   })
    //   .catch(next);
  },

  delete: (req, res, next) => {},
};
