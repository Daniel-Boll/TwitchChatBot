const { client } = require("./config/client");
const { channels } = require("./config/constants");
const commandHandler = require("./command");

client.on("connected", (address, port) => {
  // Eventually stop this.  Only mantain for debug
  // purpouses.
  client.action(channels[0], "I'm here, beep boop 🤖");
});

client.on("chat", (channel, user, message, self) => {
  if (message.startsWith("!")) {
    //console.log(client);
    commandHandler(message);
  }
});
