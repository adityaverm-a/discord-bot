require('dotenv').config()

const { Client, WebhookClient } = require('discord.js')

const ban = require('./commands/ban')
const gif = require('./commands/gif')
const kick = require('./commands/kick')
const announce = require('./commands/announce')
const randomReplies = require('./commands/randomRepiles')

const client = new Client({
    partials: ['MESSAGE', 'REACTION']
})

const webhookClient = new WebhookClient(
    process.env.WEBHOOK_ID,
    process.env.WEBHOOK_TOKEN
)

const PREFIX = "$"

client.login(process.env.DICORDJS_BOT_TOKEN)

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`)
})

client.on('message', async (message) => {
    if(message.author.bot) return

    if(message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/)

        if(CMD_NAME === 'kick') {
            kick(message, args)
        } else if(CMD_NAME === 'ban') {
            ban(message, args)
        } else if(CMD_NAME === 'announce') {
            announce(args, webhookClient)
        } else if(CMD_NAME === 'gif') {
            gif(message, args)
        }
    }

    if(message.content === 'Hello' || message.content === 'hello' || message.content === 'Hey' || message.content === 'hey' || message.content === 'Hi' || message.content === 'hi' || message.content === 'Hii' || message.content === 'hii' ) {
        randomReplies(message)
    }
})

client.on('messageReactionAdd', (reaction, user) => {
    const { name } = reaction.emoji
    const member = reaction.message.guild.members.cache.get(user.id)
    
    // console.log(name);
    
    if(reaction.message.id === '866267829883764746') {
        switch (name) {
            case '🤓':
                member.roles.add('866268127050596382')
                break;
        
            case '💻':
                member.roles.add('866268193797570630')
                break;

            case '🎮':
                member.roles.add('866268291727097857')
                break;

            case '🎨':
                member.roles.add('866268329241083904')
                break;
        }
    }
})


client.on('messageReactionRemove', (reaction, user) => {
    const { name } = reaction.emoji
    const member = reaction.message.guild.members.cache.get(user.id)

    // console.log(name);
    
    if(reaction.message.id === '866267829883764746') {
        switch (name) {
            case '🤓':
                member.roles.remove('866268127050596382')
                break;
        
            case '💻':
                member.roles.remove('866268193797570630')
                break;

            case '🎮':
                member.roles.remove('866268291727097857')
                break;

            case '🎨':
                member.roles.remove('866268329241083904')
                break;
        }
    }
})

