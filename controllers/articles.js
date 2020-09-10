const models = require("../models");
const { createPortal } = require("react-dom");

module.exports = {
  get: (req, res, next) => {
    const length = req.query.length ? parseInt(req.query.length) : 20;
    models.Origami.find()
      .sort("-created_at")
      .limit(length)
      .populate("author")
      .then((origamies) => res.send(origamies))
      .catch(next);
  },

  post: (req, res, next) => {
    const { articles } = req.body;

    models.Articles.create({ articles })
      .then((createdArticles) => {
        res.status(200).send("Successfully added articles");
      })
      .catch(next);
  },

  put: (req, res, next) => {
    const id = params.id;
    console.log(id);
    const { articles } = req.body;
    models.Articles.updateOne({ _id: id }, { articles })
      .then((updatedOrigami) =>
        res.status(200).send("Successfully added articles")
      )
      .catch(next);
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.Origami.deleteOne({ _id: id })
      .then((removedOrigami) => res.send(removedOrigami))
      .catch(next);
  },
};
