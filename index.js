// Handle Button Clicks

function changeBackgroundColor() {
  // Generate random RGB values
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function resetBackgroundColor() {
  // Reset to default (must be empty string for tests)
  document.body.style.backgroundColor = "";
}

// Capture Keyboard Input

function displayKeyPress(event) {
  const keyDisplay = document.getElementById('keyPressDisplay');
  if (keyDisplay) {
    keyDisplay.textContent = `Key pressed: ${event.key}`;
  }
}

// Process Text Input

function displayUserInput() {
  const input = document.getElementById('textInput');
  const output = document.getElementById('textInputDisplay');

  if (input && output) {
    output.textContent = `You typed: ${input.value}`;
  }
}

// Attach Event Listeners

function setupEventListeners() {
  // Button click → change background
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor);

  // Double click → reset background
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor);

  // Key press
  document.addEventListener('keydown', displayKeyPress);

  // Input typing
  document
    .getElementById('textInput')
    .addEventListener('input', displayUserInput);
}

// Initialize when DOM is ready
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}


module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};