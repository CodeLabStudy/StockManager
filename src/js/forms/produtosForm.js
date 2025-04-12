import Produto from "../entities/produto.js";
export default function CadastrarProduto() {
    const formProdutos = document.getElementById("form-produto");
    formProdutos.addEventListener("submit", (event) => {
        event.preventDefault();
        const nome = document.getElementById("nome").value;
        const quantidade = document.getElementById("quantidade").value;
        const preco = document.getElementById("preco").value;
        const fornecedor = document.getElementById("fornecedor").value;
        console.log(nome);
        console.log(quantidade);
        console.log(preco);
        console.log(fornecedor)
        const produto = new Produto(nome, quantidade, preco, fornecedor);
        console.log(produto);

        const tbody = document.getElementById("tbody-produto");
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${produto.nome}</td>
            <td>${produto.quantidade}</td>
            <td>${produto.preco}</td>
            <td>${produto.fornecedor}</td>
        `;

        tbody.appendChild(tr);
    });
}
