const fetch = require('node-fetch')

module.exports = async function (message, args) {
    let keyword = "meme";

    if(args.length > 0) {
        keyword = args.join(' ')
    }

    let url = `https://g.tenor.com/v1/search?q=${keyword}&key=${process.env.TENOR_KEY}&contentfilter=high`

    let data = await fetch(url)
    let json = await data.json()
    // console.log(json)

    const index = Math.floor(Math.random() * json.results.length)
    message.channel.send(json.results[index].url)
    message.channel.send("GIF from Tenor: " + keyword)
}