module.exports = {
    name: 'm-remove',
    description: "remove mint role",
    execute(message, args) {

        if(message.member.roles.cache.has('765695622724059186')){
            message.channel.send('**Mint Tea role was removed. To add it again do >mint if not then do >roles to find another tea role to add.**');
            message.member.roles.remove('765695622724059186').catch(console.error);
 
        } else {
            message.channel.send('```You already have this role removed. To re-add it do >mint or to find more roles do >roles```');
        }


    }
}