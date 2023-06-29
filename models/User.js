const { db,DataTypes, Model } = require('./db/connection.js')

let User = User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING
  },{
    sequelize: db,
    modelName: 'User'
  })

module.exports = User;