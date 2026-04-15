// Tự động lấy tên khách mời từ URL
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('name');
    const nameDisplay = document.getElementById('guest-name');

    if (guestName) {
        nameDisplay.innerText = guestName
    }

    // Hiệu ứng nhẹ khi cuộn
    console.log("Chúc mừng tốt nghiệp, Vương!");
};


function openGoogleMaps() {
    window.open("https://maps.google.com?q=Đại+học+Công+Thương+TP.HCM,+140+Lê+Trọng+Tấn,+Tây+Thạnh,+TP.HCM", "_blank");
}

document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-btn');
    const musicIcon = document.getElementById('music-icon');

    // Hàm đổi trạng thái nhạc
    function toggleMusic() {
        if (music.paused) {
            music.play();
            musicIcon.innerText = '🔊';
            musicBtn.classList.add('rotating');
        } else {
            music.pause();
            musicIcon.innerText = '🎵';
            musicBtn.classList.remove('rotating');
        }
    }

    // Sự kiện khi nhấn nút
    musicBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
        toggleMusic();
    });

    // Mẹo: Tự động phát khi khách bấm vào thiệp lần đầu (để lách luật autoplay)
    document.body.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            musicIcon.innerText = '🔊';
            musicBtn.classList.add('rotating');
        }
    }, { once: true }); // Chỉ chạy đúng 1 lần duy nhất
});
