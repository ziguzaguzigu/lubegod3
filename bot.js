const Discord = require('discord.js');
const client = new Discord.Client();

// 'client.on('message')' commands are triggered when the
// specified message is read in a text channel that the bot is in.



client.on('message', message => {
  if (message.content === '!lube') {
    message.reply('You are lubed up and ready');
  }
});

client.on('message', message => {
  if (message.content === '!who') {
    message.reply('I AM LUBE GOD LOOK ON YE MIGHTY AND DESPAIR');
  }
});



client.on('message', message => {
  if (message.content === '!lcommands') {
    message.reply('!lube !who');
  }
});

client.on('message', message => {
  if (message.content === '!megalube') {
    message.reply('Your Lube level IS OVER 9000 ');
  }
});

client.on('message', message => {
  if (message.content === '!flav') {
    message.channel.send('FLAVIO STAI CALMO, STAY CALM');
  }
});

client.on('message', message => {
  if (message.content === '!whoisbetter') {
    message.reply('Lube God Declares That Thoru is Better');
  }
});

client.on('message', message => {
  if (message.content === '!yes') {
    message.reply('Lube God Approves');
  }
});

client.on('message', message => {
  if (message.content === '!no') {
    message.reply('Lube God Disapproves');
  }
});

client.on('message', message => {
  if (message.content === '!how') {
    message.reply('When A Mummy Lube And A Daddy Lube Love Eachother Very Much');
  }
});

client.on('message', message => {
  if (message.content === '!tableflip') {
    message.reply('OH DAMN ALL THE LUBE IS ON THE FLOOR');
  }
});

client.on('message', message => {
  if (message.content === '!lhentai') {
    message.reply('Dont Go Down That Rabbit Hole Alone, Take Some Lube');
  }
});

client.on('message', message => {
  if (message.content === '!bible')
  message.channel.send("All Hail Our Lube God", {files: ["https://i.imgur.com/jSWAls7.jpg"]});
});


client.on('ready',ready => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity("Creating The Lubeiverse");
  
});
  
client.login(process.env.BOT_TOKEN);
