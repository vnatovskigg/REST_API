const models = require("../models");

module.exports = {
  get: async (req, res, next) => {
    const query = req.params.segment;

    if (query) {
      try {
        const response = await models.Articles.find({ segment: `${query}` }).exec();
        res.status(200).send(response);
      }
      catch(err) {
        console.log(err);
      }
    } 

    try {
      const response = await models.Articles.find();
      res.status(200).send(response);
    }
    catch(err) {
      console.log(err);
    }
    
  },

  post: (req, res, next) => {
    const {
      title,
      summary,
      published,
      author,
      url,
      thumbnail,
      uid,
      segment,
    } = req.body;

    models.Articles.create({
      title,
      summary,
      published,
      author,
      url,
      thumbnail,
      uid,
      segment
    })
      .then((createdArticle) => {
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

  delete: (req, res, next) => {
    models.Articles.remove({}, function (err) {
      if (err) {
        return handleError(res, err);
      }
      return res.send(204);
    });
  },
};
