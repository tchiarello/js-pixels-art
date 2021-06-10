const button = document.querySelector('#clear-board');
let colorActive;

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function colorsPalette() {
  const colorPalette = document.querySelector('#color-palette');
  const colors = [
    'black',
    getRandomColor(),
    getRandomColor(),
    getRandomColor(),
  ];
  colors.forEach((color, index) => {
    const colorElement = document.createElement('div');
    colorElement.className = 'color';
    colorElement.style.backgroundColor = color;
    if (index === 0) {
      colorElement.classList.add('selected');
      colorActive = color;
    }
    colorElement.addEventListener('click', () => {
      document.querySelector('.color.selected').classList.remove('selected');
      colorElement.classList.add('selected');
      colorActive = color;
    });
    colorPalette.appendChild(colorElement);
  });
}
colorsPalette();

function pixelsBoard(pixelsAmount) {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.innerHTML = '';
  let amount = pixelsAmount;
  if (pixelsAmount < 5) {
    amount = 5;
  } else if (pixelsAmount > 50) {
    amount = 50;
  }
  for (let i = 0; i < amount; i += 1) {
    const row = document.createElement('div');
    row.className = 'row';

    for (let j = 0; j < amount; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', () => {
        pixel.style.backgroundColor = colorActive;
      });
      row.appendChild(pixel);
    }
    pixelBoard.appendChild(row);
  }
}
pixelsBoard(5);

function generateBoardSize() {
  const boardSize = document.querySelector('#board-size');
  const generateBoard = document.querySelector('#generate-board');
  generateBoard.addEventListener('click', () => {
    if (boardSize.value === '') {
      alert('Board inválido!');
      return;
    }
    pixelsBoard(Number(boardSize.value));
  });
}
generateBoardSize();

button.addEventListener('click', () => {
  const allPixels = document.querySelectorAll('.pixel');
  allPixels.forEach((pixel) => {
    if (pixel.style.backgroundColor !== 'white') {
      pixel.style.backgroundColor = 'white';
    }
  });
});
