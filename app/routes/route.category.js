const router = require("express").Router();
const categoryController = require("../controllers/controller.category");

//refactoring the routes
router
	.route("/category")
	.get(categoryController.category)
	.post(categoryController.store);
router
	.route("/category/:id")
	.get(categoryController.show)
	.delete(categoryController.delete);

module.exports = router;
