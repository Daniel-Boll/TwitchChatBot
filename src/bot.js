const TMI = require("tmi.js");

const option = require("./options");
const { channels } = require("./constants");

const client = new TMI.client(option);

const commandHandler = require("./command");

client.connect();

client.on("connected", (address, port) => {
  client.action(channels[0], "I'm here, beep boop 🤖");
});

client.on("chat", (channel, user, message, self) => {
  if (message.startsWith("!")) {
    //console.log(client);
    commandHandler(message, client);
  }
});
