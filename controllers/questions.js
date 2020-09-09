const Question = require("../models/Question");

module.exports = {
  get: (req, res, next) => {},

  post: (req, res, next) => {
    const { name, email, message } = req.body;

    Question.create({ name, email, message })
      .then((newQuestion) => {
        res.status(200);
        res.send(JSON.stringify(newQuestion));
      })
      .catch(next);
  },

  put: (req, res, next) => {},

  delete: (req, res, next) => {},
};
