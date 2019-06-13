module.exports = function (sequelize, DataTypes) {
    var ActList = sequelize.define("ActList", {
    
        //   NEED TO FILL THIS OUT .. need activity(diaper,sleep,feed,journal)
        
    });

    // Associating ActList with multiple actList
    // When ActList is deleted, deleted any associated actList
    ActList.associate = function (models) {
        ActList.hasMany(models.Activities, {
            onDelete: "cascade"
        });
    };

    // ActList must belong to a Activity
    // a actlist must have Activity to be created
    ActList.associate = function (models) {
        ActList.belongsTo(models.Activities, {
            foreignKey: {
                allowNull: false
            }
        });
    }
}