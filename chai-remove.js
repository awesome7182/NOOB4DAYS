module.exports = {
    name: 'chai-remove',
    description: "remove chai role",
    execute(message, args) {

        if(message.member.roles.cache.has('765695622724059186')){
            message.channel.send('**Chai Tea role was removed. To add it again do >chai if not then do >roles to find another tea role to add.**');
            message.member.roles.remove('765695622724059186').catch(console.error);
 
        } else {
            message.channel.send('```You already have this role removed. To re-add it do >chai or to find more roles do >roles```');
        }


    }
}