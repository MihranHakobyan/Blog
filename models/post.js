const {Model, DataTypes} = require('sequelize');
const connection = require('../db/dbConection');

class Posts extends Model {

  static associate(models) {
    Posts.belongsTo(models.users);
    models.users.hasMany(Posts)
  }
}

Posts.init({
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  img_url: DataTypes.STRING,
  user_id:DataTypes.INTEGER
}, {
  sequelize: connection,
  modelName: 'Posts',
  tableName: 'Posts'
});

module.exports = Posts;