module.exports = {
    name: 'hi',
    description: "Hi command",
    execute(message, args){
        message.channel.send('Hello!');
    }
}