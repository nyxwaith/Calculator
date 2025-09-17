
  // Reference to the display input element
  const display = document.forms[0].display;

  // Function to safely append characters to display
  function appendToDisplay(char) {
    display.value += char;
  }

  // Listen for keyboard events
  document.addEventListener('keydown', function(event) {
    const key = event.key;
    // Map keyboard keys to calculator actions
    if ((key >= '0' && key <= '9') || key === '.') {
      appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      appendToDisplay(key);
    } else if (key === 'Enter') {
      // Evaluate expression on Enter key
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
      event.preventDefault();
    } else if (key === 'Backspace') {
      // Delete last char on Backspace
      display.value = display.value.slice(0, -1);
      event.preventDefault();
    } else if (key.toLowerCase() === 'c') {
      // Clear display on 'c' key
      display.value = '';
      event.preventDefault();
    }
  });
