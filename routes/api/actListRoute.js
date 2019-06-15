const actListRouter = require("express").Router();
const actListController = require("../../controllers/actListController");

actListRouter.route("/actList")
  .get(actListController.findAll)
  .post(actListController.create);

actListRouter.route("/actList/:id")
  .get(actListController.findOne)
  .delete(actListController.delete);

module.exports = actListRouter;