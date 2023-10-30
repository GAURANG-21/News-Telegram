const { Telegraf } = require('telegraf')
const axios =require('axios')
// const bot=new Telegraf("token ??");

/**
 * How to get the secret token for creating a bot?
 * -> Open Telegram and search for BotFather
 * -> to read instructions, type /start and press enter
 * -> To create a new bot, type /newbot and press enter
 * -> It will ask for a bot name, give a bot name without a/, ex: coding_bot
 * -> then it will ask for a username ending with bot, ex: coding_bot
 * //https://t.me/Codo_codo_bot
 */

let binarySearchjs = `This is binary Search
You will feel it 
You will see it 
Abhi dikhata hu 
`
const bot=new Telegraf('6384603271:AAFjor-oK9moo9-7SZ3F-dfeEvp69SlpAug')

bot.start(((ctx)=>{
    ctx.reply("Welcome to the new coding bot")
}));
bot.command('binarySearchjs', (ctx)=>{ctx.reply(binarySearchjs)})
bot.on("sticker", (ctx)=>{ctx.reply('😀')})
bot.command('go',async function (ctx){
 let response = await axios.get('https://raw.githubusercontent.com/GAURANG-21/hactoberfest2022/master/go_programs/amountInWords.go');
 console.log(response.data)
 ctx.reply(response.data)
})
bot.launch();