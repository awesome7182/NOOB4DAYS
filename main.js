const { info } = require('console');
const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '>';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Jasmine-Tea is heating up and online!');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
   
    } else if (command == 'help'){
        client.commands.get('help').execute(message, args);
    }else if (command == 'info'){
        client.commands.get('info').execute(message, args);
    }else if (command == 'updates'){
        client.commands.get('updates').execute(message, args);
    }else if (command == 'youtube'){
        client.commands.get('youtube').execute(message, args);
    }else if (command == 'tea'){
        client.commands.get('tea').execute(message, args);
    }else if (command == 'invite'){
        client.commands.get('invite').execute(message, args);
    }else if (command == 'activate'){
        client.commands.get('activate').execute(message, args);
    }else if (command == 'hi'){
        client.commands.get('hi').execute(message, args);
    }else if (command == 'jasmine'){ //jasmine
        client.commands.get('jasmine').execute(message, args); 
    }else if (command == 'join'){
        client.commands.get('join').execute(message, args);
    }else if (command == 'mint'){ //mint
        client.commands.get('mint').execute(message, args); 
    }else if (command == 'chai'){ //chai
        client.commands.get('chai').execute(message, args); 
    }else if (command == 'cheese'){ //chai
        client.commands.get('cheese').execute(message, args); 
    }else if (command == 'lemon'){ //lemon
        client.commands.get('lemon').execute(message, args); 
    }else if (command == 'honey'){ //honey
        client.commands.get('honey').execute(message, args); 
    }else if (command == 'chamomile'){ //chamomile
        client.commands.get('chamomile').execute(message, args); 
    }else if (command == 'englishb'){ //english breakast
        client.commands.get('englishb').execute(message, args); 
    }else if (command == 'fruity'){ //fruity
        client.commands.get('fruity').execute(message, args); 
    }else if (command == 'roles'){ //see tea roles
        client.commands.get('roles').execute(message, args); 
    }else if (command == 'j-remove'){ //removes jasmine role
        client.commands.get('j-remove').execute(message, args);
    }else if (command == 'c-remove'){ //removes cheese role
        client.commands.get('c-remove').execute(message, args);
    }else if (command == 'ch-remove'){ //removes chamomile role
        client.commands.get('ch-remove').execute(message, args);
    }else if (command == 'chai-remove'){ //removes chai role
        client.commands.get('chai-remove').execute(message, args);
    }else if (command == 'enb-remove'){ //removes english breakfast role
        client.commands.get('enb-remove').execute(message, args);
    }else if (command == 'f-remove'){ //removes fruity role
        client.commands.get('f-remove').execute(message, args);
    }else if (command == 'h-remove'){ //removes honey role
        client.commands.get('h-remove').execute(message, args);
    }else if (command == 'l-remove'){ //removes lemon role
        client.commands.get('l-remove').execute(message, args);
    }else if (command == 'm-remove'){ //removes mint role
        client.commands.get('m-remove').execute(message, args);
    }else if (command == 'server') {
        message.channel.send('This servers name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}');
    }

});
 
//+ const fs = require('fs');
//const Discord = require('discord.js');
//const { prefix, token } = require('./config.json');

//const client = new Discord.Client();
//+ client.commands = new Discord.Collection();

client.login('');
