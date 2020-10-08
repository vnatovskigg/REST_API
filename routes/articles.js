const controllers = require("../controllers");
const router = require("express").Router();
const { auth } = require("../utils");

router.get("/", controllers.articles.get);

router.post("/", controllers.articles.post);

router.put("/:id", controllers.articles.put);

router.delete("/", controllers.articles.delete);

module.exports = router;
