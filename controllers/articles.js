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
    console.log("req body", req.body);
    // const { _id } = req.user;

    models.Articles.create({ articles })
      .then((createdArticles) => {
        console.log("Created Articles", createdArticles);
        res.send(createdArticles);
      })
      // .then(([modifiedObj, origamiObj]) => {
      //   res.send(origamiObj);
      // })
      .catch(next);
  },

  put: (req, res, next) => {
    const id = req.params.id;
    const { description } = req.body;
    models.Origami.updateOne({ _id: id }, { description })
      .then((updatedOrigami) => res.send(updatedOrigami))
      .catch(next);
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.Origami.deleteOne({ _id: id })
      .then((removedOrigami) => res.send(removedOrigami))
      .catch(next);
  },
};
