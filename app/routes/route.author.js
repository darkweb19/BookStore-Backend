const router = require("express").Router();
const authorController = require("../controllers/controller.author");

//refactoring the routes
router
	.route("/author")
	.get(authorController.author)
	.post(authorController.store);
router
	.route("/author/:id")
	.get(authorController.show)
	.delete(authorController.delete);

module.exports = router;
