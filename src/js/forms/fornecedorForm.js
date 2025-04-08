import Fornecedor from "../entities/fornecedor.js";
export default function CadastrarFornecedor() {
  const formFornecedores = document.getElementById("form-fornecedores");
  formFornecedores.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = document.getElementById("fornecedor-nome").value;
    const cnpj = document.getElementById("cnpj").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    console.log(nome);
    console.log(cnpj);
    console.log(email);
    console.log(telefone);
    const fornecedor = new Fornecedor(nome, cnpj, email, telefone);
    console.log(fornecedor);

    // html
    const tbody = document.getElementById("tbody-fornecedor");
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${fornecedor.nome}</td>
      <td>${fornecedor.cnpj}</td>
      <td>${fornecedor.email}</td>
      <td>${fornecedor.telefone}</td>`;
    tbody.appendChild(tr);
  });
}
