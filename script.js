const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let color = document.getElementById('color').value;
let brushSize = document.getElementById('brush-size').value;

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
});

canvas.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctx.stroke();
  }
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
  ctx.closePath();
});

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

const colorPicker = document.getElementById('color');
colorPicker.addEventListener('change', (e) => {
  color = e.target.value;
});

const brushSizeInput = document.getElementById('brush-size');
brushSizeInput.addEventListener('change', (e) => {
  brushSize = e.target.value;
});
