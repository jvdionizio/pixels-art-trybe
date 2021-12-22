// Parâmetro criado para que o javascript só execute após a página estar carregada
// eslint-disable-next-line max-lines-per-function
window.onload = function () {
  const preto = document.getElementById('preto');
  const vermelho = document.getElementById('vermelho');
  const verde = document.getElementById('verde');
  const azul = document.getElementById('azul');
  const board = document.getElementById('pixel-board');
  // h de height
  const h = 5;

  // função para criar divs e dar classe a elas
  function createDiv(className) {
    const div = document.createElement('div');
    div.className = className;
    return div;
  }
  // função para criar linhas e coloca-las na div pixel board
  function creatLines(block) {
    for (let i = 0; i < h; i += 1) {
      block.appendChild(createDiv('pixel-line'));
    }
  }

  creatLines(board);

  const lines = document.querySelectorAll('.pixel-line');

  // eslint-disable-next-line no-use-before-define
  fillBlock(lines);

  // eslint-disable-next-line no-shadow
  // função para que pega node list de divs com classe pixel-line e inicia a função de preencher linhas com os pixels usando como parametro o elemento da node list selecionado pelo index presente no 'for'.
  // eslint-disable-next-line no-shadow
  function fillBlock(lines) {
    for (let index = 0; index < lines.length; index += 1) {
      // eslint-disable-next-line no-use-before-define
      fillLine(lines[index]);
    }
  }
  // função para criar pixels e coloca-los em suas div's com classe pixel-line
  function fillLine(largura) {
    for (let i = 0; i < lines.length; i += 1) {
      largura.appendChild(createDiv('pixel'));
    }
  }

  preto.classList.add('selected');
};
