module.exports = {
    name: 'enb-remove',
    description: "remove english breakfast role",
    execute(message, args) {

        if(message.member.roles.cache.has('765695622724059186')){
            message.channel.send('**Jasmine Tea role was removed. To add it again do >enb if not then do >roles to find another tea role to add.**');
            message.member.roles.remove('765695622724059186').catch(console.error);
 
        } else {
            message.channel.send('```You already have this role removed. To re-add it do >enb or to find more roles do >roles```');
        }


    }
}