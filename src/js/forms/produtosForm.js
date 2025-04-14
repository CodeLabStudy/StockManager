import Produto from "../entities/produto.js";
import { produtos, fornecedores } from "../data.js";    

let editIndex = -1;  // Índice do produto a ser editado

export default function CadastrarProduto() {
  const formProdutos = document.getElementById("form-produto");

  formProdutos.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const quantidade = document.getElementById("quantidade").value;
    const preco = document.getElementById("preco").value;
    const cnpjFornecedor = document.getElementById("fornecedor").value;
    const fornecedor = fornecedores.porCnpj(cnpjFornecedor);
    
    if (!fornecedor) {
      alert("Fornecedor inválido.");
      return;
    }

    const produto = new Produto(nome, preco, quantidade, fornecedor.nome);

    if (editIndex === -1) {
      // Adiciona novo produto
      produtos.adicionar(produto);
    } else {
      // Atualiza o produto existente
      produtos.remover(editIndex);  // Remove o produto antigo
      produtos.adicionar(produto);  // Adiciona o produto editado
      editIndex = -1;  // Reseta o índice de edição
    }

    renderTabelaProdutos();  // Atualiza a tabela após adicionar ou editar o produto
    formProdutos.reset();    // Limpa o formulário
  });
}

function renderTabelaProdutos() {
  const tbody = document.getElementById("tbody-produto");
  if (!tbody) return;

  tbody.innerHTML = '';  // Limpa a tabela antes de re-renderizar
  
  const listaProdutos = produtos.todos;  // Lê os produtos do localStorage
  listaProdutos.forEach((produto, index) => {
    const tr = document.createElement("tr");
    tr.setAttribute("data-id", index);  // Define o id único

    const tdNome = document.createElement("td");
    tdNome.textContent = produto.nome;
    tr.appendChild(tdNome);

    const tdQuantidade = document.createElement("td");
    tdQuantidade.textContent = produto.quantidade;
    tr.appendChild(tdQuantidade);

    const tdPreco = document.createElement("td");
    tdPreco.textContent = produto.preco;
    tr.appendChild(tdPreco);

    const tdFornecedor = document.createElement("td");
    tdFornecedor.textContent = produto.fornecedor;
    tr.appendChild(tdFornecedor);

    const tdAcoes = document.createElement("td");
    tdAcoes.innerHTML = `
      <button class="editar" data-id="${index}">Editar</button>
      <button class="excluir" data-id="${index}">Excluir</button>
    `;
    tr.appendChild(tdAcoes);

    tbody.appendChild(tr);
  });

  // Registra os eventos de clique para editar e excluir produtos
  document.querySelectorAll(".excluir").forEach(button => {
    button.addEventListener("click", handleExcluir);
  });

  // Registrar o evento de clique para editar produtos
  document.querySelectorAll(".editar").forEach(button => {
    button.addEventListener("click", handleEditar);
  });
}

// Função para lidar com a exclusão do produto
function handleExcluir(event) {
  const index = event.target.getAttribute("data-id");
  produtos.remover(index);  // Remove o produto pelo índice
  renderTabelaProdutos();  // Atualiza a tabela após a exclusão
}

// Função para lidar com a edição do produto
function handleEditar(event) {
  editIndex = event.target.getAttribute("data-id");  // Define o índice do produto a ser editado
  const produto = produtos.todos[editIndex]; // Obtém o produto para editar
  
  // Preenche os campos do formulário com os dados do produto
  document.getElementById("nome").value = produto.nome;
  document.getElementById("quantidade").value = produto.quantidade;
  document.getElementById("preco").value = produto.preco;
  document.getElementById("fornecedor").value = produto.fornecedor;
}

document.addEventListener("DOMContentLoaded", () => {
  renderTabelaProdutos();  // Renderiza os produtos carregados ao inicializar a página
});