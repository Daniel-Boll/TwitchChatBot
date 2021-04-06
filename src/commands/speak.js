const { client } = require("../config/client");
const { exec } = require("child_process");

module.exports = (tokens) => {
  client.action("namelessblossom", "Irei falar, aguarde!");

  const lang = tokens.shift();
  const phrase = tokens;

  console.log(phrase);

  exec(
    `powershell.exe -File "src/scripts/run.ps1" -Lang ${lang} -Phrase ${phrase}`,
    (_, __, ___) => {}
  );
};
