// Hàm chuyển đổi giờ (format: "H:MM" hoặc "HH:MM")
function subtractHours(timeString, hours) {
    const [h, m] = timeString.split(':').map(Number);
    let newHours = h - hours;
    
    // Xử lý trường hợp giờ âm (quay về ngày hôm trước)
    if (newHours < 0) {
        newHours += 24;
    }
    
    // Format lại theo kiểu "H:MM"
    return `${newHours}:${String(m).padStart(2, '0')}`;
}

// Tự động lấy tên khách mời từ URL
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('name');
    const eventDate = urlParams.get('date');
    const eventTimeParam = urlParams.get('time');
    
    const nameDisplay = document.getElementById('guest-name');
    const dateDisplay = document.getElementById('event-date');
    const timeDisplay = document.getElementById('event-time');

    // Xử lý tên khách mời
    if (guestName) {
        nameDisplay.innerText = guestName;
    }

    // Xử lý ngày sự kiện
    if (eventDate) {
        dateDisplay.innerText = eventDate;
    }

    // Xử lý giờ sự kiện
    if (eventTimeParam) {
        // Nếu có tham số, trừ đi 2 giờ
        const correctTime = subtractHours(eventTimeParam, 2);
        timeDisplay.innerText = correctTime;
    } else {
        // Nếu không có tham số, mặc định là 13:30
        timeDisplay.innerText = '13:30';
    }

    console.log("Chúc mừng tốt nghiệp, Vương!");
};

// Hàm để chuyển trang
function navigateWithGuestName(url) {
    window.location.href = url;
}

// Hàm để chuyển trang parking và giữ tham số URL
function navigateToParkingWithParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const params = new URLSearchParams(urlParams);
    
    // Tạo URL mới với tất cả tham số
    const newUrl = 'parking.html?' + params.toString();
    window.location.href = newUrl;
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
        e.stopPropagation();
        toggleMusic();
    });

    // Tự động phát khi khách bấm vào thiệp lần đầu
    document.body.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            musicIcon.innerText = '🔊';
            musicBtn.classList.add('rotating');
        }
    }, { once: true });
});