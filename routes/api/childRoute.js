var childRouter = require("express").Router();
var childController = require("../controllers/childController");

childRouter.route("/child")
  .get(childController.findAll)
  .post(childController.create)
  .put(childController.update);

childRouter.route("/child/:id")
  .get(childController.findOne)
  .delete(childController.delete);

module.exports = childRouter;