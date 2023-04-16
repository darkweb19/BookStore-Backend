const router = require("express").Router();
const userController = require("../controllers/controller.user");

router.get("/user", userController.user);
router.post("/user", userController.store);
router.get("/user/:id", userController.show);
router.delete("/user/:id", userController.delete);

module.exports = router;
