function getFromLocalStorage(key) {
  try {
    const data = JSON.parse(localStorage.getItem(key)) || [];
    console.log("Dados carregados do localStorage:", data);  // Para depuração
    return data;
  } catch (error) {
    console.error(`Erro ao ler ${key} do LocalStorage:`, error);
    return [];
  }
}


function saveToLocalStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    console.log(`Dados salvos no ${key}:`, data);  // Para depuração
  } catch (error) {
    console.error(`Erro ao salvar ${key} no LocalStorage:`, error);
  }
}


export const fornecedores = {
  _data: getFromLocalStorage("fornecedores"),

  get todos() {
    return [...this._data]; // Retorna cópia para evitar mutação direta
  },

  adicionar(novoFornecedor) {
    this._data.push(novoFornecedor);
    saveToLocalStorage("fornecedores", this._data);
  },

  remover(cnpj) {
    this._data = this._data.filter((f) => f.cnpj !== cnpj);
    saveToLocalStorage("fornecedores", this._data);
  },

  porCnpj(cnpj) {
    return this._data.find((f) => f.cnpj === cnpj);
  },
};

export const produtos = {
  _data: getFromLocalStorage("produtos"),

  get todos() {
    return [...this._data];
  },

  adicionar(novoProduto) {
    this._data.push(novoProduto);
    saveToLocalStorage("produtos", this._data);
  },

  remover(index) {
    this._data.splice(index, 1);  // Remove 1 item no índice dado
    saveToLocalStorage("produtos", this._data);
  }
}  

function atualizarSelectFornecedores() {
  const selectFornecedores = document.getElementById("fornecedor");
  selectFornecedores.innerHTML = '<option value="">Selecione um fornecedor</option>';

  fornecedores.todos.forEach((fornecedor) => {
    const option = document.createElement("option");
    option.value = fornecedor.cnpj;
    option.textContent = fornecedor.nome;
    selectFornecedores.appendChild(option);
  });
}

function adicionarNovoFornecedor(novoFornecedor) {
  fornecedores.adicionar(novoFornecedor);
  atualizarSelectFornecedores();
}

const formFornecedor = document.getElementById("form-fornecedores");
formFornecedor.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const nome = document.getElementById("fornecedor-nome").value;
  const cnpj = document.getElementById("cnpj").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  
  const novoFornecedor = { nome, cnpj, email, telefone };
  
  adicionarNovoFornecedor(novoFornecedor);
});

document.addEventListener("DOMContentLoaded", () => {
  atualizarSelectFornecedores();
});