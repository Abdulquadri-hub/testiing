// ================================
// Scroll handling
// ================================
let lastScrollTop = 0;
const header = document.getElementById("eventHeader");
const bottomNav = document.getElementById("bottomNav");
const scrollThreshold = 100;

// Replace the existing scroll event listener with this:
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Compact header
  if (scrollTop > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Hide / show bottom nav (if you have it)
  if (bottomNav) {
    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
      bottomNav.classList.add("hidden");
    } else {
      bottomNav.classList.remove("hidden");
    }
  }

  lastScrollTop = scrollTop;
});

// ================================
// Toggle market collapse/expand
// ================================
function toggleMarket(headerEl) {
  const marketGroup = headerEl.closest(".market-group");
  marketGroup.classList.toggle("collapsed");
}

// ================================
// Market Info Modal
// ================================
const marketInfoModal = document.getElementById("marketInfoModal");
const marketInfoTitle = document.getElementById("marketInfoTitle");
const marketInfoDescription = document.getElementById("marketInfoDescription");
const marketInfoCloseBtn = document.querySelector(".market-info-close");

// Detailed market information
const marketInfoTexts = {
  "1x2": {
    title: "1X2 Market Explained",
    description:
      "The 1X2 market allows you to bet on the final outcome of a match:\n\n" +
      "1 (Home Win): Bet on the home team winning the match\n" +
      "X (Draw): Bet on the match ending in a draw\n" +
      "2 (Away Win): Bet on the away team winning the match\n\n" +
      "Example: If you bet on '1', the home team must win for your bet to be successful.",
  },
  "1x2-1up": {
    title: "1 Goal Up Market",
    description:
      "In the 1 Goal Up market, your bet wins if the selected team goes one goal ahead:\n\n" +
      "- Bet on the team you think will score first\n" +
      "- Bet wins if that team maintains its lead\n" +
      "- Provides an exciting early-game betting option",
  },
  "over-under": {
    title: "Over/Under Market",
    description:
      "Bet on the total number of goals scored in the match:\n\n" +
      "- Bookmakers set a goal line (e.g., 2.5 goals)\n" +
      "- Over: Bet that total goals will exceed the line\n" +
      "- Under: Bet that total goals will be less than the line\n\n" +
      "Example: Over 2.5 wins if 3 or more goals are scored",
  },
  "double-chance": {
    title: "Double Chance Market",
    description:
      "Reduce your risk by covering two possible outcomes:\n\n" +
      "1X (Home Win or Draw): Wins if home team wins or match draws\n" +
      "12 (Home or Away Win): Wins if either team wins\n" +
      "X2 (Draw or Away Win): Wins if match draws or away team wins\n\n" +
      "Provides more security compared to standard 1X2 betting",
  },
};

function showMarketInfo(event, marketType) {
  event.stopPropagation();

  const info = marketInfoTexts[marketType] || {
    title: "Market Information",
    description: "No detailed information available for this market.",
  };

  marketInfoTitle.textContent = info.title;
  marketInfoDescription.textContent = info.description;
  marketInfoModal.style.display = "block";
}

// Close modal when close button is clicked
marketInfoCloseBtn.addEventListener("click", () => {
  marketInfoModal.style.display = "none";
});

// ================================
// Sorting & Best Odds Highlight
// ================================
let currentSort = {
  market: null,
  option: null,
};

function sortByOption(headerEl, option) {
  const marketGroup = headerEl.closest(".market-group");
  const marketType = marketGroup.dataset.market;
  const bookieList = marketGroup.querySelector(".bookie-list");
  const rows = Array.from(bookieList.querySelectorAll(".bookie-row"));

  // Reset header styles
  marketGroup.querySelectorAll(".option-header").forEach((btn) => {
    btn.classList.remove("sorting");
  });
  headerEl.classList.add("sorting");

  // Sort rows
  rows.sort((a, b) => {
    const aVal = parseFloat(a.dataset[option]) || 0;
    const bVal = parseFloat(b.dataset[option]) || 0;
    return bVal - aVal;
  });

  // Re-append sorted rows
  rows.forEach((row) => bookieList.appendChild(row));

  // Remove previous best highlights
  marketGroup.querySelectorAll(".odd-value").forEach((odd) => {
    odd.classList.remove("best");
  });

  // Highlight best odd in selected column
  let bestValue = 0;
  rows.forEach((row) => {
    const val = parseFloat(row.dataset[option]) || 0;
    if (val > bestValue) bestValue = val;
  });

  rows.forEach((row) => {
    const odds = row.querySelectorAll(".odd-value");
    const headers = Array.from(marketGroup.querySelectorAll(".option-header"));
    const index = headers.findIndex((h) => h === headerEl);

    if (index !== -1 && odds[index]) {
      const oddVal = parseFloat(odds[index].textContent);
      if (oddVal === bestValue) {
        odds[index].classList.add("best");
      }
    }
  });

  currentSort.market = marketType;
  currentSort.option = option;
}

// ================================
// Market filter tabs (UI only)
// ================================
document.querySelectorAll(".market-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".market-tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

// ================================
// Odds click (future betslip hook)
// ================================
document.querySelectorAll(".odd-value").forEach((odd) => {
  odd.addEventListener("click", () => {
    console.log("Selected odd:", odd.textContent);
  });
});
