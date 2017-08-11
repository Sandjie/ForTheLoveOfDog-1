module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        PostText: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        PostImage: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

    });

    Post.associate = function (models) {
        Post.belongsTo(models.User,
            {
                foreignKey:
                {
                    allowNull: false
                }
            });
    };

    return Post;
};