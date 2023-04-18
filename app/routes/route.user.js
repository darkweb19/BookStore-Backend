const router = require("express").Router();
const userController = require("../controllers/controller.user");

//refactoring the routes
router.route("/user").get(userController.user).post(userController.store);
router
	.route("/user/:id")
	.get(userController.show)
	.delete(userController.delete);

module.exports = router;
x;
