const controllers = require("../controllers/");
const router = require("express").Router();

router.post("/", controllers.questions.post);

module.exports = router;
