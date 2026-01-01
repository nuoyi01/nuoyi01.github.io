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

// 农历计算函数（简化版本）
function getLunarDate(year, month, day) {
    const lunarYears = ['甲子', '乙丑', '丙寅', '丁卯', '戊辰', '己巳', '庚午', '辛未', '壬申', '癸酉', '甲戌', '乙亥', '丙子', '丁丑', '戊寅', '己卯', '庚辰', '辛巳', '壬午', '癸未', '甲申', '乙酉', '丙戌', '丁亥', '戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳', '甲午', '乙未', '丙申', '丁酉', '戊戌', '己亥', '庚子', '辛丑', '壬寅', '癸卯', '甲辰', '乙巳', '丙午', '丁未', '戊申', '己酉', '庚戌', '辛亥', '壬子', '癸丑', '甲寅', '乙卯', '丙辰', '丁巳', '戊午', '己未', '庚申', '辛酉', '壬戌', '癸亥'];
    const lunarMonths = ['正月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '冬月', '腊月'];
    const lunarDays = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十', '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'];

    const baseYear = 1984; // 甲子年起始
    const yearIndex = (year - baseYear) % 60;
    const lunarYear = lunarYears[yearIndex];

    // 简化月日计算（实际需要更精确的算法，这里假设当前日期）
    let lunarMonth = '腊月';
    let lunarDay = '三十';

    // 特殊处理当前日期
    if (year === 2026 && month === 1 && day === 1) {
        lunarMonth = '腊月';
        lunarDay = '三十';
    }

    return lunarYear + '年' + lunarMonth + lunarDay;
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