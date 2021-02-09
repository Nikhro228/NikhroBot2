const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === '-Привет бот') {
      msg.reply('Привет');
    }
  });

  client.on('message', msg => {
    if (msg.content === '-Как у тебя дела?') {
      msg.reply('Нормально');
    }
  });

  client.on('message', msg => {
    if (msg.content === '-Хелп') {
      msg.reply('Команды: Привет бот, Как у тебя дела? Префикс: - ');
    }
  });

  client.on('message', msg => {
    if (msg.content === '-привет бот') {
      msg.reply('Привет');
    }
  });

  client.on('message', msg => {
    if (msg.content === '-как у тебя дела?') {
      msg.reply('Нормально');
    }
  });

  client.on('message', msg => {
    if (msg.content === '-как у тебя дела') {
      msg.reply('Нормально');
    }
  });
  
  client.on('message', msg => {
    if (msg.content === '-Как у тебя дела') {
      msg.reply('Нормально');
    }
  });

  client.on('message', msg => {
    if (msg.content === '-хелп') {
      msg.reply('Команды: Привет бот, Как у тебя дела? Префикс: - ');
    }
  });

client.login('ODA3OTM0MDYwOTEwNjA4NDM0.YB_NOg.4skVMeZxsA5tGJdctglroSTcaaU');


    