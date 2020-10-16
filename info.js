module.exports = {
    name: 'info',
    description: "info about the bot",
    execute(message, args){
        message.channel.send('This bot was created October 13, 2020 and is a bot to play around with and have fun! >youtube (my youtube if you want to check it out)');
    }
}