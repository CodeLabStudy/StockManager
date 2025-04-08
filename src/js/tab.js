function InitTabs() {
  const sidebar = document.getElementById("sidebar");
  const toggleButton = document.getElementById("sidebar-toggle");
  toggleButton.addEventListener("click", (e) => {
    e.stopPropagation();
    sidebar.classList.toggle("collapsed");
  });
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");
  const tituloHeader = document.getElementById("titulo-header");
  tabLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e.target);

      const tabId = link.dataset.tab;
      if (tabId === "estoque") {
        tituloHeader.textContent = "Gerenciamento de Estoque";
      } else if (tabId === "fornecedores") {
        tituloHeader.textContent = "Gerenciamento de Fornecedores";
      } else if (tabId === "graficos") {
        tituloHeader.textContent = "Análise de Dados";
      }
      // console.log(tabId);
      tabLinks.forEach((link) => link.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));
      link.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });
}
export { InitTabs };
