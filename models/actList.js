module.exports = function (sequelize, DataTypes) {
    var Actlist = sequelize.define("Actlist", {
        activity: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
          },
    });

    // Associating ActList with multiple actList
    // When ActList is deleted, deleted any associated actList
    // ActList.associate = function (models) {
    //     ActList.hasMany(models.Activities, {
    //         onDelete: "cascade"
    //     });
    // };

    // ActList must belong to a Activity
    // a actlist must have Activity to be created
    // ActList.associate = function (models) {
    //     ActList.belongsTo(models.Activities, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // }
    return Actlist;
}