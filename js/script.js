import peliculas from './peliculas.js'; // Importamos el objeto de películas

// Función para mostrar las películas filtradas por género
function mostrarPeliculasPorGenero(genero) {
  const contenedor = document.getElementById(`genero-${genero}`); // Seleccionamos el contenedor específico por género

  // Filtramos las películas que tienen el ID de género especificado
  const peliculasFiltradas = peliculas.filter(pelicula => pelicula.genre_ids.includes(genero));

  console.log(`Películas filtradas por el género ${genero}:`, peliculasFiltradas); // Imprimimos en consola las películas filtradas

  // Limpiamos el contenedor antes de agregar nuevas películas
  contenedor.innerHTML = '';

  // Iteramos sobre las películas filtradas
  peliculasFiltradas.forEach(pelicula => {
    const peliculaElemento = document.createElement('div'); // Creamos un contenedor 'div' para cada película
    peliculaElemento.classList.add('pelicula'); // Añadimos la clase 'pelicula' a cada contenedor de película

    // Usamos el DOM para insertar imagen y título en el contenedor de cada película
    const imagen = document.createElement('img'); // Creamos un elemento <img> para la imagen de la película
    imagen.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`; // Asignamos la ruta de la imagen
    imagen.alt = pelicula.original_title; // Asignamos el título de la película como texto alternativo

    const titulo = document.createElement('h3'); // Creamos un elemento <h3> para el título
    titulo.textContent = pelicula.original_title; // Añadimos el título de la película como contenido de texto

    // Añadimos la imagen y el título al contenedor de la película
    peliculaElemento.appendChild(imagen); // Insertamos la imagen en el contenedor de película
    peliculaElemento.appendChild(titulo); // Insertamos el título en el contenedor de película

    contenedor.appendChild(peliculaElemento); // Añadimos cada contenedor de película al contenedor general
  });
}

// Llamamos a la función para cargar las películas en cada sección de género
mostrarPeliculasPorGenero(28); // Películas de Acción
mostrarPeliculasPorGenero(53); // Películas de Thriller
mostrarPeliculasPorGenero(12); // Películas de Aventura
