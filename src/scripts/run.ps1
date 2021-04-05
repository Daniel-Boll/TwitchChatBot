param(
  [string]$Lang = "pt",
  [string]$Phrase = "Alguém está tentando falar kkk"
    )

node ./src/scripts/speak.js $Lang $Phrase
stop-process -Id $PID
