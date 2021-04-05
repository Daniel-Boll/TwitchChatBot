const TMI = require("tmi.js");
const options = require("./options");
const client = new TMI.Client(options);

client.connect();

module.exports = { client };
