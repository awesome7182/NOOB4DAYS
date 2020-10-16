module.exports = {
    name: 'help',
    description: "this is a help command.",
    execute(message, args){
        message.channel.send('```Heres a list of the current commands.\n>help (obviously)\n>info(info about the bot)\n>youtube(my youtube?)\n>roles(list of tea roles only works in community server)\n>tea(mmm tea)\n>ping(ping! - pong!)\n>join(join the community server if your not already in it)\n>invite(invite the bot to your server!!)\n>hi(say hi to the bot!)\n>activate(random command)\n>updates(recieve updates about the bot) ```');
    }
}