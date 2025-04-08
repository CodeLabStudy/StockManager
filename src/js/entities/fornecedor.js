export default class Fornecedor {
  nome;
  cnpj;
  email;
  telefone;

  endereco = {
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
  };
  constructor(nome, cnpj, email, telefone, endereco) {
    this.nome = nome;
    this.cnpj = cnpj;
    this.email = email;
    this.telefone = telefone;
    this.endereco = endereco;
  }
}
