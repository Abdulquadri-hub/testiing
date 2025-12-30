/* Betslip Rail Component - client-side only */
(function(){
  class BetslipRail {
    constructor(rootSelector){
      this.root = document.querySelector(rootSelector) || this._createRoot(rootSelector);
      this.storageKey = 'editorBets';
      this.bets = this._readBets();
      this._render();
      this._bind();
      this.update();
      // position badge relative to viewport and content
      this.positionBadge();
      this._onWindowChange = this._throttle(()=> this.positionBadge(), 120);
      window.addEventListener('resize', this._onWindowChange);
      window.addEventListener('scroll', this._onWindowChange);
    }

    _createRoot(sel){
      const container = document.createElement('div');
      container.id = sel.replace('#','');
      document.body.appendChild(container);
      return container;
    }

    _readBets(){
      try{ return JSON.parse(localStorage.getItem(this.storageKey)||'[]') }catch(e){return []}
    }
    _writeBets(b){ localStorage.setItem(this.storageKey, JSON.stringify(b||[])); }

    _render(){
      this.root.innerHTML = `
        <div class="betslip-rail" aria-hidden="false">
          <button class="br-badge" aria-expanded="false"><span class="br-count">0</span> <span class="br-label">slip</span></button>
          <div class="br-overlay" tabindex="-1"></div>
          <div class="br-sheet" role="dialog" aria-hidden="true">
            <div class="br-header"><h3>Betslip <span class="br-header-count">0</span></h3><button class="br-close" aria-label="Close">✕</button></div>
            <div class="br-list"></div>
            <div class="br-actions">
              <button class="btn br-clear">Clear all</button>
              <label style="margin-left:auto;display:flex;align-items:center;gap:8px"><select class="br-bookie"><option>bet9ja</option><option>sportybet</option><option>1xBet</option></select></label>
              <button class="btn primary br-book">Book (<span class="br-count-foot">0</span>)</button>
            </div>
            <div class="br-code" style="display:none;padding:12px;border-top:1px solid #eee"><input id="br-generated-code" readonly style="width:calc(100% - 80px);padding:8px"/><button id="br-copy-code" style="margin-left:8px">Copy</button></div>
          </div>
        </div>
      `;
    }

    _bind(){
      this.badge = this.root.querySelector('.br-badge');
      this.overlay = this.root.querySelector('.br-overlay');
      this.sheet = this.root.querySelector('.br-sheet');
      this.closeBtn = this.root.querySelector('.br-close');
      this.list = this.root.querySelector('.br-list');
      this.clearBtn = this.root.querySelector('.br-clear');
      this.bookBtn = this.root.querySelector('.br-book');
      this.headerCount = this.root.querySelector('.br-header-count');
      this.badgeCount = this.root.querySelector('.br-count');
      this.bookCountFoot = this.root.querySelector('.br-count-foot');
      this.codeSection = this.root.querySelector('.br-code');
      this.codeInput = this.root.querySelector('#br-generated-code');
      this.copyBtn = this.root.querySelector('#br-copy-code');

      this.badge.addEventListener('click', ()=> this.openRail());
      this.overlay.addEventListener('click', ()=> this.closeRail());
      this.closeBtn.addEventListener('click', ()=> this.closeRail());
      this.clearBtn.addEventListener('click', ()=> this.clearAll());
      this.bookBtn.addEventListener('click', ()=> this._bookAction());
      this.copyBtn.addEventListener('click', ()=> this._copyCode());

      // keyboard escape closes
      document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') this.closeRail(); });
    }

    addSelection(sel){
      // normalize selection shape to include both `odd` and `odds` for compatibility
      sel = Object.assign({}, sel);
      sel.odds = sel.odds || sel.odd || '';
      sel.odd = sel.odd || sel.odds || '';

      const idx = this.bets.findIndex(b=>b.matchId == sel.matchId);
      if(idx>=0){ this.bets[idx] = Object.assign({}, this.bets[idx], sel); } else { this.bets.push(sel); }
      this._writeBets(this.bets);
      this.update();
      // ensure badge stays aligned after layout changes
      this.positionBadge();
      this._emit('betslip:updated', { bets: this.bets });
    }

    removeSelection(matchId){
      this.bets = this.bets.filter(b=>b.matchId != matchId);
      this._writeBets(this.bets);
      this.update();
      // remove selection visual state from match options if present
      try{
        document.querySelectorAll(`[data-match-id="${matchId}"]`).forEach(el=>el.classList.remove('selected'));
      }catch(e){}
      this._emit('betslip:updated', { bets: this.bets });
    }

    clearAll(){
      this.bets = [];
      this._writeBets(this.bets);
      this.update();
      this._emit('betslip:updated', { bets: this.bets });
      this.closeRail();
    }

    update(){
      const bets = this._readBets();
      this.bets = bets;
      // update counts
      this.badgeCount.textContent = bets.length;
      this.headerCount.textContent = bets.length;
      this.bookCountFoot.textContent = bets.length;

      // show/hide badge depending on whether there are selections
      if (bets.length > 0) this.showBadge(); else this.hideBadge();

      // render list
      this.list.innerHTML = '';
      if(bets.length===0){
        this.list.innerHTML = '<div style="padding:12px;color:#666">No selections</div>';
        return;
      }
      bets.forEach(b=>{
        const el = document.createElement('div');
        el.className = 'br-selection';
        const oddVal = b.odds || b.odd || '—';
        el.innerHTML = `<div style="flex:1"><div class="teams">${b.teams}</div><div class="meta">${b.market} : ${b.value}</div></div><div class="odd">${oddVal}</div><div style="margin-left:10px;display:flex;gap:6px;align-items:center"><button class="br-remove" data-id="${b.matchId}" aria-label="Remove">✕</button><button class="br-edit" data-id="${b.matchId}" aria-label="Edit">✎</button></div>`;
        const removeBtn = el.querySelector('.br-remove');
        removeBtn.addEventListener('click', ()=>{ this.removeSelection(b.matchId); });
        const editBtn = el.querySelector('.br-edit');
        editBtn.addEventListener('click', ()=>{ this._emit('betslip:edit', {matchId:b.matchId}); openMarketModal(b.matchId); });
        this.list.appendChild(el);
      });
    }

    openRail(mode='sheet'){
      if(mode === 'fullscreen' || window.innerWidth <= 640){
        this.overlay.classList.add('active');
        this.sheet.classList.add('active');
        this.sheet.setAttribute('aria-hidden','false');
        document.body.style.overflow = 'hidden';
      } else {
        // desktop open sheet
        this.overlay.classList.add('active');
        this.sheet.classList.add('active');
        this.sheet.setAttribute('aria-hidden','false');
      }
      // hide the floating badge while the sheet/modal is open
      this.hideBadge();
      this.badge.setAttribute('aria-expanded','true');
      this._emit('betslip:opened');
    }

    flashBadge(){
      if(!this.badge) return;
      // ensure visible
      this.showBadge();
      this.badge.classList.add('flash');
      setTimeout(()=> this.badge.classList.remove('flash'), 600);
    }

    showBadge(){
      if(!this.badge) return;
      this.badge.style.display = 'flex';
      // reposition since it may have been hidden
      this.positionBadge();
    }

    hideBadge(){
      if(!this.badge) return;
      this.badge.style.display = 'none';
    }

    // simple throttle to avoid excessive layout work
    _throttle(fn, wait){
      let timer = null;
      return (...args)=>{
        if(timer) return;
        timer = setTimeout(()=>{ timer = null; fn.apply(this, args); }, wait);
      };
    }

    // Position the badge fixed to viewport and align to content's right edge on desktop,
    // and center-bottom on mobile. This keeps it visible during scroll like Sportybet.
    positionBadge(){
      if(!this.badge) return;
      const w = window.innerWidth;
      const content = document.querySelector('.pools-screen');
      if(w <= 640){
        // mobile: anchor to the right-middle but avoid overlapping bottom nav
        this.badge.style.position = 'fixed';
        this.badge.style.right = '12px';
        this.badge.style.left = 'auto';
        this.badge.style.bottom = 'auto';
        // center vertically by default
        const badgeRect = this.badge.getBoundingClientRect();
        let top = Math.round(window.innerHeight / 2);
        // if there's a mobile nav, make sure the badge stays above it
        const mobileNav = document.getElementById('mobile-nav');
        if (mobileNav) {
          const navRect = mobileNav.getBoundingClientRect();
          const minTop = window.innerHeight - (navRect.height + 12 + (badgeRect.height / 2));
          if (top > minTop) top = minTop;
        }
        // ensure top is not too close to header
        const minAllowedTop = 12 + Math.round(badgeRect.height / 2);
        if (top < minAllowedTop) top = minAllowedTop;
        this.badge.style.top = top + 'px';
        this.badge.style.transform = 'translateY(-50%)';
      } else {
        // desktop: right-middle aligned to content
        this.badge.style.position = 'fixed';
        this.badge.style.top = '50%';
        this.badge.style.bottom = 'auto';
        this.badge.style.left = 'auto';
        let rightOffset = 14; // fallback
        try{
          if(content){
            const rect = content.getBoundingClientRect();
            // place 14px from content right edge, but not negative
            rightOffset = Math.max(14, Math.round(window.innerWidth - rect.right + 14));
          }
        }catch(e){}
        this.badge.style.right = rightOffset + 'px';
        this.badge.style.transform = 'translateY(-50%)';
      }
    }

    closeRail(){
      this.overlay.classList.remove('active');
      this.sheet.classList.remove('active');
      this.sheet.setAttribute('aria-hidden','true');
      document.body.style.overflow = '';
      this.badge.setAttribute('aria-expanded','false');
      this._emit('betslip:closed');
    }

    _bookAction(){
      // simulate booking and show generated code
      const code = this.generateCode();
      this.codeInput.value = code;
      this.codeSection.style.display = 'block';
      this._emit('betslip:booked', { code: code, bookie: this.root.querySelector('.br-bookie').value });
      // copy automatically
      this._copyCode();
    }

    generateCode(){
      const rnd = Math.random().toString(36).slice(2,8).toUpperCase();
      return `POOL-${rnd}`;
    }

    _copyCode(){
      const code = this.codeInput.value;
      if(!code) return;
      if(navigator.clipboard) navigator.clipboard.writeText(code);
      this.copyBtn.innerText = 'Copied';
      setTimeout(()=> this.copyBtn.innerText = 'Copy', 1200);
    }

    _emit(name, detail){ document.dispatchEvent(new CustomEvent(name, { detail })); }
  }

  // expose singleton
  window.betslipRail = new BetslipRail('#betslip-rail');
})();