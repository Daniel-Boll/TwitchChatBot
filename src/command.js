const git = require("./commands/git");
const lista = require("./commands/commands");
const discord = require("./commands/discord");
const falar = require("./commands/speak");

const commands = { git, lista, discord, falar };

module.exports = (message) => {
  const tokens = message.split(" ");
  const command = tokens.shift().substring(1);

  try {
    commands[command](tokens);
  } catch (err) {
    // We might do something
    // if the error
  }
};
