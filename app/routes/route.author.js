const router = require("express").Router();
const authorController = require("../controllers/controller.author");
//routes
router.get("/author", authorController.author);
router.post("/author", authorController.store);
router.get("/author/:id", authorController.show);
router.delete("/author/:id", authorController.delete);

module.exports = router;
