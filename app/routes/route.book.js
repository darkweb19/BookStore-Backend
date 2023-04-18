const router = require("express").Router();
const bookController = require("../controllers/controller.book");

router.get("/book", bookController.book);
router.get("/book/:id", bookController.show);
router.post("/book", bookController.store);
router.delete("/book/:id", bookController.delete);

//refactoring the routes
router.route("/book").get(bookController.book).post(bookController.store);
router
	.route("/book/:id")
	.get(bookController.show)
	.delete(bookController.delete);

module.exports = router;
