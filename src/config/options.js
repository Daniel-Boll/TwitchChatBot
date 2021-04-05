const { channels } = require("./constants");

require("dotenv").config();
const { BOT_PASSWORD } = process.env;

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
    password: BOT_PASSWORD,
  },
  channels,
};

module.exports = options;
