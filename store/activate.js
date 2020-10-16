module.exports = {
    name: 'activate',
    description: "random role",
    execute(message, args){

        if(message.member.roles.cache.has('765762870662922251')){
            message.channel.send('You have the random role already..');


        } else {
            message.channel.send('Here ill give you access to this random role!');
            message.member.roles.add('765762870662922251');
        }


    }
}