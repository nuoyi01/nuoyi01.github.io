const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.post-card, .widget').forEach(el => {
    observer.observe(el);
});

// 实时时间显示
function updateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const weekday = ['日', '一', '二', '三', '四', '五', '六'][now.getDay()];

    const solar = `${year}年${month}月${day}日 星期${weekday}`;
    const time = `${hours}:${minutes}:${seconds}`;

    document.getElementById('current-time').innerHTML = `${solar}<br>${time}`;
}

setInterval(updateTime, 1000);
updateTime();

function toggleTheme() {
    document.body.classList.toggle('dark');
    const slider = document.getElementById('slider');
    slider.innerHTML = document.body.classList.contains('dark') ? '🌙' : '☀️';
}

window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
});