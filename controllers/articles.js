const models = require("../models");
const { createPortal } = require("react-dom");

module.exports = {
  get: (req, res, next) => {
    const { title } = req.params;

    models.Articles.find()
      .then((response) => {
        const articles = response.pop().articles;
        res.status(200).send(articles);
      })
      .catch(next);
  },

  post: (req, res, next) => {
    const { articles } = req.body;

    models.Articles.create({ articles })
      .then((createdArticles) => {
        res.status(200).send(createdArticles);
        console.log("Successfully added articles");
      })
      .catch(next);
  },

  put: (req, res, next) => {
    const id = req.params.id;
    const { articles } = req.body;
    models.Articles.updateOne({ _id: id }, { articles })
      .then((updatedArticles) => {
        res.status(200).send(updatedArticles);
        console.log("Successfully updated articles");
      })
      .catch(next);
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.Origami.deleteOne({ _id: id })
      .then((removedOrigami) => res.send(removedOrigami))
      .catch(next);
  },
};
