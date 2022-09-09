const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "ORMs are useful but tricky to understand.",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: "Oh I love MVCs!",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "Alexa locked me out of my house!",
    user_id: 2,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
