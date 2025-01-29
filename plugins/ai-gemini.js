/*

Hey Cloner Make This Work
Yours Mr Frank


const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
  pattern: "bot",
  alias: ["geminai","gpt"],
  react: "🤖",
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply("Please ask a question or provide input for the AI.");
    const userInput = q.trim();
    if (userInput === "") return reply("Please provide a valid input.");
    const apiUrl = `https://api.giftedtech.web.id/api/ai/geminiaipro?apikey=gifted&q=${encodeURIComponent(userInput)}`;
    const response = await axios.get(apiUrl);
    console.log('API Response:', response.data);
    if (!response.data || !response.data.message) {
      return reply("No response from the AI or invalid API response.");
    }
    const aiResponse = response.data.message.trim();
    return reply(`\`🤖 GEMINI AI RESPONSE:\` \n\n${aiResponse}`);
  } catch (error) {
    console.error('Error:', error);
    reply(`An error occurred: ${error.message}`);
  }
});
*/
