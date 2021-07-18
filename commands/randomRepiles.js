const replies = [
    "Hey, Are you a cat person or a dog person?", 
    "Hiee, Have you done anything exciting lately?", 
    "Hello! Do you listen to any podcasts? Which is your favorite?", 
    "Hey, What do you think is the best show on Netflix right now?", 
    "Hiee, Have you been on any interesting trips lately?", 
    "Hello! Where do you want to be in five years?", 
    "Hey, What superpower do you wish you could have?", 
    "Hiee, What is your favorite book of all time?", 
    "Hello! Do you like documentaries? Have you watched any good ones recently?", 
    "Hey, Doing anything fun this weekend?" 
]

module.exports = function(message) {
    const index = Math.floor(Math.random() * replies.length)
    message.channel.send(replies[index])
}