module.exports = {
    name: 'cheese',
    description: "cheese role",
    execute(message, args) {

        if(message.member.roles.cache.has('765695531887624193')){
            message.channel.send('**You already have this role. If you would like to add another tea role do >roles then pick the tea you want to add.**');

 
        } else {
            message.channel.send('```You now have the cheese tea role to add another tea role enter another tea name after >. There is a list of tea names under the command >roles. The tea roles only work in the community server use the command >join to join the community server to use it.```');
            message.member.roles.add('765695531887624193').catch(console.error);
        }


    }
}