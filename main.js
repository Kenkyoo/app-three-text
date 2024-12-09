import init from "./app";
import './style.css'

document.getElementById('app').innerHTML = `
<div class="login-page" id="container">
  <h2>Render your name</h2>
  <div class="form">
    <form class="register-form" id="miFormulario">
      <label for="name">Your name</label>
      <input type="text" id="name" name="name" required>
    
      <label for="size">Size:</label>
      <input type="number" id="size" name="size" required>
    
      <label for="depth">Depth:</label>
      <input type="number" id="depth" name="depth" required>

      <label for="color">Select your favorite color:</label>
      <input type="color" id="color" name="color" required>

      <label for="curveSegments">Softness:</label>
      <input type="range" id="curveSegments" name="curveSegments" value="12" min="1" max="20">

      <button type="submit">Render!</button>
    </form>
  </div>  
</div>`;

  const formulario = document.getElementById('miFormulario');
  formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const size = parseFloat(document.getElementById('size').value);  // Convertir a número
    const depth = parseFloat(document.getElementById('depth').value); 
    const suavidad = parseFloat(document.getElementById('curveSegments').value); 
    const color = document.getElementById('color').value; 

    document.getElementById('container').style.display = 'none';

    init(name, size, depth, color, suavidad)
  });