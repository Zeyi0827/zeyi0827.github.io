(function () {
  const newsList = document.getElementById("news-list");
  const newsToggle = document.getElementById("news-toggle");
  const bioMore = document.getElementById("bio-more");
  const bioToggle = document.getElementById("bio-toggle");

  if (bioMore && bioToggle) {
    bioToggle.addEventListener("click", () => {
      const isExpanded = bioMore.classList.toggle("is-expanded");
      bioToggle.textContent = isExpanded ? "Show less" : "Show more";
      bioToggle.setAttribute("aria-expanded", String(isExpanded));
    });
  }

  if (newsList && newsToggle) {
    newsToggle.addEventListener("click", () => {
      const isExpanded = newsList.classList.toggle("is-expanded");
      newsToggle.textContent = isExpanded ? "Show less" : "Show more";
      newsToggle.setAttribute("aria-expanded", String(isExpanded));
    });
  }
})();
