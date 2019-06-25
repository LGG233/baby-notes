// const userRouter = require("express").Router();
// const userController = require("../../controllers/userController");

// userRouter.route("/users")
//   .get(userController.findAll)
//   .post(userController.create);

// userRouter.route("/users/:id")
//   .get(userController.findOne)
//   .delete(userController.delete);

// module.exports = userRouter;
// var db = require("../../models");

// module.exports = function (app) {
//   // gets all the users
//   app.get("/users", function (req, res) {
//     db.User.findAll({
//     }).then(function (dbUser) {
//       res.json(dbUser);
//     });
//   });
//   // creates a user
//   app.post("/users", function (req, res) {
//     db.User.create(req.body)
//       .then(function (dbUser) {
//         res.json(dbUser);
//       });
//   });
//   // get a single user
//   app.get("/users/:id", function (req, res) {
//     db.User.findOne({
//       where: {
//         id: req.params.id
//       }
//     }).then(function (dbUser) {
//       res.json(dbUser);
//     });
//   });

// }

// ********************************************
const express = require('express')
const app = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const db = require ('../../models')
const User = require('../../models/user')
app.use(cors())

process.env.SECRET_KEY = 'secret'

app.post('/register', (req, res) => {
  // const today = new Date()
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    // created: today
  }

  db.User.findOne({
    where: {
      email: req.body.email
    }
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          db.User.create(userData)
            .then(user => {
              res.json({ status: user.email + ' Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

app.post('/login', (req, res) => {
  db.User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        }
      } else {
        res.status(400).json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
})

app.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  db.User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = app