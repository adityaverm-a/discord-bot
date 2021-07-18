module.exports = function (args, webhookClient) {
    // console.log(args);
    const msg = args.join(' ')
    // console.log(msg);
    webhookClient.send(msg);
}