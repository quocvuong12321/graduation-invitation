// Tự động lấy tên khách mời từ URL
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('name');
    const eventDate = urlParams.get('date');
    const eventTime = urlParams.get('time');
    
    const nameDisplay = document.getElementById('guest-name');
    const dateDisplay = document.getElementById('event-date');
    const timeDisplay = document.getElementById('event-time');

    // Xử lý tên khách mời
    if (guestName) {
        localStorage.setItem('guestName', guestName);
        nameDisplay.innerText = guestName;
    } else {
        const savedName = localStorage.getItem('guestName');
        if (savedName) {
            nameDisplay.innerText = savedName;
        }
    }

    // Xử lý ngày sự kiện
    if (eventDate) {
        localStorage.setItem('eventDate', eventDate);
        dateDisplay.innerText = eventDate;
    } else {
        const savedDate = localStorage.getItem('eventDate');
        if (savedDate) {
            dateDisplay.innerText = savedDate;
        }
    }

    // Xử lý giờ sự kiện
    if (eventTime) {
        localStorage.setItem('eventTime', eventTime);
        timeDisplay.innerText = eventTime;
    } else {
        const savedTime = localStorage.getItem('eventTime');
        if (savedTime) {
            timeDisplay.innerText = savedTime;
        }
    }

    console.log("Chúc mừng tốt nghiệp, Vương!");
};

// Hàm để lưu dữ liệu khi chuyển trang
function navigateWithGuestName(url) {
    const guestName = document.getElementById('guest-name').innerText;
    if (guestName && guestName !== 'Những người bạn') {
        localStorage.setItem('guestName', guestName);
    }
    window.location.href = url;
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
