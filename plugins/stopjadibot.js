let handler  = async (m, { conn }) => {
  if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, 'tunggu sebentar sedang di proses , jika qr nya masih muncul ketik *.berhenti*', m)
  else {
    await conn.reply(m.chat, 'Goodbye bot :\')', m)
    conn.close()
  }
}
handler.help = ['berhenti','stop']
handler.tags = ['jadibot']
handler.command = /^(berhenti|stop)$/i
handler.owner = false 
handler.mods = false
handler.premium = false 
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

