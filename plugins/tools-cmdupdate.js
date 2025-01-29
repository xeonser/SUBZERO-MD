/*

$$$$$$\            $$\                                               
$$  __$$\           $$ |                                              
$$ /  \__|$$\   $$\ $$$$$$$\  $$$$$$$$\  $$$$$$\   $$$$$$\   $$$$$$\  
\$$$$$$\  $$ |  $$ |$$  __$$\ \____$$  |$$  __$$\ $$  __$$\ $$  __$$\ 
 \____$$\ $$ |  $$ |$$ |  $$ |  $$$$ _/ $$$$$$$$ |$$ |  \__|$$ /  $$ |
$$\   $$ |$$ |  $$ |$$ |  $$ | $$  _/   $$   ____|$$ |      $$ |  $$ |
\$$$$$$  |\$$$$$$  |$$$$$$$  |$$$$$$$$\ \$$$$$$$\ $$ |      \$$$$$$  |
 \______/  \______/ \_______/ \________| \_______|\__|       \______/

Project Name : SubZero MD
Creator      : Darrell Mucheri ( Mr Frank OFC )
Repo         : https//github.com/mrfrank-ofc/SUBZERO-MD
Support      : wa.me/18062212660
*/





































































































































































































const fs = require('fs');
const path = require("path");
const {
  cmd,
  commands
} = require('../command');
cmd({
  'pattern': "updatecmd",
  'react': '🧞',
  'desc': "Update commands.",
  'category': "owner",
  'filename': __filename
}, async (_0x5596d4, _0x31cbbc, _0x4d448e, {
  from: _0x1ed3b9,
  quoted: _0x2505d6,
  body: _0x33c604,
  isCmd: _0x329e89,
  command: _0x1e7345,
  args: _0x230489,
  q: _0x102ad2,
  isGroup: _0x2fade7,
  sender: _0x1fd53b,
  senderNumber: _0x4ed1c3,
  botNumber2: _0x1f3dbd,
  botNumber: _0x452d05,
  pushname: _0x246127,
  isMe: _0x1939a2,
  isOwner: _0x2f9b7f,
  groupMetadata: _0x5986c1,
  groupName: _0x3bcbcd,
  participants: _0x28764c,
  groupAdmins: _0x50b0b8,
  isBotAdmins: _0x18528a,
  isAdmins: _0x2b5b9d,
  reply: _0x262952
}) => {
  try {
    if (!_0x2f9b7f) {
      return _0x262952("Sirf Bot Owner Use Kr Skta Hai Ya CMD.");
    }
    const _0x23d835 = path.join(__dirname, "../plugins");
    const _0x3435ae = fs.readdirSync(_0x23d835);
    for (const _0x555557 of _0x3435ae) {
      if (_0x555557.endsWith(".js")) {
        const _0x2c1f76 = path.join(_0x23d835, _0x555557);
        require(_0x2c1f76);
        console.log("Loaded " + _0x555557);
      }
    }
    _0x262952("Commands updated successfully.");
  } catch (_0x2c1cbe) {
    console.log(_0x2c1cbe);
    _0x262952("Error updating commands: " + _0x2c1cbe.message);
  }
});
