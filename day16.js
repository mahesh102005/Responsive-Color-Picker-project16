document.addEventListener('DOMContentLoaded', function() {
  const colorPicker = document.getElementById('colorPicker');
  const colorValue = document.getElementById('colorValue');

  // Event listener for color input changes
  colorPicker.addEventListener('input', function() {
    const selectedColor = colorPicker.value;
    
    // Change the background color of the page
    document.body.style.backgroundColor = selectedColor;
    
    // Display the selected color value
    colorValue.textContent = selectedColor;
  });
});
