const { Client, GatewayIntentBits } = require('discord.js');
const shortUrl = require('./urlShortner/url');
const totalClick = require('./urlShortner/totalClicks');
require('dotenv').config()


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const urlShortener = "1193383163221782548"

client.on('messageCreate', (message) => {

    if (message.author.bot) return
    // console.log(message)

    if (message.content.startsWith("create")) {
        const url = message.content.split("create ").join("")
        message.reply({
            content: "URL: " + url
        })
    } else {
        message.reply({
            content: "Hii I am chhotu Bot"
        })
    }

})

client.on('interactionCreate', async (interaction) => {
    try {
        if (!interaction.isCommand()) return;
        if (interaction.commandName === 'ping') {
            interaction.reply("Pong!!!")
        }

        if (interaction.commandName === 'say') {
            const textToSay = interaction.options.getString('text');
            interaction.reply({
                content: `You are saying: **${textToSay}**`
            })
        }


        try {
            if (interaction.channel.id === urlShortener) {
                if (interaction.commandName === 'create') {
                    const create = interaction.options.getString('text');

                    const shortId = await shortUrl(create)

                    interaction.reply({
                        content: `Your short URL: **https://url-xd46.onrender.com/u/${shortId}**`
                    })
                }else if (interaction.commandName === 'clicks') {
                    const providedUrl = interaction.options.getString('text');

                    const clicks = await totalClick(providedUrl)

                    interaction.reply({
                        content: `Total Clicks: **${clicks}**`
                    })
                }
            }
        } catch (error) {
            interaction.reply({
                content: "This command not exist"
            })
        }
    } catch (error) {
        interaction.reply({
            content: "This command not existtttttt"
        })
    }
})

client.login(process.env.BOT_TOKEN)