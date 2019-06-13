// EXPRESS SESSIONS CODE
// var bcrypt = require('bcrypt');

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // Associating User with multiple Children
    // When User is deleted, deleted any associated children
    User.associate = function (models) {
        User.hasMany(models.Child, {
            onDelete: "cascade"
        });
    };

    //EXPRESS SESSIONS CODE

    //   User.beforeCreate((user, options) => {
    //     const salt = bcrypt.genSaltSync();
    //     user.password = bcrypt.hashSync(user.password, salt);
    //   });
    //   User.prototype.validPassword = function (password) {
    //     return bcrypt.compareSync(password, this.password);
    //   };
    //   // create all the defined tables in the specified database.
    //   sequelize.sync()
    //     .then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
    //     .catch(error => console.log('This error occured', error));
    //   return User;
}