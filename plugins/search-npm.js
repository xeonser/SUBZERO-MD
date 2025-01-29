const axios = require("axios");
const config = require("../config");
const {
  cmd,
  commands
} = require("../command");


const _0x50a4a6 = {
  pattern: "npm",
  desc: "Search for a package on npm.",
  react: '📦',
  use: ".npm < name >"
};
function _0x44eff2(_0x4311d2, _0x3babb0, _0x904d87, _0x18ffad, _0x1c70c8) {
  return _0x479a(_0x3babb0 - 0x348, _0x18ffad);
}
_0x50a4a6.category = "convert";
_0x50a4a6.filename = __filename;
cmd(_0x50a4a6, async (_0x45c3e3, _0x534cf5, _0x3c9af3, {
  from: _0x4a8b86,
  args: _0xfde2e1,
  reply: _0x5ddb6d
}) => {
  if (!_0xfde2e1.length) {
    return _0x5ddb6d("Please provide the name of the npm package you want to search for. Example: !npm express");
  }
  const _0x71d130 = _0xfde2e1.join(" ");
  const _0x2b9e87 = "https://registry.npmjs.org/" + encodeURIComponent(_0x71d130);
  try {
    let _0x38bc8e = await fetch(_0x2b9e87);
    if (!_0x38bc8e.ok) {
      throw new Error("Package not found or an error occurred.");
    }
    let _0x27bf7a = await _0x38bc8e.json();
    const _0x39dfb0 = _0x27bf7a["dist-tags"].latest;
    const _0x4a0adb = _0x27bf7a.description || "No description available.";
    const _0x484c23 = "https://www.npmjs.com/package/" + _0x71d130;
    const _0x1f70c0 = _0x27bf7a.license || "Unknown";
    const _0x3a52c7 = _0x27bf7a.repository ? _0x27bf7a.repository.url || "Not available" : "Not available";
    let _0x1a1dc5 = "\n*SUBZERO NPM SEARCH*\n\n\n*🔰NPM PACKAGE :* " + _0x71d130 + "\n\n*📄DESCRIPTION :* " + _0x4a0adb + "\n\n*⏸️ LAST VERSION :* " + _0x39dfb0 + "\n\n*🪪 LICENSE :* " + _0x1f70c0 + "\n\n*🪩REPOSITORY :* " + _0x3a52c7 + "\n\n*🔗NPM URL :* " + _0x484c23 + "\n\n";
    const _0x25a4fa = {
      text: _0x1a1dc5
    };
    const _0x4ab6e6 = {
      quoted: _0x534cf5
    };
    await _0x45c3e3.sendMessage(_0x4a8b86, _0x25a4fa, _0x4ab6e6);
  } catch (_0x5b358e) {
    console.error(_0x5b358e);
    _0x5ddb6d("An error occurred: " + _0x5b358e.message);
  }
});
