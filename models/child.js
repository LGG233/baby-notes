module.exports = function (sequelize, DataTypes) {
    var Child = sequelize.define("Child", {
        name: DataTypes.STRING
        //   dob: {
        //   NEED TO FILL THIS OUT .. need date syntax
        // type: DataTypes.STRING,
        // unique: true,
        // allowNull: false,
        // validate: {
        //   isEmail: true
        // }
        //   }
    });

    // Associating Child with multiple activities
    // When Child is deleted, deleted any associated activities
    Child.associate = function (models) {
        Child.hasMany(models.Activities, {
            onDelete: "cascade"
        });
    };

    // Child must belong to a User
    // a child must have User to be created
    Child.associate = function (models) {
        Child.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    }
}