// var childRouter = require("express").Router();
// var childController = require("../../controllers/childController");
// childRouter.route("/child")
// .get(childController.findAll)
// .post(childController.create)
// .put(childController.update);
// childRouter.route("/child/:id")
// .get(childController.findOne)
// .delete(childController.delete);
// module.exports = childRouter;

// ***********************************
var db = require("../../models");
module.exports = function (app) {
  // get all children for user
  app.get("/children/:id", function (req, res) {
    db.Child.findAll({
      where: {
        UserId: req.params.id
      },
      include: [db.User]
    }).then(function (dbChild) {
      res.json(dbChild);
    });
  });
  // get one child
  app.get("/child/:id", function (req, res) {
    db.Child.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function (dbChild) {
      res.json(dbChild);
    });
  });

  // create one child
  app.post("/child", function (req, res) {
    db.Child.create({
        name: req.body.name,
        dob: req.body.dob,
        UserId: req.body.UserId
      })
      .then(function (dbChild) {
        res.json(dbChild);
      });
  });

  // delete one child
  app.delete("/child/:id", function (req, res) {
    db.Child.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbChild) {
      res.json(dbChild);
    });
  });

  // update one child
  app.put("/child/:id", function (req, res) {
    db.Child.update(
      req.body, {
        where: {
          id: req.params.id
        }
      }).then(function (dbChild) {
      res.json(dbChild);
    });
  });

}