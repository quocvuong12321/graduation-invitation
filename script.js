// Tự động lấy tên khách mời từ URL
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('name');
    const nameDisplay = document.getElementById('guest-name');

    if (guestName) {
        nameDisplay.innerText = guestName.replace(/_/g, ' ');
    }

    // Hiệu ứng nhẹ khi cuộn
    console.log("Chúc mừng tốt nghiệp, Vương!");
};