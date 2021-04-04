const git = require("./commands/git");

const commands = { git };

module.exports = (message, client) => {
  const tokens = message.split(" ");
  const command = tokens.shift().substring(1);

  //console.log(message, client);

  try {
    commands[command](client, tokens);
  } catch (err) {
    // We might do something
    // if the error
  }
};
