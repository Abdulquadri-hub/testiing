const AppLayout = {
    
  mobileNav: `
    <footer id="bottom-nav" class="adminuiux-mobile-footer hide-on-scrolldown style-2 d-block d-md-none">
      <div class="container">
        <ul class="nav nav-pills nav-justified">
          <li class="nav-item">
            <a class="nav-link" onclick="navigateTo('index.html')">
              <span>
                <i class="nav-icon bi bi-house"></i>
                <span class="nav-text">Home</span>
              </span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onclick="initSidebar()">
              <span>
                <i class="nav-icon bi bi-menu-button-wide-fill"></i>
                <span class="nav-text">AZ Menu</span>
              </span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onclick="navigateTo('convert.html')">
              <span>
                <i class="nav-icon bi bi-arrow-clockwise"></i>
                <span class="nav-text">Converter</span>
              </span>
            </a>
          </li>
          <li class="nav-item">
            <a onclick="navigateTo('bet-editor.html')" class="nav-link">
              <span>
                <i class="bi bi-credit-card-2-front"></i>
                <span class="nav-text">Bet Editor</span>
              </span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onclick="navigateTo('profile.html')">
              <span>
                <i class="nav-icon avatar avatar-20 coverimg rounded-circle">
                  <img src="assets/img/modern-ai-image/user-4.jpg" alt="" />
                </i>
                <span class="nav-text">Profile</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
    `,

  // Desktop Navbar
desktopNav: `
<header class="desktop-header">
  <div class="desktop-header-container">
    
    <!-- Left Section - Menu + Logo -->
    <div class="desktop-header-left">
      <button class="desktop-menu-toggle" onclick="toogleSideMenu()">
        <div class="desktop-menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      
      <a class="desktop-logo" onclick="navigateTo('index.html')">
        <div class="desktop-logo-text">Convert<span style="font-weight: 900;">.IO</span></div>
      </a>
    </div>
    
    <!-- Right Section - Search + Auth Buttons -->
    <div class="desktop-header-right">
      
      <!-- Search Button -->

      
      <!-- Login Button -->
      <button class="desktop-login-btn" onclick="navigateTo('login.html')">
        LOGIN
      </button>
      
      <!-- Join Now Button - Highlighted -->
      <button class="desktop-join-btn" onclick="navigateTo('register.html')">
        JOIN NOW
      </button>
      
      <!-- Account Button -->
      <button class="desktop-account-btn" onclick="navigateTo('profile.html')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
        <span>ACCOUNT</span>
      </button>
      
    </div>
    
  </div>
  
  <!-- Search Overlay (Dropdown) -->
  <div class="desktop-search-overlay" id="mobileSearchOverlay">
    <div class="desktop-search-overlay-content">
      <button class="desktop-search-close" onclick="toggleMobileSearch()">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <div class="desktop-search-box">
        <svg class="desktop-search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <input type="text" class="desktop-search-input" placeholder="Search for teams, events, sports..." />
        <button class="desktop-search-filter">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
  
</header>
`,

  // Side Menu
sideMenu: `
<div class="side-menu-overlay" id="sideMenuOverlay">
  <div class="side-menu-container">
    
    <!-- Menu Header -->
    <div class="side-menu-header">
      <a class="side-menu-logo" onclick="navigateTo('index.html')">
        <span class="side-menu-logo-text">Convert<span style="font-weight: 900;">.IO</span></span>
      </a>
      <button class="side-menu-close" onclick="closeSideMenu()">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    
    <!-- Menu Content -->
    <div class="side-menu-content">
      
      <!-- Main Navigation Items -->
      <div class="side-menu-main-nav">
        <a class="side-menu-main-item active" onclick="navigateTo('index.html')">
          <div class="side-menu-main-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
          </div>
          <span class="side-menu-main-text">Home</span>
        </a>
        
        <a class="side-menu-main-item">
          <div class="side-menu-main-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <span class="side-menu-main-text">Converter</span>
        </a>
        
        <a class="side-menu-main-item">
          <div class="side-menu-main-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
            <span class="side-menu-main-badge live">3</span>
          </div>
          <span class="side-menu-main-text">Events</span>
        </a>
        
        <a class="side-menu-main-item">
          <div class="side-menu-main-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
            </svg>
          </div>
          <span class="side-menu-main-text">Bet Safer</span>
        </a>
        
        <a class="side-menu-main-item">
          <div class="side-menu-main-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <span class="side-menu-main-text">Free Bets</span>
        </a>
        
        <a class="side-menu-main-item">
          <div class="side-menu-main-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"></path>
            </svg>
          </div>
          <span class="side-menu-main-text">Pools Bet</span>
        </a>
        
        <a class="side-menu-main-item">
          <div class="side-menu-main-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path>
            </svg>
          </div>
          <span class="side-menu-main-text">Bet Editor</span>
        </a>
        
        <a class="side-menu-main-item">
          <div class="side-menu-main-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            <span class="side-menu-main-badge">26</span>
          </div>
          <span class="side-menu-main-text">Predictions</span>
        </a>
      </div>
      
      <!-- Category Pills -->
      <div class="side-menu-categories">
        <div class="side-menu-category-scroll">
          <button class="side-menu-category-pill active" >
            <svg class="side-menu-category-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
            Football
          </button>
          <button class="side-menu-category-pill">
            <svg class="side-menu-category-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            Basketball
          </button>
          <button class="side-menu-category-pill">
            <svg class="side-menu-category-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
            </svg>
            Tennis
          </button>
          <button class="side-menu-category-pill">
            <svg class="side-menu-category-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Cricket
          </button>
        </div>
      </div>
      
      <!-- Leagues Section -->
      <div class="side-menu-section">
        <div class="side-menu-section-header" onclick="toggleMenuSection(this)">
          <h3 class="side-menu-section-title">LEAGUES</h3>
          <button class="side-menu-section-toggle">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <ul class="side-menu-list">
          <li>
            <a class="side-menu-item">
              <div class="side-menu-item-content">
                <div class="side-menu-league-icon"><i class="bi bi-dribbble"></i></div>
                <span class="side-menu-item-text">United Cup</span>
                <span class="side-menu-item-count">1</span>
              </div>
            </a>
          </li>
          <li>
            <a class="side-menu-item">
              <div class="side-menu-item-content">
                <div class="side-menu-league-icon"><i class="bi bi-dribbble"></i></div>
                <span class="side-menu-item-text">ATP Hong Kong, Hong Kong Men Singles</span>
                <span class="side-menu-item-count">1</span>
              </div>
            </a>
          </li>
          <li>
            <a class="side-menu-item">
              <div class="side-menu-item-content">
                <div class="side-menu-league-icon"><i class="bi bi-dribbble"></i></div>
                <span class="side-menu-item-text">WTA Brisbane, Australia Women Singles</span>
                <span class="side-menu-item-count">1</span>
              </div>
            </a>
          </li>
          <li>
            <a class="side-menu-item">
              <div class="side-menu-item-content">
                <div class="side-menu-league-icon"><i class="bi bi-dribbble"></i></div>
                <span class="side-menu-item-text">ATP Auckland, New Zealand Men Singles</span>
                <span class="side-menu-item-count">4</span>
              </div>
            </a>
          </li>
          <li>
            <a class="side-menu-item">
              <div class="side-menu-item-content">
                <div class="side-menu-league-icon"><i class="bi bi-dribbble"></i></div>
                <span class="side-menu-item-text">ATP Adelaide, Australia Men Singles</span>
                <span class="side-menu-item-count">9</span>
              </div>
            </a>
          </li>
          <li>
            <a class="side-menu-item">
              <div class="side-menu-item-content">
                <div class="side-menu-league-icon"><i class="bi bi-dribbble"></i></div>
                <span class="side-menu-item-text">WTA Adelaide 1, Australia Women Singles</span>
                <span class="side-menu-item-count">6</span>
              </div>
            </a>
          </li>
          <li>
            <a class="side-menu-item">
              <div class="side-menu-item-content">
                <div class="side-menu-league-icon"><i class="bi bi-dribbble"></i></div>
                <span class="side-menu-item-text">WTA Auckland, New Zealand Women Doubles</span>
                <span class="side-menu-item-count">1</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    
    </div>
    
  </div>
</div>
`,

  filterCanvas: `
      <div
      class="offcanvas offcanvas-end shadow border-0"
      tabindex="-1"
      id="filter"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      aria-labelledby="filterlabel"
    >
      <div class="offcanvas-header border-bottom">
        <div>
          <h5 class="offcanvas-title" id="filterlabel">Filter</h5>
          <p class="text-secondary small">Grab the trimmed details</p>
        </div>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <h6 class="offcanvas-title">Duration</h6>
        <p class="text-secondary small mb-3">
          Filter details with desired period
        </p>
        <div class="row gx-2 align-items-center mb-3 mb-lg-4">
          <div class="col">
            <div class="input-group input-group-md">
              <input
                type="text"
                class="form-control bg-transparent"
                value=""
                id="datepicker"
              />
              <span
                class="input-group-text text-theme-1 bg-transparent width-40"
                id="titlecalendar"
                onclick="this.previousElementSibling.click()"
                ><i class="bi bi-calendar-event"></i
              ></span>
            </div>
          </div>
          <div class="col-auto text-secondary small">-</div>
          <div class="col">
            <div class="input-group input-group-md">
              <input
                type="text"
                class="form-control bg-transparent datepicker-single"
                value=""
              />
              <span
                class="input-group-text text-theme-1 bg-transparent width-40"
                id="titlecalendar"
                onclick="this.previousElementSibling.click()"
                ><i class="bi bi-calendar-event"></i
              ></span>
            </div>
          </div>
        </div>
        <h6 class="offcanvas-title">Country Selection</h6>
        <p class="text-secondary small mb-3">
          Change country for operational details
        </p>
        <div class="mb-3 mb-lg-4">
          <div
            class="input-group input-group-md rounded"
            style="--mw-dynamic: calc(100% - 42px)"
          >
            <span class="input-group-text text-theme-1"
              ><i class="bi bi-box"></i
            ></span>
            <select class="form-control choices" id="titltfilterlist" multiple>
              <option value="San Francisco">San Francisco</option>
              <option value="New York">New York</option>
              <option value="London">London</option>
              <option value="Chicago">Chicago</option>
              <option value="India" selected="">India</option>
              <option value="Sydney">Sydney</option>
              <option value="Seattle">Seattle</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
              <option value="India">India</option>
            </select>
          </div>
          <div class="invalid-feedback">
            You have already selected maximum option allowed. (This is
            Configurable)
          </div>
        </div>

        <h6 class="offcanvas-title">Orders</h6>
        <p class="text-secondary small mb-2">1256 orders last week</p>
        <div class="row mb-3 mb-lg-4">
          <div class="col-12 px-0">
            <ul class="list-group list-group-flush bg-transparent border-0">
              <li class="list-group-item">
                <div class="row gx-3 gx-lg-4">
                  <div class="col">Online Orders</div>
                  <div class="col-auto">
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="titleswitch1"
                      />
                      <label
                        class="form-check-label"
                        for="titleswitch1"
                      ></label>
                    </div>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row gx-3 gx-lg-4">
                  <div class="col">Offline Orders</div>
                  <div class="col-auto">
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="titleswitch2"
                        checked=""
                      />
                      <label
                        class="form-check-label"
                        for="titleswitch2"
                      ></label>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <hr class="mb-4" />
        <a
          href="adminux-company-help-center.html"
          class="row gx-3 align-items-center style-none text-theme-1 mb-3 mb-lg-4"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
        >
          <div class="col-auto">
            <i
              class="bi bi-life-preserver avatar avatar-30 bg-theme-1-subtle text-theme-1 rounded"
            ></i>
          </div>
          <div class="col">
            <p class="">Need help?</p>
          </div>
        </a>
        <a
          href="https://1.envato.market/nQzeo"
          target="_blank"
          class="row gx-3 align-items-center style-none text-theme-1 mb-3 mb-lg-4"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
        >
          <div class="col-auto">
            <span
              class="bi bi-basket avatar avatar-30 bg-theme-1-subtle text-theme-1 rounded position-relative"
            >
              <span
                class="position-absolute top-0 end-0 p-1 bg-green border border-light rounded-circle"
              >
                <span class="visually-hidden">New alerts</span>
              </span>
            </span>
          </div>
          <div class="col">
            <p class="">Buy now and support us!</p>
          </div>
        </a>
      </div>
      <div class="offcanvas-header border-top">
        <div class="col">
          <button class="btn btn-theme" data-bs-dismiss="offcanvas">
            Apply
          </button>
        </div>
        <div class="col-auto">
          <button class="btn btn-link theme-red" data-bs-dismiss="offcanvas">
            Cancel
          </button>
        </div>
      </div>
    </div>
  `,

footer: `
  <!-- Main Footer -->
  <footer class="footer-main">
    <div class="container">
      
      <!-- Join Now Section -->
      <div class="footer-join-section">
        <button class="footer-join-btn" onclick="navigateTo('register.html')">
          JOIN NOW
        </button>
      </div>

      <!-- Sports & Social Links -->
      <div class="footer-sports">
        <div class="footer-sports-links">
          <a href="#" class="footer-sports-link">Football</a>
          <a href="#" class="footer-sports-link">Basketball</a>
          <a href="#" class="footer-sports-link">eFootball</a>
          <a href="#" class="footer-sports-link">Tennis</a>
        </div>
        
        <div class="footer-social">
          <a href="#" class="footer-social-link">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="#" class="footer-social-link">
            <i class="bi bi-twitter-x"></i>
          </a>
          <a href="#" class="footer-social-link">
            <i class="bi bi-instagram"></i>
          </a>
        </div>
      </div>

      <!-- Footer Links -->
      <div class="footer-links-section">
        <div class="footer-links-grid">
          <a href="#" class="footer-link-item">Home</a>
          <a href="#" class="footer-link-item">About</a>
          <a href="#" class="footer-link-item">Terms</a>
          <a href="#" class="footer-link-item">Data Privacy Policy</a>
          <a href="#" class="footer-link-item">Cookies Policy</a>
          <a href="#" class="footer-link-item">Rules</a>
          <a href="#" class="footer-link-item">Lottery Rules</a>
          <a href="#" class="footer-link-item">Help</a>
          <a href="#" class="footer-link-item">Responsible Gambling</a>
          <a href="#" class="footer-link-item">News</a>
        </div>
      </div>

      <!-- Brand & Country -->
      <div class="footer-brand">
        <div class="footer-logo">
          <span class="footer-logo-text">Convert<span class="footer-logo-highlight">bet</span></span>
        </div>
        
        <div class="footer-country">
          <span>🇳🇬</span>
          <span>Nigeria</span>
          <span>Change</span>
        </div>
      </div>

    </div>
  </footer>

  <!-- Footer Info -->
  <div class="footer-info">
    <div class="container">
      <p class="footer-info-text">
        Your bets and payouts are processed by Choplife Gaming Limited, which is licensed and regulated by the Lagos State Lotteries and Gaming Authority of Nigeria.
      </p>
      <p class="footer-license">
        Licence No. LSLGA/OP/OSB/CL071124
      </p>
    </div>
  </div>

  <!-- Footer Warning -->
  <div class="footer-warning">
    <div class="container">
      <p class="footer-warning-text">
        You have to be 18 years and above to bet.
      </p>
      <p class="footer-warning-text">
        Betting is addictive and can be psychologically harmful.
      </p>
      <p class="footer-warning-text">
        Contact an experienced counsellor at any time 24/7 Monday to Sunday via toll free numbers:
      </p>
      
      <div class="footer-contact">
        <a href="tel:09117581454" class="footer-contact-item">Phone: 0911 758 1454</a>
        <a href="tel:09078884268" class="footer-contact-item">Phone: 0907 888 4268</a>
      </div>

      <p class="footer-warning-text" style="margin-top: 15px;">
        or WhatsApp only: 0907 888 4268 or email via <a href="mailto:eap@tranquilandquest.org.ng" style="color: #c8ff00;">eap@tranquilandquest.org.ng</a>
      </p>
      <p class="footer-warning-text">
        Please only contact the number above if you need counselling. For help related to your account, contact our <a href="#" style="color: #c8ff00;">Customer Support Team</a>
      </p>

      <div class="footer-support-links">
        <a href="#" class="footer-support-link">Tranquil & Quest</a>
      </div>
    </div>
  </div>

  <!-- Copyright -->
  <div class="footer-copyright">
    <div class="container">
      <p>Copyright @2025, Designed by <a href="https://adminuiux.com/" target="_blank">Adminuiux</a></p>
    </div>
  </div>

  <!-- Fixed Buttons -->
  <div class="position-fixed bottom-0 end-0 m-3 z-index-5" id="fixedbuttons">

    <br />
    <button
      class="btn btn-square shadow mt-2 d-none rounded-circle"
      id="backtotop"
      style="background: #000; color: #fff; width: 48px; height: 48px;"
    >
      <i class="bi bi-arrow-up"></i>
    </button>
  </div>
`,

init() {
  if (document.getElementById("mobile-nav")) {
    document.getElementById("mobile-nav").innerHTML = this.mobileNav;
  }

  if (document.getElementById("filter-canvas")) {
    document.getElementById("filter-canvas").innerHTML = this.filterCanvas;
  }

  if (document.getElementById("desktop-nav")) {
    document.getElementById("desktop-nav").innerHTML = this.desktopNav;
  }

  if (document.getElementById("side-menu")) {
    document.getElementById("side-menu").innerHTML = this.sideMenu;
  }

  if (document.getElementById("footer")) {
    document.getElementById("footer").innerHTML = this.footer;
  }

  this.setActiveNav();
},

  // Set active navigation state
  setActiveNav() {
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-item, .nav-link").forEach((link) => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
  },
};



function navigateTo(page) {
  window.location.href = page;
}

function pageTitle(title) {
    return title
}



// Initialize on page load
document.addEventListener("DOMContentLoaded", () => AppLayout.init());
