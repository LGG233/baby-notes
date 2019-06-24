// const db = require('../models')
// module.exports = {
//     findAll: function (req, res) {
//         var query = {};
//         if (req.query.user_id) {
//             query.UserId = req.query.user_id;
//         }
//         db.Child.findAll({
//             where: query,
//             include: [db.User]
//         }).then(function (dbChild) {
//             res.json(dbChild);
//         });
//     },
//     findOne: function (req, res) {
//         db.Child.findOne({
//             where: {
//                 id: req.params.id
//             },
//             include: [db.User]
//         }).then(function (dbChild) {
//             res.json(dbChild);
//         });
//     },
//     delete: function (req, res) {
//         db.Child.destroy({
//             where: {
//                 id: req.params.id
//             }
//         }).then(function (dbChild) {
//             res.json(dbChild);
//         });
//     },
//     create: function (req, res) {
//         db.Child.create(req.body).then(function (dbChild) {
//             res.json(dbChild);
//         });
//     },
//     update: function (req, res) {
//         db.Child.update(
//             req.body, {
//                 where: {
//                     id: req.body.id
//                 }
//             }).then(function (dbChild) {
//                 res.json(dbChild);
//             });
//     }
// }