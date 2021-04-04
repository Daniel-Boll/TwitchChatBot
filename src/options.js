const { channels } = require("./constants");

require("dotenv").config();

const options = {
  options: {
    debug: true,
  },
  connection: {
    cluster: "aws",
    reconnect: true,
  },
  identity: {
    username: "NamelessBlossomBot",
    password: process.env.BOT_PASSWORD,
  },
  channels,
};

module.exports = options;
