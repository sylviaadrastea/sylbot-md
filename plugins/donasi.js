const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let tqto = `
┌〔 𝘿𝙤𝙣𝙖𝙨𝙞 • 𝙀𝙢𝙤𝙣𝙚𝙮 
├ _DANA_ : *0882-7926-8363*
├ _SAWERIA_ : *https://saweria.co/raraharsita2*
├ *SELAIN DANA VIA QR AJA ATAU SAWERIA*
└────`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: tqto,
           locationMessage: { 
           jpegThumbnail: await (await fetch(`https://i.ibb.co/rkTg7B0/donasi.jpg`)).buffer() }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '𝙶𝙴𝚃 𝙱𝙾𝚃',
               url: 'https://youtu.be/Sgb5BVOW66Y'
             }

           },
       
               {
             quickReplyButton: {
               displayText: '𝙱𝙰𝙲𝙺 𝚃𝙾 𝙼𝙴𝙽𝚄',
               id: '.menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
