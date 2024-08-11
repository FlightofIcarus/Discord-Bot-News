import "dotenv/config";
import { Client, GatewayIntentBits } from 'discord.js';
import { google } from 'googleapis';
import { schedule } from 'node-cron';


const discordCliente = new Client({
    intents: [
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.Guilds]
});

const youtubeCliente = google.youtube({
    version: "v3",
    auth: process.env.API_KEY_YT
});

let latestVideoId = '';

discordCliente.login(process.env.DISCORD_TOKEN);

discordCliente.on('ready', () => {
    console.log(`Bot on como ${discordCliente.user.tag}`);
    checkNewVideos();
    schedule("* * 0 * * *",checkNewVideos)
});

async function checkNewVideos() {
    try {
        const response = await youtubeCliente.search.list({
            channelId: 'UCpKvMmsF6QrkVr_zWaLGK-A',
            order: 'date',
            part: 'snippet',
            type: 'video',
            maxResults: 1
        }).then(res => res)
        const latestVideo = await response.data.items[0]

        if(latestVideo?.id?.videoId != latestVideoId){
            latestVideoId = latestVideo?.id?.videoId;
            const videoUrl = `https://www.youtube.com/watch?v=${latestVideoId}`;
            const message = 'Confira o último vídeo do canal: '
            const channel = discordCliente.channels.cache.get(process.env.ID_CANAL);
            channel.send(message + videoUrl);
        }
    } catch (error) {
       console.log({
        ErrorCode: error.status,
        message: 'Erro ao verificar o último vídeo'
    }); 
    }
};