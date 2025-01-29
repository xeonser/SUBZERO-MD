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





























































































































































































/*

const { cmd, commands } = require('../command');
const config = require('../config');
// repo info
cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Info about the bot repository",
    category: "main",
    react: "🗂️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
   
 
 try {
        let dec = `*Hello There SUBZERO W.A BOT User! 😄👋* 

> Simple, Icy, Cold  & Rich Loaded Bot With Amazing Features, SubZero WhatsApp Bot. ❄️

*Thanks for using SubZero MD🌹🫶* 

> Don't forget to star & fork the repo🌟🍴

https://github.com/mrfrank-ofc/SUBZERO-MD
──────────────────
'`;

        await conn.sendMessage(from, { image: { url: `https://i.postimg.cc/yNf7rQFw/prn.jpg` }, caption: dec, contextInfo: { mentionedJid: [m.sender], forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363304325601080@newsletter', newsletterName: '『 sᴜʙᴢᴇʀᴏ ᴍᴅ 』', serverMessageId: 143 } } }, { quoted: mek });

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/mrfrank-ofc/SUBZERO-MD-DATABASE/raw/refs/heads/main/audios/subzero-menu.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

*/









const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const fetch = require('node-fetch');
const config = require('../config');    
const { cmd } = require('../command');

cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Fetch information about a GitHub repository.",
    react: "❄️",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/mrfrank-ofc/SUBZERO';

    try {
        // Extract username and repo name from the URL
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

        // Fetch repository details using GitHub API
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        
        if (!response.ok) {
            throw new Error(`GitHub API request failed with status ${response.status}`);
        }

        const repoData = await response.json();

        // Format the repository information
        const formattedInfo = `*Hello There SUBZERO W.A BOT User! 😄👋* 

> Simple, Icy, Cold  & Rich Loaded Bot With Amazing Features, SubZero WhatsApp Bot. ❄️

*Thanks for using SubZero MD🌹🫶* 

> Don't forget to star & fork the repo🌟🍴

https://github.com/mrfrank-ofc/SUBZERO
──────────────────
${readMore}
\`BOT NAME:\`❄️
> ${repoData.name}

\`OWNER NAME:\`👨‍💻
> ${repoData.owner.login}

\`STARS:\`🌟
> ${repoData.stargazers_count}

\`FORKS:\`🍴
> ${repoData.forks_count}

\`DESCRIPTION:\`📃
> ${repoData.description || 'No description'}\n
──────────────────
\n> *© ροωєяє∂ ϐγ мя ƒяαиκ οƒϲ* 🎐`;

        // Send an image with the formatted info as a caption and context info
        await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/jrhPy01/mrfrankofc.jpg` },
            caption: formattedInfo,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363304325601080@newsletter',
                    newsletterName: 'ѕυϐzєяο м∂ ϐιτ',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // Send the audio file with context info
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/mrfrank-ofc/SUBZERO-MD-DATABASE/raw/refs/heads/main/audios/subzero-menu.mp3' },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363304325601080@newsletter',
                    newsletterName: 'ѕυϐzєяο м∂ ϐοτ',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in repo command:", error);
        reply("Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
});


/*function _0x2670(_0x5c5200,_0x32c412){const _0x8bb983=_0x8bb9();return _0x2670=function(_0x2670d6,_0x212cef){_0x2670d6=_0x2670d6-0x140;let _0x769225=_0x8bb983[_0x2670d6];return _0x769225;},_0x2670(_0x5c5200,_0x32c412);}const _0x1188db=_0x2670;function _0x8bb9(){const _0x1dce14=['*Hello\x20There\x20SUBZERO\x20W.A\x20BOT\x20User!\x20😄👋*\x20\x0a\x0a>\x20Simple,\x20Icy,\x20Cold\x20\x20&\x20Rich\x20Loaded\x20Bot\x20With\x20Amazing\x20Features,\x20SubZero\x20WhatsApp\x20Bot.\x20❄️\x0a\x0a*Thanks\x20for\x20using\x20SubZero\x20MD🌹🫶*\x20\x0a\x0a>\x20Don\x27t\x20forget\x20to\x20star\x20&\x20fork\x20the\x20repo🌟🍴\x0a\x0ahttps://github.com/mrfrank-ofc/SUBZERO-MD','repo','audio/mp4','script','6352100HuHVBg','16MyRyGi','log','120363304325601080@newsletter','6ztDjDi','Hello\x20World!','366nHCfcJ','🗂️','info','https://github.com/mrfrank-ofc/SUBZERO-MD-DATABASE/raw/refs/heads/main/audios/subzero-yali.mp3','Info\x20about\x20the\x20bot\x20repository','sender','576951xFMEbw','752609ouBMOR','143610ObVMeo','97580XfbYUx','../command','3364MpVTSO','3639213HrsTfy','sendMessage','685mqeTtu','『\x20SᴜʙZᴇʀᴏ\x20ᴍᴅ\x20』'];_0x8bb9=function(){return _0x1dce14;};return _0x8bb9();}(function(_0x2dca43,_0x345715){const _0x4565e2=_0x2670,_0x323d4b=_0x2dca43();while(!![]){try{const _0x311a5a=-parseInt(_0x4565e2(0x155))/0x1+parseInt(_0x4565e2(0x157))/0x2*(-parseInt(_0x4565e2(0x14d))/0x3)+-parseInt(_0x4565e2(0x140))/0x4*(-parseInt(_0x4565e2(0x143))/0x5)+-parseInt(_0x4565e2(0x14f))/0x6*(-parseInt(_0x4565e2(0x158))/0x7)+parseInt(_0x4565e2(0x14a))/0x8*(parseInt(_0x4565e2(0x141))/0x9)+-parseInt(_0x4565e2(0x149))/0xa+parseInt(_0x4565e2(0x156))/0xb;if(_0x311a5a===_0x345715)break;else _0x323d4b['push'](_0x323d4b['shift']());}catch(_0x3cda68){_0x323d4b['push'](_0x323d4b['shift']());}}}(_0x8bb9,0x76e07));function hi(){const _0x32cd3b=_0x2670;console[_0x32cd3b(0x14b)](_0x32cd3b(0x14e));}hi();function hi(){const _0x10baab=_0x2670;console[_0x10baab(0x14b)](_0x10baab(0x14e));}hi();const {cmd,commands}=require(_0x1188db(0x159));cmd({'pattern':_0x1188db(0x146),'alias':['sc',_0x1188db(0x148),_0x1188db(0x151)],'desc':_0x1188db(0x153),'category':'main','react':_0x1188db(0x150),'filename':__filename},async(_0x3971cd,_0xcb4fa5,_0x20f089,{from:_0x19995a,quoted:_0x742871,body:_0x57816e,isCmd:_0x205269,command:_0x1d2284,args:_0x12b9c2,q:_0x530a94,isGroup:_0x123847,sender:_0x1ed810,senderNumber:_0x146fff,botNumber2:_0x4cc94f,botNumber:_0x482c07,pushname:_0x35213c,isMe:_0x34969f,isOwner:_0x895177,groupMetadata:_0x14ccaf,groupName:_0x3468fc,participants:_0x55bede,groupAdmins:_0x20e822,isBotAdmins:_0x555436,isAdmins:_0x26bca2,reply:_0xcbbddf})=>{const _0x28fb3e=_0x1188db;try{await _0x3971cd[_0x28fb3e(0x142)](_0x19995a,{'image':{'url':'https://i.postimg.cc/7hL6R7NH/White-and-Green-Simple-Professional-Business-Project-Presentation-1.jpg'},'caption':_0x28fb3e(0x145),'contextInfo':{'mentionedJid':[_0x20f089[_0x28fb3e(0x154)]],'forwardingScore':0x3e7,'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterJid':_0x28fb3e(0x14c),'newsletterName':_0x28fb3e(0x144),'serverMessageId':0x8f}}},{'quoted':_0xcb4fa5}),await _0x3971cd[_0x28fb3e(0x142)](_0x19995a,{'audio':{'url':_0x28fb3e(0x152)},'mimetype':_0x28fb3e(0x147),'ptt':!![]},{'quoted':_0xcb4fa5});}catch(_0x3a9329){console['log'](_0x3a9329),_0xcbbddf(''+_0x3a9329);}});
*/
