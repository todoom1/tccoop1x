(function() {
    var secretApps = [
{img: './png/hygj.jpg', name: '汇赢国际', xurl: 'aHR0cHM6Ly9uY2djYS50cHJzbWkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDYyJnRvcElkPTEzNzMzJnNlbGZQbGFuSWQ9MTEzNw=='},
{img: './png/dtgj.jpg', name: '鼎天国际', xurl: 'aHR0cHM6Ly90ZmFqbi5oY2p3ai5jb20vYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTEwNjMmcHQ9QzQxNzdFMDYtM0JGOS1CM0MwLUE0NkEtQkEyMDM0MzY0MzlC'},
{img: './png/jlgj.jpg', name: '君临国际', xurl: 'aHR0cHM6Ly90ZmFqbi5oY2p3ai5jb20vYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTIwODEmdG9wSWQ9MjMyMTEmc2VsZlBsYW5JZD0yNDI3MDY='},
{img: './png/xsd.jpg', name: '新时代', xurl: 'aHR0cHM6Ly9kZXJlYXIuZm5icHN3LmNvbS9hcHAvcmVnaXN0ZXIucGhwP3NpdGVfaWQ9MTA1OSZ0b3BJZD01NzU3OSZzZWxmUGxhbklkPTQ5ODI4'},
{img: './png/stgj.jpg', name: '胜天国际', xurl: 'aHR0cHM6Ly90ZmFqbi5oY2p3ai5jb20vYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTEwNTgmdG9wSWQ9MjY0ODkmc2VsZlBsYW5JZD0yMTYwMA=='},
{img: './jpg/xygj.jpg', name: '星耀国际', xurl: 'aHR0cHM6Ly9nZWR4cy5oY2p3ai5jb20vYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTEwNTcmdG9wSWQ9OTUyMTc2OTYzMTE5MDI0OQ=='},
{img: './png/sjgj.png', name: '赏金国际', xurl: 'aHR0cHM6Ly94anZ1ZWIuaGVmYXNoaXAuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDEwJnRvcElkPTQwNDUzOTI='},
{img: './png/ffyl.png', name: '非凡娱乐', xurl: 'aHR0cHM6Ly9iYWttcnkuZ3ppYXN0aS5jb20vYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTEwNTAmdG9wSWQ9Mjk5NTE5MSZzZWxmUGxhbklkPTE4OTcyNjA='},
{img: './png/cfgj.png', name: '超凡国际', xurl: 'aHR0cHM6Ly9wa2FqaW0uaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMyJnRvcElkPTE4Mzk3MDk='},
{img: './png/top1.png', name: 'Top1体育', xurl: 'aHR0cHM6Ly9iYWttcnkuZ3ppYXN0aS5jb20vYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTEwNTEmdG9wSWQ9NjM0MDAw'},
{img: './png/dfgj.png', name: '巅峰国际', xurl: 'aHR0cHM6Ly9nZnZneC5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMwJnRvcElkPTEzODA2'},
{img: './png/ng.png', name: 'NG28', xurl: 'aHR0cHM6Ly8xMDMuNTQuNjAuMjI6ODg2Ni8jL2xpbms/YWxsd2luPWh4emM4Zm5sWmNFJTJCZ1RVcjBCUU13QSUzRCUzRA=='},
{img: './png/c7.png', name: 'c7', xurl: 'aHR0cHM6Ly8xMDMuMzkuMTguMjExOjc3ODgvIy9saW5rP2FsbHdpbj03UWpVRVhYa3NXd2E2ZGE2SlFFJTJCc2clM0QlM0Q='},
{img: './png/yh.png', name: '壹号娱乐', xurl: 'aHR0cHM6Ly9nZnZneC5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD04MDAmcHQ9RjVFRTBBQzAtOUE5MC05NzM3LTgxOTMtMUVBQzg5QjM3MTE0'},
{img: './png/ztgj.png', name: '征途国际', xurl: 'aHR0cHM6Ly9wa2FqaW0uaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMxJnRvcElkPTM0MDMz'},
{img: './svg/ngty.svg', name: 'ng体育', xurl: 'aHR0cHM6Ly9udmptY2UuaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDE5JnRvcElkPTExNTY4NzQ3'},
{img: './svg/wd.svg', name: '问鼎娱乐', xurl: 'aHR0cHM6Ly9vbmtyY3kuZm5icHN3LmNvbS9hcHAvcmVnaXN0ZXIucGhwP3NpdGVfaWQ9MTAyMCZ0b3BJZD0yOTI2MTEz'}
    ];

    var container = document.getElementById('xapes');
    if (!container) return;

    secretApps.forEach(function(app) {
        // 1. 创建元素
        var li = document.createElement('li');
        li.className = 'app-item'; // 只保留类名用于样式

        li.innerHTML = `
            <div class="app-icon"><img src="${app.img}"></div>
            <div class="app-name">${app.name}</div>
        `;

        li.onclick = function() {
            try {
                // 解码并跳转
                var targetUrl = atob(app.xurl.trim());
                window.open(targetUrl, '_blank');
            } catch (e) {
                console.error("解码失败:", e);
            }
        };

        // 4. 塞进容器
        container.appendChild(li);
    });
})();

window["document"]['getElementById']("3")['innerHTML'] = ("2026美加墨世界杯<br>-查看赛事赛程-");
window["document"]['getElementById']("2")['innerHTML'] = ("🔥十年信誉平台<br>⚽世界杯官方投注平台");
window["document"]['getElementById']("1")['innerHTML'] = "NF77.MY";


function showPopupOnce(popupId = 'sw_loaded') {
  const key = `popup_${popupId}_shown`;
  
  if (localStorage.getItem(key)) {
    return; 
  }
  alert('欢迎访问NF77！');
  localStorage.setItem(key, Date.now().toString());
}
window.addEventListener('load', function() {
  showPopupOnce();
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function(registration) {
      console.log('SW registered');
    });
}
