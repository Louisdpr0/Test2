//——————————🥳——————————\\
//ʙᴀsᴇ sᴄ ᴅɢxᴇᴏɴ, ᴅɪ ʀᴇᴄᴏᴅᴇ ʀᴇʏᴢ
//ᴛɪᴅᴀᴋ ᴜɴᴛᴜᴋ ᴅɪ ᴘᴇʀᴊᴜᴀʟ ʙᴇʟɪᴋᴀɴ
//ᴍʏ ʏᴏᴜᴛᴜʙᴇ ᴄʜᴀɴɴᴇʟ @ʟɪᴛᴢᴢ𝟺𝟺𝟻
//ᴍʏ ɪɴsᴛʀᴀɢʀᴀᴍ @ʀᴇʏᴍᴡᴍᴡᴋ𝟷𝟷𝟸
//ᴋᴏɴᴛᴀᴋ - ᴡᴀ.ᴍᴇ/𝟼𝟸𝟾𝟹𝟷𝟺𝟿𝟻𝟷𝟹𝟸𝟽𝟿
//——————————🥳——————————\\

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "6289653898291"
global.ownername = "Rizki F"
global.location = "Unknown"

global.ownernumber = '6289653898291'  //creator number
global.ownername = 'Rizki F' //owner name
global.botname = 'ZeniBot' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = 'ZeniBot'

//console view/theme
global.themeemoji = '🌀'
global.wm = "Reyz Bot Bug"

//theme link
global.link = 'https://ksrcloud.dev'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = true //auto read messages
global.autobio = true //auto update bio
global.anti92 = false //auto block +92 
global.autoread_status = true //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v4'

//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./XeonMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})