const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

/* User, Post relationships 
start===============================*/
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});
/* End===============================*/

/* Comment, User, Post relationships 
start===============================*/
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});
/* End===============================*/

module.exports = { User, Post, Comment };
