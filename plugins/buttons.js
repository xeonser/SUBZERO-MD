/*const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');
const { Buttons, List } = require('whatsapp-web.js');

cmd({
  pattern: "testbutton",
  alias: [],
  react: "🏈",
  desc: "Test buttons",
  category: "test",
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
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    const buttons = [
      { buttonId: 'id1', buttonText: { displayText: 'Button 1' }, type: 1 },
      { buttonId: 'id2', buttonText: { displayText: 'Button 2' }, type: 1 }
    ];

    const buttonMessage = {
      text: "Test buttons",
      footer: "Button footer",
      buttons: buttons,
      headerType: 1
    };

    await reply(buttonMessage);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});
*/
