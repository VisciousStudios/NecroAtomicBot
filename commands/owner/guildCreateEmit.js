require("dotenv").config();
const ownerid = 696852868774363136;

module.exports = {

    name:'guildcreate',
    description:'Simulates Guild Create Events(Owner Only)',

    async execute(message,args,client){
        if(!message.author.id == ownerid) return;




        client.emit('guildCreate', message.guild);

        message.channel.send({content:'Guild Create Event Simulation Success'})
    }
}