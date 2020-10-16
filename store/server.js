module.exports = {
    name: 'server',
    description: "server",
    execute(message, args){
        message.channel.send('This servers name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}');
    }
}