import { fornecedores } from "./data.js";

export function renderProdutos() {
  const select = document.getElementById("fornecedor");
  if (!select) return;

  const lista = fornecedores.todos;
  select.innerHTML = `<option value="">Selecione um fornecedor</option>`;
  lista.forEach((fornecedor) => {
    const option = document.createElement("option");
    option.value = fornecedor.cnpj;
    option.textContent = fornecedor.nome;
    select.appendChild(option);
  });
}

