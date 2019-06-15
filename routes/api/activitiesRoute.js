const activitiesRouter = require("express").Router();
const activitiesController = require("../../controllers/activitiesController");

activitiesController.route("/activities")
  .get(activitiesController.findAll)
  .post(activitiesController.create)
  .put(activitiesController.update);

activitiesController.route("/activities/:id")
  .get(activitiesController.findOne)
  .delete(activitiesController.delete);

module.exports = activitiesRouter;