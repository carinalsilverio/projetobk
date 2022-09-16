const produtosLista = document.querySelector('.lista-produtos');
const listaProdutos = document.querySelector('.produtos-lista');

function criarCardProduto(produto) {
  const tagLi = document.createElement('li');
  tagLi.classList.add('card-produtos');
  tagLi.innerHTML = `
  <img src="${produto.image}" alt = ${produto.image}> 
  <h3>${produto.nome}</h3 alt = ${produto.image}> 
  <p>R$ ${produto.preco}</p alt = ${produto.preco.toFixed(2)}>
  <button type="button" id="${produto.id}">Adicionar</button>`;
  return tagLi;
}

function listarProdutos(listaProdutos) {
  for (let i = 0; i < listaProdutos.length; i++) {
    const produto = listaProdutos[i];
    const cardMontado = criarCardProduto(produto);
    produtosLista.appendChild(cardMontado);
  }
}

listarProdutos(produtos);

let carrinho = [];
produtosLista.addEventListener('click', adicionarProdutoCarrinho);
function adicionarProdutoCarrinho(event) {
  const botao = event.target;
  if (botao.tagName == 'BUTTON') {
    const idProduto = botao.id;

    const produtoFiltrado = produtos.find((produto) => produto.id == idProduto);
    carrinho.push(produtoFiltrado);

    listarProdutosCarrinho();
    atualizarTotal();
  }
}
function listarProdutosCarrinho() {
  listaProdutos.innerHTML = '';

  for (let i = 0; i < carrinho.length; i++) {
    const produto = carrinho[i];

    const tagLi = document.createElement('li');
    tagLi.classList.add('card-produtos');
    tagLi.innerHTML = `
    <div class="info-nome-produto">
    <img src="${produto.image}" alt="${produto.nome}">
    <p>${produto.nome}</p>
    </div>
    <div class="info-preco-produto">
      <p>R$ ${produto.preco.toFixed(2)}</p>
      <button>
        <img src="./src/assets/lixo.png" alt="Lixo para remover produto">
      </button>`;

    listaProdutos.appendChild(tagLi);
  }
}

function atualizarTotal(precoClicado) {
  const infoPreco = document.querySelector('.info-preco');

  let total = 0;
  for (let i = 0; i < carrinho.length; i++) {
    const produto = carrinho[i];
    total += produto.preco;
  }
  if (precoClicado) {
    total = total - precoClicado;
  }
  infoPreco.innerText = `Total: R$ ${total.toFixed(2)}`;
  console.log(infoPreco);
}

const listaProdutosCarrinho = document.querySelector('.produtos-lista');
listaProdutosCarrinho.addEventListener('click', removerProdutoCarrinho);
function removerProdutoCarrinho(event) {
  const botaoExcluir = event.target;
  if (botaoExcluir.tagName == 'BUTTON') {
    let li = botaoExcluir.closest('li');
    let precoDoElementoClicado = parseFloat(
      li.children[1].innerText.replace('R$', '').trim(),
    );
    botaoExcluir.closest('li').remove();
    atualizarTotal(precoDoElementoClicado);
  }

  let itensCarrinho = carrinho;
  let found = itensCarrinho.find((element) => botaoExcluir);
  itensCarrinho.indexOf('.produtos-lista');
  let remover = itensCarrinho.splice(removerProdutoCarrinho,1);
  total=0
 atualizarTotal()
  console.log(carrinho);
}
