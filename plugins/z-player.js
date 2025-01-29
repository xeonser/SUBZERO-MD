/*  SSSSS  U   U  BBBBB   ZZZZZ  EEEEE  RRRRR   OOO      M   M   DDDD  
 S       U   U  B    B     Z   E      R   R  O   O     MM MM   D   D 
  SSS    U   U  BBBBB     Z    EEEE   RRRRR  O   O     M M M   D   D 
     S   U   U  B    B   Z     E      R  R   O   O     M   M   D   D 
  SSSSS   UUU   BBBBB  ZZZZZ  EEEEE  R   R   OOO      M   M   DDDD  
*/

// Wanna Use My Codes???
// Give Credits Yah, Mr Frank




 const { cmd, commands } = require('../command');
const yts = require("yt-search");
const axios = require("axios");

// Video Download Command here
cmd({
  pattern: "videopro",
  alias: ["ytvidpro", "ytvpro", 'ytvideopro'],
  react: '🚀',
  desc: "Download videos from YouTube by searching for keywords.",
  category: "video",
  use: ".vidx <keywords>",
  filename: __filename
}, async (conn, msg, m, { from, args, reply }) => {
  try {
    const query = args.join(" ");
    if (!query) {
      return reply("*Please provide a video title or URL*");
    }

    await reply("> SubZero Searching Video... Please Wait...");
    
    const results = await yts(query);
    if (!results.videos || results.videos.length === 0) {
      return reply(" No results found for \"" + query + "\".");
    }

    const video = results.videos[0];
    const url = video.url;
    const apiURL = "https://api.davidcyriltech.my.id/youtube/mp4?url=" + url;

    await reply("> SubZero Downloading Video... Please Wait...");

    const response = await axios.get(apiURL);
    if (!response.data.success) {
      return reply(" Failed to fetch video for \"" + query + "\".");
    }

    const downloadURL = response.data.result.download_url;
    await reply("> SubZero Sending Video... Please Wait...");
    
    await conn.sendMessage(from, { video: { url: downloadURL }, mimetype: "video/mp4" }, { quoted: msg });
    
    await reply(" Video sent successfully!");
  } catch (error) {
    console.error(error);
    reply(" An error occurred while processing your request.");
  }
});


// Audio Download Command here

cmd({
pattern: "playpro",
alias: ["ytapro", "ytplaypro"],
react: '🪄',
desc: "Download audio from YouTube by searching for keywords.",
category: "music",
use: ".playpro <keywords>",
filename: __filename
}, async (conn, msg, m, { from, args, reply }) => {
try {
const query = args.join(" ");
if (!query) {
return reply("_Please provide an audio title or URL_");
}

await reply("> SubZero Searching Song... Please Wait...");

const results = await yts(query);
if (!results.videos || results.videos.length === 0) {
  return reply(" No results found for \"" + query + "\".");
}

const video = results.videos[0];
const url = video.url;
const apiURL = "https://api.davidcyriltech.my.id/youtube/mp3?url=" + url;

await reply("> SubZero Searching For The Song...");

const response = await axios.get(apiURL);
if (!response.data.success) {
  return reply(" Failed to fetch audio for \"" + query + "\".");
}

const downloadURL = response.data.result.download_url;
await reply("> SubZero Sending Song Wait...");

await conn.sendMessage(from, { audio: { url: downloadURL }, mimetype: 'audio/mpeg', ptt: false }, { quoted: msg });

await reply(" Song sent successfully!");

} catch (error) {
console.error(error);
reply(" An error occurred while processing your request.");
}
});
