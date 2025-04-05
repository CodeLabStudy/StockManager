function InitTabs() {
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");
  console.log(tabContents);
  tabLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      console.log(e.target);
      const tabId = link.dataset.tab;
      console.log(tabId);
      tabLinks.forEach((link) => link.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));
      link.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });
}
export { InitTabs };
