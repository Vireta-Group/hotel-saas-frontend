// Classic Tabs Functionality
document.querySelectorAll(".tabs-classic .tab-classic").forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs and panels
    document
      .querySelectorAll(".tabs-classic .tab-classic")
      .forEach((t) => t.classList.remove("active"));
    document
      .querySelectorAll(".tabs-classic .content-panel")
      .forEach((p) => p.classList.remove("active"));

    // Add active class to clicked tab
    tab.classList.add("active");

    // Show corresponding panel
    const tabId = tab.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

// Pill Tabs Functionality
document.querySelectorAll(".tabs-pill .tab-pill").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".tabs-pill .tab-pill")
      .forEach((t) => t.classList.remove("active"));
    document
      .querySelectorAll(".tabs-pill .content-panel")
      .forEach((p) => p.classList.remove("active"));

    tab.classList.add("active");

    const tabId = tab.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

// Vertical Tabs Functionality
document.querySelectorAll(".tabs-vertical .tab-vertical").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".tabs-vertical .tab-vertical")
      .forEach((t) => t.classList.remove("active"));
    document
      .querySelectorAll(".tabs-vertical .content-panel")
      .forEach((p) => p.classList.remove("active"));

    tab.classList.add("active");

    const tabId = tab.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

// Morphing Tabs Functionality
const morphTabs = document.querySelectorAll(".tabs-morph .tab-morph");
const morphingBg = document.querySelector(".morphing-bg");

function updateMorphingBg(activeTab) {
  const tabIndex = [...morphTabs].indexOf(activeTab);
  const tabWidth = activeTab.offsetWidth;
  const tabLeft = activeTab.offsetLeft;

  morphingBg.style.width = tabWidth + "px";
  morphingBg.style.left = tabLeft + "px";
}

morphTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".tabs-morph .tab-morph")
      .forEach((t) => t.classList.remove("active"));
    document
      .querySelectorAll(".tabs-morph .content-panel")
      .forEach((p) => p.classList.remove("active"));

    tab.classList.add("active");
    updateMorphingBg(tab);

    const tabId = tab.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

// Initialize morphing background
updateMorphingBg(document.querySelector(".tabs-morph .tab-morph.active"));

// Segment Tabs Functionality
document.querySelectorAll(".tabs-segment .tab-segment").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".tabs-segment .tab-segment")
      .forEach((t) => t.classList.remove("active"));
    document
      .querySelectorAll(".tabs-segment .content-panel")
      .forEach((p) => p.classList.remove("active"));

    tab.classList.add("active");

    const tabId = tab.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

// Handle window resize for morphing tabs
window.addEventListener("resize", () => {
  const activeTab = document.querySelector(".tabs-morph .tab-morph.active");
  if (activeTab) {
    updateMorphingBg(activeTab);
  }
});
