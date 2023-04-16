const router = require("express").Router();
const categoryController = require("../controllers/controller.category");

router.get("/category", categoryController.category);
router.post("/category", categoryController.store);
router.get("/category/:id", categoryController.show);
router.delete("/category/:id", categoryController.delete);

module.exports = router;
