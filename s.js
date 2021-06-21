client.on('message', message => {
  var log = message.guild.channels.find('name', 'ban-log');
  if(!log){
    message.guild.createChannel("ban-log", "text").then(c =>{
        c.overwritePermissions(message.guild.id, {
          READ_MESSAGES: false
 
    })
    })
    }
  var p = message.mentions.members.first();
  var reason = message.content.split(" ").slice(2).join(' ');
 if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
    return message.channel.send("You dont have BAN_MEMBERS Permission!");
  if(message.content.startsWith(${prefix}ban)){
      if(!p) return message.reply(**منشن الشخص**);
      if(!reason) return message.reply(**حط سبب
('1', "**نشر روابط بدون اذن الادارة**")
('2', "**نشر في الخاص**")
('3', "**اسم غير لائق**")
('4', "**صوره غير لائقه**")
('5', "**سب الاهل**")
('6', "**سب**")
('7', "**تقليل احترام**")
('8', "**تحرش**")
**)
   
      if(!p.bannable) return message.reply(**م اقدر ابند شخص من الستاف**);
      reason = reason.replace('1', "نشر روابط بدون اذن الادارة");
      reason = reason.replace('2', "نشر في الخاص");
      reason = reason.replace('3', "اسم غير لائق");
      reason = reason.replace('4', "صوره غير لائقه");
      reason = reason.replace('5', "سب الاهل");
      reason = reason.replace('6', "سب");
      reason = reason.replace('7', "تقليل احترام");
      reason = reason.replace('8', "تحرش");
      var embed = new Discord.RichEmbed()
      .setAuthor(User Banned!)
      .addField(Name ♣, <@${p.id}>)
      .addField(By ♣, <@${message.author.id}>)
      .addField(Reason ♣, reason)
      .setTimestamp()
      .setColor("BLACK")
      .setFooter( )
      p.ban();
          message.delete();
      log.send({embed});
     
    }
  });
