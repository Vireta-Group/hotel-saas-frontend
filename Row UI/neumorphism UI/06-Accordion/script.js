document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const isActive = accordionItem.classList.contains("active");

    // Close all accordion items with smooth animation
    document.querySelectorAll(".accordion-item").forEach((item) => {
      item.classList.remove("active");
    });

    // Open clicked item if it wasn't already active
    if (!isActive) {
      accordionItem.classList.add("active");
    }
  });
});
