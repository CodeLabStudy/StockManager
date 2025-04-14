import Fornecedor from "../entities/fornecedor.js";
import { fornecedores } from "../data.js";
import { renderFornecedores } from "../renderFornecedores.js";
import AddressByCep from "../services/cepService.js";

export default async function CadastrarFornecedor() {
  const formFornecedores = document.getElementById("form-fornecedores");

  document.getElementById("cep").addEventListener("blur", async () => {
    const cep = document.getElementById("cep").value;
    const resultadress = await AddressByCep(cep);
    document.getElementById("logradouro").value = resultadress.logradouro || "";
    document.getElementById("bairro").value = resultadress.bairro || "";
    document.getElementById("cidade").value = resultadress.localidade || "";
    document.getElementById("estado").value = resultadress.estado || "";
  });

  formFornecedores.addEventListener("submit", async (event) => {
    event.preventDefault();
    const nome = document.getElementById("fornecedor-nome").value;
    const cnpj = document.getElementById("cnpj").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const numeroEndereco = document.getElementById("numero-endereco").value;

    const adress = {
      logradouro: document.getElementById("logradouro").value,
      bairro: document.getElementById("bairro").value,
      localidade: document.getElementById("cidade").value,
      uf: document.getElementById("estado").value,
      cep:document.getElementById("cep").value,
      numero: numeroEndereco,
    };
    const fornecedor = new Fornecedor(nome, cnpj, email, telefone, adress);
    fornecedores.adicionar(fornecedor);
    alert(`Fornecedor ${nome} cadastrado com sucesso!`);
    console.log("Fornecedor cadastrado:", fornecedor);
    renderFornecedores();
    formFornecedores.reset();
  });
}