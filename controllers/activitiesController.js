const db = require('../models')

module.exports = {
    findAll: function (req, res) {
        var query = {};
        if (req.query.child_id) {
            query.ChildId = req.query.child_id;
        }
        db.Activities.findAll({
            where: query,
            include: [db.Child]
        }).then(function (dbActivities) {
            res.json(dbActivities);
        });
    },
    findOne: function (req, res) {
        db.Activities.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Child]
        }).then(function (dbActivities) {
            res.json(dbActivities);
        });
    },
    delete: function (req, res) {
        db.Activities.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbActivities) {
            res.json(dbActivities);
        });
    },
    create: function (req, res) {
        db.Activities.create(req.body).then(function (dbActivities) {
            res.json(dbActivities);
        });
    },
    update: function (req, res) {
        db.Activities.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function (dbActivities) {
                res.json(dbActivities);
            });
    }
};