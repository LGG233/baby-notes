// const userRouter = require("express").Router();
// const userController = require("../../controllers/userController");
// userRouter.route("/users")
// .get(userController.findAll)
// .post(userController.create);
// userRouter.route("/users/:id")
// .get(userController.findOne)
// .delete(userController.delete);
// module.exports = userRouter;

// *****************************************************
var db = require("../../models");
module.exports = function (app) {
  // gets all the users
  app.get("/users", function (req, res) {
    db.User.findAll({}).then(function (dbUser) {
      res.json(dbUser);
    });
  });
  // creates a user
  app.post("/users", function (req, res) {
    db.User.create(req.body)
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });
  // get a single user
  app.get("/users/:id", function (req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });
}