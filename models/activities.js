module.exports = function (sequelize, DataTypes) {
    var Activities = sequelize.define("Activities", {
        actList_Id: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        startdate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        enddate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        title: {
            type: DataTypes.STRING,
            len: [1],
            max: 50
        },
    });

    // Associating Activities with multiple actList
    // When Activities is deleted, deleted any associated actList
    Activities.associate = function (models) {
        Activities.hasMany(models.Actlist, {
            onDelete: "cascade"
        });
    };

    // Activities must belong to a Child
    // a activity must have Child to be created
    Activities.associate = function (models) {
        Activities.belongsTo(models.Child, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Activities;
}