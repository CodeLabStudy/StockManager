## 📂 Estrutura do Projeto

    📦 <StockManager>

    ├── 📄 README.md → Documentação principal do projeto
    ├── 📄 index.html → Página HTML principal
    └── 📂 src/ → Código-fonte do projeto
    ├── 📂 assets/ → Arquivos estáticos (imagens, ícones, fonts)
    ├── 📂 styles/ → Folhas de estilo (CSS)
    │ ├── 📂 base/ → Estilos base
    │ │ ├── 📄 global.css → Estilos globais (variáveis, tipografia)
    │ │ └── 📄 reset.css → Reset de estilos padrão do navegador
    │ └── 📂 components/ → Estilos modularizados por componente
    │ └── 📄 header.css → Estilos específicos do cabeçalho
    └── 📂 js/ → Scripts JavaScript
      ├── main.js →

## 📁 Explicação das responsabilidades dos arquivos JS

### 📄 `Main.js`

**Arquivo principal de inicialização do JavaScript**

**Responsabilidade:**

Centraliza a inicialização dos módulos e funcionalidades do projeto após o carregamento completo do DOM, garantindo que os scripts sejam executados somente quando os elementos da página estiverem disponíveis.
**Código:**

````javascript
document.addEventListener("DOMContentLoaded", () => {
  InitTabs();
});



### 📄 `tab.js`

**Responsabilidade:**
Gerencia a navegação entre diferentes conteúdos de abas na interface. Ao clicar em uma aba, o módulo ativa o conteúdo correspondente e desativa os demais, controlando dinamicamente as classes CSS.

**Código:**
```javascript
function InitTabs() {
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  tabLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const tabId = link.dataset.tab;

      tabLinks.forEach((link) => link.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      link.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });
}

export { InitTabs };

````
