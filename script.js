let pixelBoard = document.getElementById('pixel-board');

pixelBoard.style.backgroundColor = '#FFF34F';

function createLine() {
  let line = document.createElement('div');
  line.className = 'line';
  return line;
}

function createPixel() {
  let pixel = document.createElement('div');
  pixel.className = 'pixel';
  return pixel;
}

function fillBlock(altura) {
  for (let i = 0; i < altura; i += 1) {
    let line = createLine();
    pixelBoard.appendChild(line);
  }
}

function fillLine(largura) {
  for (let i = 1; i <= largura; i += 1) {
    let pixel = createPixel();
    line.appendChild(pixel);
  }
}

fillBlock(5);
