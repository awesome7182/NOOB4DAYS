module.exports = {
    name: 'invite',
    description: "invite bot to their server",
    execute(message, args){
        message.channel.send('Here is the link to invite the bot to your server. https://discord.com/oauth2/authorize?client_id=765645973963014215&scope=bot&permissions=2146958847 ');
    }
}