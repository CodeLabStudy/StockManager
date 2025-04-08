export default class Produto {
  nome;
  preco = 0;
  quantidade = 0;
  fornecedor;
  constructor(nome, preco, quantidade, fornecedor) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
    this.fornecedor = fornecedor;
  }
}
