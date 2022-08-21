require("dotenv").config();
const ownerid = 696852868774363136;

module.exports = {

    name:'banemit',
    description:'Simulates Ban Events(Owner Only)',

    async execute(message,args,client){
        if(message.author.id != ownerid) return;




        client.emit('guildBanAdd', message.member);

        message.channel.send({content:'Ban Event Simulation Success'})
    }
}