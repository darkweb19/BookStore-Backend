const router = require("express").Router();
const bookController = require("../controllers/controller.book");

router.get("/book", bookController.book);
router.get("/book/:id", bookController.show);
router.post("/book", bookController.store);
router.delete("/book/:id", bookController.delete);

module.exports = router;
