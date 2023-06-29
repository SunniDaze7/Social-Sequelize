const { db,DataTypes, Model } = require('./db/connection.js')

let Comment = Comment.init({
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
  },{
    sequelize: db,
    modelName: 'Comment'
  })

module.exports = Comment;