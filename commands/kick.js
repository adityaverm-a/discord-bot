module.exports = function (message, args) {
    if(!message.member.hasPermission('KICK_MEMBERS')) {
        return message.reply('You do not have permission to use that command!')
    }

    if(args.length === 0) {
        return message.reply('Please provide a valid ID')
    }

    const member = message.guild.members.cache.get(args[0])
    if(member) {
        member
            .kick()
            .then((member) => message.channel.send(`${member} was kicked`))
            .catch((err) => message.channel.send('i cannot kick that user :('))
    } else {
        message.channel.send('That member not found')
    }
}