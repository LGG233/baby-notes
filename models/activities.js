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
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
        // timestamp: 
        //   NEED TO FILL THIS OUT .. need activity, time (default), 

    });

    // Associating Activities with multiple actList
    // When Activities is deleted, deleted any associated actList
    Activities.associate = function (models) {
        Activities.hasMany(models.ActList, {
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