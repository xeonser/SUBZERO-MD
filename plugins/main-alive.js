
const { cmd } = require("../command");
const moment = require("moment-timezone");
let botStartTime = Date.now();

const ALIVE_IMG = "https://i.ibb.co/KhnqBwt/mrfrankofc.jpg";

cmd({
  pattern: "alive",
  desc: "Check if the bot is active.",
  category: "info",
  react: "🫡",
  filename: __filename
}, async (conn, mek, m, { reply, from }) => {
  try {
    const pushname = m.pushName || "User";
    const harareTime = moment().tz("Africa/Harare").format("HH:mm:ss");
    const harareDate = moment().tz("Africa/Harare").format("dddd, MMMM Do YYYY");
    const runtimeMilliseconds = Date.now() - botStartTime;
    const runtimeSeconds = Math.floor((runtimeMilliseconds / 1000) % 60);
    const runtimeMinutes = Math.floor((runtimeMilliseconds / (1000 * 60)) % 60);
    const runtimeHours = Math.floor(runtimeMilliseconds / (1000 * 60 * 60));
    const formattedInfo = `
 🏮 *SUBZERO MD STATUS* 🏮 

  *Hi👋😄 ${pushname}*

 *⏰ Time: ${harareTime}*
 *📆 Date: ${harareDate}*
 *🔋 Uptime: ${runtimeHours} hours, ${runtimeMinutes} minutes, ${runtimeSeconds} seconds*

 \`Status\`: *Subzero is online! 🤗🚀*

> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐌𝐑 𝐅𝐑𝐀𝐍𝐊
`.trim();

    if (!ALIVE_IMG || !ALIVE_IMG.startsWith("http")) {
      throw new Error("Invalid ALIVE_IMG URL. Please set a valid image URL.");
    }

    await conn.sendMessage(from, {
      image: { url: ALIVE_IMG },
      caption: formattedInfo,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363304325601080@newsletter',
          newsletterName: 'ѕυϐzєяο м∂ ',
          serverMessageId: 143
        }
      }
    }, { quoted: mek });
  } catch (error) {
    console.error("Error in alive command: ", error);
    const errorMessage = `
 An error occurred while processing the alive command.
 Error Details: ${error.message}
Please report this issue or try again later.
`.trim();
    return reply(errorMessage);
  }
});
