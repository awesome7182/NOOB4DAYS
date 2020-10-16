module.exports = {
    name: 'roles',
    description: "this is to get the roles",
    execute(message, args){
        message.channel.send('__Heres a list of the tea roles__ ```**>jasmine** ----- **>cheese** -----**>fruity** ----- **>chai** ----- **>englishb** ----- **>chamomile** ----- **>lemon** ----- **>honey** ----- **>mint**```');
    }
}