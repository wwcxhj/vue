function setFontSize() {
    // 获取window 宽度
    // zepto实现 $(window).width()就是这么干的
    var winWidth = window.innerWidth;
    document.documentElement.style.fontSize = (winWidth / 750) * 100 + 'px';
}
var evt = 'onorientationchange' in window ? 'orientationchange' : 'resize';
var timer = null;
window.addEventListener(evt, function() {
    clearTimeout(timer);
    timer = setTimeout(setFontSize, 300);
}, false);
window.addEventListener("pageshow", function(e) {
    if (e.persisted) {
        clearTimeout(timer);
        timer = setTimeout(setFontSize, 300);
    }
}, false);
//初始化
setFontSize();