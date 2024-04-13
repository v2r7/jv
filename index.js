///حقوق عمر .*omar#6277
const Discord = require("discord.js");
///حقوق عمر .*omar#6277
const client = new Discord.Client();
///حقوق عمر .*omar#6277
const prefix ="1";//البادئة:
///حقوق عمر .*omar#6277
client.on('ready',()=>{
   console.log(`Bot is On! ${client.user.tag}`);
});
///حقوق عمر .*omar#6277

///حقوق عمر .*omar#6277
client.on('message', msg => {
if(msg.content == 'auto') {
  ///حقوق عمر .*omar#6277
  ///حقوق عمر .*omar#6277
msg.channel.send("line")
}
})
///حقوق عمر .*omar#6277
let line99 = `https://cdn.discordapp.com/attachments/1126021299240710174/1228828892991721582/970041967708880896.png?ex=662d7716&is=661b0216&hm=2142c90bd489fe6feb03d8bfdeb5e6d7b626c00250b0ecec9e84bda5b12232bf&`
client.on("message", message => {
 
  if (message.guild.id != "941374651664330753") return;//ايدي السيرفر
  if (message.channel.id != "942391792849023058") return;//ايدي الروم
  if(message.author.id === client.user.id) return;
  ///حقوق عمر .*omar#6277
      if (message.author.send) {
    message.channel.send(line99);//
 
  }
 ///حقوق عمر .*omar#6277
})
///حقوق عمر .*omar#6277
client.on("message", message=>{
if(message.content.startsWith("خط")){
message.channel.send(line99)
message.delete()
}
})

})
///حقوق عمر .*omar#6277
client.on("message", message=>{
if(message.content.startsWith("line")){
message.channel.send(line99)
message.delete()
}
})
///حقوق عمر .*omar#6277

///حقوق عمر .*omar#6277


///حقوق عمر .*omar#6277
client.login(process.env.token); 
