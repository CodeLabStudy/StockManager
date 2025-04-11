import Fornecedor from "../entities/fornecedor.js";
import { fornecedores } from "../data.js";
import { renderFornecedores } from "../renderFornecedores.js";
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
    fornecedores.adicionar(fornecedor);
    alert(`Fornecedor ${nome} cadastrado com sucesso!`);
    console.log("Fornecedor cadastrado:", fornecedor);
    renderFornecedores();
    formFornecedores.reset();
  });
}
