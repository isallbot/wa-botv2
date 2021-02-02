const help = (pushname, prefix, botName, ownerName, reqXp, getLevelingLevel, sender, _registered, uangku) => {
        return `🔰 -----[ *I'm ${botName}* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ UANG : Rp:${uangku}
┃│➸ XP : ${reqXp}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Berikut adalah fitur yang ada pada bot ini!✨
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭──────────────────
┃│➸ *${prefix}info*
┃│➸ *${prefix}ping*
┃│➸ *${prefix}donasi*
┃│➸ *${prefix}owner*
┃│───────────────────
┃│➸ *${prefix}simple*
┃│➸ *${prefix}maker*
┃│➸ *${prefix}gabut*
┃│➸ *${prefix}download*
┃│➸ *${prefix}random*
┃│➸ *${prefix}dompet*
┃│➸ *${prefix}other*
┃│➸ *${prefix}group*
┃│➸ *${prefix}owb*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛

*DAFTAR MENU ADA DI ATAS YAA*

♻️ JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!
♻️ MAU DONASI? SILAHKAN KETIK !donate

📺 *Iklan* : ( MAU PASANG SEWA BOT CP OWNER AE )

✅ Follow akun instagram admin https://www.instagram.com/faisall_wapi/

♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

♻️ OWNER *FAISAL WAPI ?*
☎️ WA : wa.me/6289630267618
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan *KALO ADA PAKET YAA TOLOL:v* ‼️
👥 GROUP 1 : https://chat.whatsapp.com/HXoDilHy4TsJghPDltH2VL

🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.help = help
