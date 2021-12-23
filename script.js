/* eslint-disable no-template-curly-in-string */
/* eslint-disable max-lines-per-function */
/* eslint-disable prefer-const */
// Parâmetro criado para que o javascript só execute após a página estar carregada
// eslint-disable-next-line max-lines-per-function
window.onload = function pgCarregada() {
  const preto = document.getElementById('preto');
  const corUm = document.getElementById('corUm');
  const corDois = document.getElementById('corDois');
  const corTres = document.getElementById('corTres');

  function generateColor() {
    let color = [];
    for (let i = 0; i < 3; i += 1) {
      color.push(Math.round(Math.random() * 256));
    }
    return `rgb(${color[0]},${color[1]}, ${color[2]} )`;
  }

  corUm.style.backgroundColor = generateColor();
  corDois.style.backgroundColor = generateColor();
  corTres.style.backgroundColor = generateColor();

  const board = document.getElementById('pixel-board');
  // h de height
  let h = 5;

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

  let lines = document.querySelectorAll('.pixel-line');

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
    for (let i = 0; i < h; i += 1) {
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
  corUm.addEventListener('click', select);
  corDois.addEventListener('click', select);
  corTres.addEventListener('click', select);

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

  // função que limpa o quadro pintando todos os pixels de branco
  function clearBoard() {
    const pixelList = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixelList.length; i += 1) {
      pixelList[i].style.backgroundColor = 'white';
    }
  }

  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', clearBoard);

  const generateBoard = document.getElementById('generate-board');

  // Função que da um novo tamanho ao board para isso pega o valor declarado pelo usário no imput e atribui a variável 'h' que é responsável pelo número de linhas e de pixels
  // eslint-disable-next-line complexity
  function newSize() {
    const boardSize = document.getElementById('board-size').value;
    const boardSizeInt = parseInt(boardSize, 10);
    // Para poder adicionar novos filhos a div 'pixel-board' novamente removi todos os filhos antes, para que não haja uma "soma" de filhos
    function removeChild(parent) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    }
    clearBoard();
    function reSize(size) {
      h = size;
      creatLines(board);
      // eslint-disable-next-line no-shadow
      let lines = document.querySelectorAll('.pixel-line');
      fillBlock(lines);
      // eslint-disable-next-line no-use-before-define
      viewSize();
      painting();
    }
    if (boardSize == undefined) {
      alert('Board inválido!');
    }
    removeChild(board);
    // eslint-disable-next-line no-param-reassign
    if (boardSizeInt >= 5 && boardSizeInt <= 50) {
      reSize(boardSizeInt);
    } else if (boardSizeInt < 5) {
      reSize(5);
    } else if (boardSizeInt > 50) {
      reSize(50);
    } else {
      alert('Board inválido!');
    }
  }

  generateBoard.addEventListener('click', newSize);

  function viewSize() {
    // eslint-disable-next-line no-shadow
    let size = document.getElementById('size');
    size.innerText = `Tamanho: ${h}`;
  }
  viewSize();
};
