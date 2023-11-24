//——————————🥳——————————\\
//ʙᴀsᴇ sᴄ ᴅɢxᴇᴏɴ, ᴅɪ ʀᴇᴄᴏᴅᴇ ʀᴇʏᴢ
//ᴛɪᴅᴀᴋ ᴜɴᴛᴜᴋ ᴅɪ ᴘᴇʀᴊᴜᴀʟ ʙᴇʟɪᴋᴀɴ
//ᴍʏ ʏᴏᴜᴛᴜʙᴇ ᴄʜᴀɴɴᴇʟ @ʟɪᴛᴢᴢ𝟺𝟺𝟻
//ᴍʏ ɪɴsᴛʀᴀɢʀᴀᴍ @ʀᴇʏᴍᴡᴍᴡᴋ𝟷𝟷𝟸
//ᴋᴏɴᴛᴀᴋ - ᴡᴀ.ᴍᴇ/𝟼𝟸𝟾𝟹𝟷𝟺𝟿𝟻𝟷𝟹𝟸𝟽𝟿
//——————————🥳——————————\\

const fs = require('fs')

const addAfkUser = (userId, time, reason, _dir) => {
    const obj = { id: userId, time: time, reason: reason }
    _dir.push(obj)
    fs.writeFileSync('./database/afk-user.json', JSON.stringify(_dir, null, 2))
}
const checkAfkUser = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}
const getAfkReason = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].reason
    }
}
const getAfkTime = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].time
    }
}
const getAfkId = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].id
    }
}
const getAfkPosition = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    return position
}
module.exports = {
    addAfkUser,
    checkAfkUser,
    getAfkReason,
    getAfkTime,
    getAfkId,
    getAfkPosition
}