module.exports = {
    name: 'tea',
    description: "want some tea",
    execute(message, args){
        message.channel.send('Jasmine tea is all we got ;)');
    }
}