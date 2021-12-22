// eslint-disable-next-line max-lines-per-function
window.onload = function () {
  const lines = document.querySelectorAll('.pixel-line');

  // eslint-disable-next-line no-use-before-define
  fillBlock(lines);

  function createPixel(className) {
    const pixel = document.createElement('div');
    pixel.className = className;
    return pixel;
  }

  // eslint-disable-next-line no-shadow
  function fillBlock(lines) {
    for (let index = 0; index < lines.length; index += 1) {
      // eslint-disable-next-line no-use-before-define
      fillLine(lines[index]);
    }
  }

  function fillLine(largura) {
    for (let i = 0; i < lines.length; i += 1) {
      largura.appendChild(createPixel('pixel'));
    }
  }
};
