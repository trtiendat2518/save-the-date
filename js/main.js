// === Hiệu ứng trái tim rơi ===
(function() {
    const heartColors = ['#e25555','#d72660','#ff6f91','#fbb1b1','#f67280','#c0392b','#e17055'];
    const heartRain = document.querySelector('.heart-rain');
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        const color = heartColors[Math.floor(Math.random()*heartColors.length)];
        const left = Math.random() * 100;
        const size = 18 + Math.random()*16;
        const duration = 2.8 + Math.random()*2.5;
        heart.style.left = left + 'vw';
        heart.style.width = size + 'px';
        heart.style.height = size + 'px';
        heart.style.animationDuration = duration + 's';
        heart.innerHTML = `<svg viewBox="0 0 32 29.6"><path fill="${color}" d="M23.6,0c-2.6,0-5,1.3-6.6,3.4C15.4,1.3,13,0,10.4,0C4.7,0,0,4.7,0,10.4c0,9.1,15.5,19.2,15.6,19.3c0.3,0.2,0.7,0.2,1,0C16.5,29.6,32,19.5,32,10.4C32,4.7,27.3,0,23.6,0z"/></svg>`;
        heartRain.appendChild(heart);
        setTimeout(() => heart.remove(), duration*1000);
    }
    setInterval(createHeart, 220);
})();

// === Gửi email qua EmailJS ===
const wishForm = document.getElementById('wishForm');
const wishStatus = document.getElementById('wishStatus');
// Bro cần thay các giá trị bên dưới bằng thông tin thực tế của EmailJS
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
const EMAIL_RECEIVER = 'EMAIL_NHAN_CUA_BRO'; // VD: bro@gmail.com

emailjs.init(EMAILJS_PUBLIC_KEY);

wishForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const guestName = document.getElementById('guestName').value.trim();
    const wishMessage = document.getElementById('wishMessage').value.trim();
    if (!guestName || !wishMessage) {
        wishStatus.style.color = '#c0392b';
        wishStatus.textContent = 'Vui lòng nhập đầy đủ thông tin!';
        return;
    }
    wishStatus.style.color = '#333';
    wishStatus.textContent = 'Đang gửi...';

    // Tạo nội dung email
    const templateParams = {
        to_email: EMAIL_RECEIVER,
        from_name: guestName,
        wish_message: wishMessage,
        subject: `Lời chúc từ khách mời: ${guestName}`,
        message: `Bạn ${guestName} vừa gửi lời chúc: ${wishMessage}`
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(function(response) {
            wishStatus.style.color = '#27ae60';
            wishStatus.textContent = 'Gửi lời chúc thành công!';
            wishForm.reset();
        }, function(error) {
            wishStatus.style.color = '#c0392b';
            wishStatus.textContent = 'Có lỗi xảy ra, vui lòng thử lại.';
        });
});
