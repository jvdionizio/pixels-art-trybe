/* eslint-disable prefer-const */
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

  // Esta função qual elemento tem a classe 'selected' remove a classe dele e em seguida atribui a ao elemento com o qual o usário interagil
  function select(sourceEvent) {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    sourceEvent.target.classList.add('selected');
  }

  preto.addEventListener('click', select);
  vermelho.addEventListener('click', select);
  verde.addEventListener('click', select);
  azul.addEventListener('click', select);

  function painting() {
    const pixelList = document.getElementsByClassName('pixel');

    function paint(sourceEvent) {
      const selected = document.querySelector('.selected');
      const selectedCs = window.getComputedStyle(selected);
      const color = selectedCs.backgroundColor;
      // eslint-disable-next-line no-param-reassign
      sourceEvent.target.style.backgroundColor = color;
    }

    for (let i = 0; i < pixelList.length; i += 1) {
      pixelList[i].style.backgroundColor = 'white';
      pixelList[i].addEventListener('click', paint);
    }
  }

  painting();

  function clearBoard() {
    const pixelList = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixelList.length; i += 1) {
      pixelList[i].style.backgroundColor = 'white';
    }
  }

  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', clearBoard);
};
