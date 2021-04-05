const { client } = require("../config/client");

module.exports = (tokens) => {
  if (tokens.length == 0) {
    client.action("namelessblossom", "https://github.com/Daniel-Boll");
  } else {
    const [page] = tokens;

    if (page.toLowerCase() == "lambdaio") {
      client.action(
        "namelessblossom",
        "https://github.com/Daniel-Boll/LambdaIO"
      );
    } else if (page.toLowerCase() == "chatbot") {
      client.action(
        "namelessblossom",
        "https://github.com/Daniel-Boll/TwitchChatBot"
      );
    }
  }
};
