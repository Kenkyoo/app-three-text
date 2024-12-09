3D Text Renderer with Three.js

Este proyecto permite renderizar texto en 3D utilizando Three.js. Puedes ingresar tu nombre o cualquier palabra, personalizar su tamaño, profundidad, color y suavidad. ¡Ideal para crear textos 3D interactivos en tu página web!
Características

    Renderizado 3D interactivo: Usa Three.js para crear y mostrar texto en 3D.
    Personalización: Puedes ajustar el tamaño, la profundidad, el color y la suavidad del texto.
    Controles interactivos: Navega alrededor del texto con controles de órbita.
    Fondo personalizable: Añade un fondo personalizado para darle más estilo a tu visualización.

Demo

Puedes ver una demostración en vivo aquí.
Instalación

    Clona el repositorio:

git clone https://github.com/Kenkyoo/app-three-text.git

Instala las dependencias:

cd app-three-text
npm install

Ejecuta el servidor de desarrollo:

    npm run dev

    Abre tu navegador y ve a http://localhost:5173.

Uso

    El proyecto está configurado para renderizar el texto en 3D cuando se carga.
    Puedes modificar los parámetros como el texto, tamaño, profundidad, color y suavidad en el archivo main.js.
    El texto 3D se muestra en el navegador y puedes interactuar con él usando el mouse para rotarlo.

Dependencias

    Three.js: Librería principal para el renderizado 3D.
    Vite: Herramienta de desarrollo para crear el entorno de la aplicación.
    OrbitControls: Permite la interacción con el modelo 3D usando el ratón.

Configuración

    Texto: El texto que se desea mostrar en 3D se pasa como un parámetro en la función init().
    Tamaño: Tamaño del texto en el espacio 3D.
    Profundidad: Profundidad del texto 3D.
    Color: Color del texto 3D.
    Suavidad: Controla la suavidad de los bordes del texto.

Contribuciones

Las contribuciones son bienvenidas. Si tienes ideas para nuevas características o mejoras, no dudes en abrir un "issue" o enviar un "pull request".
Licencia

Este proyecto está bajo la licencia MIT.
