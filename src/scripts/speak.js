const say = require("say");

const [_, __, lang, phrase] = process.argv;

say.speak(
  phrase,
  lang == "pt" ? "Microsoft Maria Desktop" : "Microsoft Haruka Desktop",
  lang == "pt" ? 1.0 : 1.5
);
