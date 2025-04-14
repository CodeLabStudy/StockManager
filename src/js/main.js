import { InitTabs } from "./tab.js";
import CadastrarFornecedor from "./forms/fornecedorForm.js";
<<<<<<< HEAD
import CadastrarProduto from "./forms/produtosForm.js";

document.addEventListener("DOMContentLoaded", () => {
  InitTabs();
  CadastrarFornecedor();
  CadastrarProduto();
=======
import { renderFornecedores } from "./renderFornecedores.js";
document.addEventListener("DOMContentLoaded", () => {
  InitTabs();
  CadastrarFornecedor();
  renderFornecedores();
>>>>>>> cc956dc2f5cc6ac82d0951b635ce5049d57f6e9c
});
