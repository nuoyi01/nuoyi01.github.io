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

// 农历计算函数（简化版本，适用于2026年）
function getLunarDate(year, month, day) {
    const lunarMonths = ['正月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '冬月', '腊月'];
    const lunarDays = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十', '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'];

    const base = new Date(2026, 0, 1); // 2026-01-01 腊月三十
    const current = new Date(year, month - 1, day);
    const offset = Math.floor((current - base) / (24 * 60 * 60 * 1000));

    let lunarMonthIndex = 11; // 腊月
    let lunarDayIndex = 29; // 三十

    lunarDayIndex += offset;

    while (lunarDayIndex >= 30) {
        lunarMonthIndex = (lunarMonthIndex + 1) % 12;
        lunarDayIndex -= 30;
    }

    if (lunarDayIndex < 0) {
        lunarMonthIndex = (lunarMonthIndex - 1 + 12) % 12;
        lunarDayIndex += 30;
    }

    return '丙申年' + lunarMonths[lunarMonthIndex] + lunarDays[lunarDayIndex];
}

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
    const lunar = getLunarDate(year, month, day);

    document.getElementById('current-time').innerHTML = `${solar}<br>${time}<br>${lunar}`;
}

setInterval(updateTime, 1000);
updateTime();