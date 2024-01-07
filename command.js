const { REST, Routes } = require('discord.js')
require('dotenv').config();

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
    {
        name: 'say',
        description: 'Repeats what you say',
        options: [
            {
                name: 'text',
                type: 3,
                description: 'The text you want the bot to say',
                required: true,
            },
        ],
    },
    {
        name: 'create',
        description: 'Create your short URL',
        options: [
            {
                name: 'text',
                type: 3,
                description: 'The text you want the bot to say',
                required: true,
            },
        ],
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN);

(
    async () => {
        try {
            console.log('Started refreshing application (/) commands.');

            await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

            console.log('Successfully reloaded application (/) commands.');
        } catch (error) {
            console.error(error);
        }
    }
)();