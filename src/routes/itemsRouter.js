const express = require("express");
const itemsController = require("../controllers/itemsController");
const clientController = require("../controllers/clientController");

const router = express.Router();

router.get("/types/:typeId", itemsController.getItemsByType);
router.get("/:itemId", itemsController.getSingleItemById);
router.get("/", itemsController.getItem);
router.post("/create", itemsController.uploadImages, itemsController.createItems);
router.delete("/delete/:id", itemsController.deleteItem);
router.put("/edit/:id", itemsController.editItem);

module.exports = router;
