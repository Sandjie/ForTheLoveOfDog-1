module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    UserName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail : true
      }
    },
    Zip: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    Pack: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }

  },
  
  {
      //user can have multiple posts and comments
      classMethods: {
        associate: function(models) {
          // Associating Author with Posts
          // When an Author is deleted, also delete any associated Posts
          User.hasMany(models.Post, {
            onDelete: "cascade"
          });
          User.hasMany(models.Comment, {
            onDelete: "cascade"
          });
        }
      }
    }
  
  );

  return User;
};
