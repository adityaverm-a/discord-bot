module.exports = async function(message, args) {
    if(!message.member.hasPermission('BAN_MEMBERS')) {
        return message.reply('You do not have permission to use that Command!')
    }

    if(args.length === 0) {
        return message.reply('Please provide a valid ID')
    }

    try {
        const user = await message.guild.members.ban(args[0])

        message.channel.send(`${user} - User was banned successfully!`)
    } catch (err) {
        console.log(err)
        message.channel.send('An Error Occured - either I do not have permissions or the user not found!')
    }
}