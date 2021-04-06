const { client } = require("../config/client");

module.exports = (tokens) => {
  // Comando para listar comandos

  const commands = {
    "!git": {
      description: [
        "!git <projeto> ; Projetos: [LambdaIO || ChatBot] ; Te envio o link do repositório do projeto",
      ],
    },
    "!lista": {
      description: ["!lista ; Te envio a lista dos comandos possíveis."],
    },
    "!discord": {
      description: ["!discord ; Te envio o link do Discord da comunidade!"],
    },
    "!falar": {
      description: [
        "!falar <lang> <phrase> ; Falo sua frase utilizando a linguagem que você sugeriu. (Apenas pt e jp por enquanto)",
      ],
    },
  };

  for (command in commands) {
    for (item of commands[command].description) {
      client.action("namelessblossom", `${item}`);
    }
  }
};
