const { Post } = require("../models");

const postdata = [
  {
    title: "Why MCV is so important",
    text_body:
      "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
    user_id: 2,
  },
  {
    title: "Authentication vs. Authorization",
    text_body:
      "There is a difference between authentication and authorization. Authentication means confirming you own identity, whereas authorization means being allowed access to the system.",
    user_id: 3,
  },
  {
    title: "Object-Relational Mapping",
    text_body:
      "I have really loved learning about ORMs. It's really simplified the way I create queries is SQL!",
    user_id: 1,
  },
  {
    title: "dolor sit amet",
    text_body:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adipiscing",
    user_id: 1,
  },
  {
    title: "tempor incididunt",
    text_body:
      "elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
