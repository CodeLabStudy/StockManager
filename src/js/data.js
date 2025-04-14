function getFromLocalStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch (error) {
    console.error(`Erro ao ler ${key} do LocalStorage:`, error);
    return [];
  }
}

function saveToLocalStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
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
