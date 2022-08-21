require("dotenv").config();
const ownerID = 696852868774363136; 

module.exports = {
    name:'botstatus',
    description:'Change Bot Status(Owner Only)',

    async execute(message, args,client){

        if(!message.author.id == ownerID) return message.channel.send({content:":x: Owner Only Command"});

        const text = args.join(" ");

        if(!text) return message.channel.send({content:'Please provide the status'})

        client.user.setActivity(text);

        message.channel.send({content:`Bot Status has been set to ${text}`}); 

    }



}