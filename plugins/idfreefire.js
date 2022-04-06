let fetch = require('node-fetch')
let handler = async (m, { args, usedPrefix, command }) => {
  if (!args[0]) throw `uhm.. id nya mana?\n\ncontoh:\n${usedPrefix + command} 1906651269`
  let res = await fetch(`https://apikey-bear3.herokuapp.com/api/id/epep?apikey=${bearkey}&id=${args[0]}`)
    if (!res.ok) throw eror
  let json = await res.json()
  m.reply(json.result)
}
handler.help = ['epep'].map(v => v + ' <id>')
handler.tags = ['internet']
handler.command = /^(freefire|epep)$/i

module.exports = handler
