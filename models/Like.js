const { db,DataTypes, Model } = require('./db/connection.js')

let Like = Like.init({
    reactionType: DataTypes.STRING,
    createdAt: DataTypes.STRING
  },{
    sequelize: db,
    modelName: 'Like'
  })
module.exports = Like;