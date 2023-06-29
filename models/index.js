const Comment = require("./Comment");
const Like = require("./Like");
const Post = require("./Post");
const Profile = require("./Profile");
const User = require("./User");

//one to one with user and profile
User.hasOne(Profile)
Profile.belongsTo(User)

//one to many relationship with user and post/ user to comments/ post to comment
Post.belongsTo(User)
User.hasMany(Post)
Comment.belongsTo(User)
User.hasMany(Comment)
Comment.belongsTo(Post)
Post.hasMany(Comment)

//many to many relationship with user to like
User.belongsToMany(Like, {through: 'user-likes'})
Like.belongsToMany(User, {through: 'user-likes'})

module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}