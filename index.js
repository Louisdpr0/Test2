//——————————🥳——————————\\
//ʙᴀsᴇ sᴄ ᴅɢxᴇᴏɴ, ᴅɪ ʀᴇᴄᴏᴅᴇ ʀᴇʏᴢ
//ᴛɪᴅᴀᴋ ᴜɴᴛᴜᴋ ᴅɪ ᴘᴇʀᴊᴜᴀʟ ʙᴇʟɪᴋᴀɴ
//ᴍʏ ʏᴏᴜᴛᴜʙᴇ ᴄʜᴀɴɴᴇʟ @ʟɪᴛᴢᴢ𝟺𝟺𝟻
//ᴍʏ ɪɴsᴛʀᴀɢʀᴀᴍ @ʀᴇʏᴍᴡᴍᴡᴋ𝟷𝟷𝟸
//ᴋᴏɴᴛᴀᴋ - ᴡᴀ.ᴍᴇ/𝟼𝟸𝟾𝟹𝟷𝟺𝟿𝟻𝟷𝟹𝟸𝟽𝟿
//——————————🥳——————————\\

const {
   spawn
} = require('child_process')
const path = require('path')

function start() {
   let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start()
