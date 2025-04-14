import { fornecedores } from "./data.js";

export function renderFornecedores() {
  const container = document.querySelector(".cards-fornecedores");
  const listaFornecedores = fornecedores.todos;
  if (listaFornecedores.length === 0) {
    container.innerHTML = `
      <div class="no-data">
        <i class="fas fa-box-open"></i>
        <p>Nenhum fornecedor cadastrado</p>
      </div>
    `;
    return;
  }
  container.innerHTML = listaFornecedores
    .map(
      (fornecedor) => `
    <div class="fornecedor-card" data-cnpj="${fornecedor.cnpj}">
      <div class="card-header">
        <h3>${fornecedor.nome}</h3>
        <span class="badge">${fornecedor.cnpj}</span>
      </div>
      
      <div class="card-body">
        <div class="info-row">
          <i class='bx bx-envelope'></i>
          <span>${fornecedor.email || "Não informado"}</span>
        </div>
        
        <div class="info-row">
          <i class='bx bxs-phone' ></i>
          <span>${fornecedor.telefone || "Não informado"}</span>
        </div>
        
        <div class="info-row">
          <i class='bx bx-location-plus'></i>
          <span>${formatarEndereco(fornecedor.endereco)}</span>
        </div>
      </div>
      
      <div class="card-actions">
        <button class="btn-editar" data-cnpj="${fornecedor.cnpj}">
          <i class="fas fa-edit"></i> Editar
        </button>
        <button class="btn-remover" data-cnpj="${fornecedor.cnpj}">
          <i class="fas fa-trash"></i> Remover
        </button>
      </div>
    </div>
  `
    )
    .join("");

  adicionarEventListeners();
}

function formatarEndereco(endereco) {
  if (!endereco) return "Endereço não informado";
  return `${endereco.logradouro},${endereco.numero},${endereco.bairro},${endereco.localidade}, - ${endereco.uf}`;
}

function adicionarEventListeners() {
  document.querySelectorAll(".btn-remover").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const cnpj = e.currentTarget.dataset.cnpj;
      if (confirm(`Tem certeza que deseja remover o fornecedor ${cnpj}?`)) {
        fornecedores.remover(cnpj);
        renderFornecedores();
        showToast("Fornecedor removido com sucesso!");
      }
    });
  });

  document.querySelectorAll(".btn-editar").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const cnpj = e.currentTarget.dataset.cnpj;
      const fornecedor = fornecedores.porCnpj(cnpj);
      preencherFormularioEdicao(fornecedor);
    });
  });
}

function preencherFormularioEdicao(fornecedor) {
  console.log("Editando fornecedor:", fornecedor);
}

function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
}
