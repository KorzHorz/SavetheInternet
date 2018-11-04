const Discord = require('discord.js')
const fs = require('fs')

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))

var client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}...`)
})

client.on('message', msg => {
  if (msg.content === '::petition') {
    msg.channel.send('https://www.change.org/p/stoppt-die-zensurmaschine-rettet-das-internet-uploadfilter');
  }
});

client.login(config.token)
