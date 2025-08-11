// Get DOM elements
const colorDropdownBtn = document.querySelector(".color-dropdown-btn");
const colorDropdownContent = document.querySelector(".color-dropdown-content");
const colorItems = document.querySelectorAll(".color-item");
const colorPreview = document.querySelector(".color-preview");

// Toggle dropdown on button click
colorDropdownBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  colorDropdownContent.classList.toggle("active");
});

// Handle color selection
colorItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Remove selected class from all items
    colorItems.forEach((i) => i.classList.remove("selected"));
    // Add selected class to clicked item
    this.classList.add("selected");

    // Update color preview and text
    const selectedColor = this.querySelector(".color-item-preview").style
      .background;
    const selectedText = this.querySelector(".color-item-text").textContent;

    colorPreview.style.background = selectedColor;
    document.querySelector(".color-dropdown-btn-text span").textContent =
      selectedText;

    // Close dropdown
    colorDropdownBtn.classList.remove("active");
    colorDropdownContent.classList.remove("active");
  });
});

// Close dropdown when clicking outside
document.addEventListener("click", function (e) {
  if (
    !colorDropdownBtn.contains(e.target) &&
    !colorDropdownContent.contains(e.target)
  ) {
    colorDropdownBtn.classList.remove("active");
    colorDropdownContent.classList.remove("active");
  }
});
