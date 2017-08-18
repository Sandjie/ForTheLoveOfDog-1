module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        PostText: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        PostImage: {
            type: DataTypes.STRING,
            allowNull: true,
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