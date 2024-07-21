const express = require("express");
const clientController = require("../controllers/clientController");

const router = express.Router();

router
  .route("/client")
  .get(clientController.getAllClients)
  .post(clientController.createClient);

router
  .route("/upload/:id")
  .post(clientController.uploadImages, clientController.updateClientPhotos);

router.route("/images/:id").get(clientController.getImages);

router
  .route("/client/:id")
  .get(clientController.getClientByID)
  .put(clientController.updateClient)
  .delete(clientController.deleteClient);

router.get("/client/:clientId/bookings", clientController.clientBooked);
router.route("/clientId/:id").get(clientController.getClientByClientID);

module.exports = router;
