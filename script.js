(function () {
  const newsList = document.getElementById("news-list");
  const newsToggle = document.getElementById("news-toggle");

  if (!newsList || !newsToggle) {
    return;
  }

  newsToggle.addEventListener("click", () => {
    const isExpanded = newsList.classList.toggle("is-expanded");
    newsToggle.textContent = isExpanded ? "Show less" : "Show more";
    newsToggle.setAttribute("aria-expanded", String(isExpanded));
  });
})();
