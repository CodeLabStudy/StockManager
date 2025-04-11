import { InitTabs } from "./tab.js";
import CadastrarFornecedor from "./forms/fornecedorForm.js";
import { renderFornecedores } from "./renderFornecedores.js";
document.addEventListener("DOMContentLoaded", () => {
  InitTabs();
  CadastrarFornecedor();
  renderFornecedores();
});
