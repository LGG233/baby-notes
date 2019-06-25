// const db = require("../models");

// module.exports = {
//     findAll: function (req, res) {
//         db.Actlist.findAll({
//         }).then(function (dbActlist) {
//             res.json(dbActlist);
//         });
//     },
//     findOne: function (req, res) {
//         db.Actlist.findOne({
//             where: {
//                 id: req.params.id
//             },
//         }).then(function (dbActlist) {
//             res.json(dbActlist);
//         });
//     },
//     delete: function (req, res) {
//         db.Actlist.destroy({
//             where: {
//                 id: req.params.id
//             }
//         }).then(function (dbActlist) {
//             res.json(dbActlist);
//         });
//     },
//     create: function (req, res) {
//         db.Actlist.create(req.body).then(function (dbActlist) {
//             res.json(dbActlist);
//         });
//     }
// };