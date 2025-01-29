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





































































































































































































const {
  cmd,
  commands
} = require("../command");
const path = require('path');
cmd({
  'pattern': "save",
  'react': '📁',
  'alias': ["store"],
  'desc': "Save and send back a media file (image, video, or audio).",
  'category': "media",
  'use': ".save <caption>",
  'filename': __filename
}, async (_0x2ecf0f, _0x3c0350, _0x2b9c8c, {
  quoted: _0x2103b0,
  q: _0x435112,
  reply: _0x4f53e2
}) => {
  try {
    if (!_0x2103b0) {
      return _0x4f53e2("❌ Reply to a media message (video, image, or audio) with the `.save` command.");
    }
    const _0x3debb4 = _0x2103b0.mtype;
    let _0x21e1be;
    if (/video/.test(_0x3debb4)) {
      _0x21e1be = "video";
    } else {
      if (/image/.test(_0x3debb4)) {
        _0x21e1be = "image";
      } else {
        if (/audio/.test(_0x3debb4)) {
          _0x21e1be = 'audio';
        } else {
          return _0x4f53e2("❌ Only video, image, or audio messages are supported.");
        }
      }
    }
    const _0x1a523a = await _0x2ecf0f.downloadAndSaveMediaMessage(_0x2103b0);
    const _0x5af1b3 = path.resolve(_0x1a523a);
    const _0x4acfdc = {
      'caption': _0x435112 || ''
    };
    _0x4acfdc[_0x21e1be] = {
      'url': 'file://' + _0x5af1b3
    };
    await _0x2ecf0f.sendMessage(_0x2b9c8c.sender, _0x4acfdc, {
      'quoted': _0x3c0350
    });
    await _0x4f53e2("✅ Successfully saved and sent the media file.");
  } catch (_0x1791ca) {
    console.error(_0x1791ca);
    _0x4f53e2("❌ Failed to save and send the media. Please try again.");
  }
});
