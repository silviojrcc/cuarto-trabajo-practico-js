function ejercicio06(el) {
  const articleEl = document.createElement("article");
  articleEl.innerHTML = `
      <h2>Ejercicio 6</h2>
      <button class="mostrar-datos">Mostrar datos de productos</button>
      <p class="resultado"></p>
    `;

  class Libro {
    #isbn;
    #titulo;
    #autor;
    #cantidadPaginas;
    constructor(isbn, titulo, autor, cantidadPaginas) {
      this.#isbn = isbn;
      this.#titulo = titulo;
      this.#autor = autor;
      this.#cantidadPaginas = cantidadPaginas;
    }

    get isbn() {
      return this.#isbn;
    }

    set isbn(isbn) {
      this.#isbn = isbn;
    }

    get titulo() {
      return this.#titulo;
    }

    set titulo(titulo) {
      this.#titulo = titulo;
    }

    get autor() {
      return this.#autor;
    }

    set autor(autor) {
      this.#autor = autor;
    }

    get cantidadPaginas() {
      return this.#cantidadPaginas;
    }

    set cantidadPaginas(cantidadPaginas) {
      this.#cantidadPaginas = cantidadPaginas;
    }

    mostrarLibro() {
      return `El libro ${this.#titulo} con ISBN ${
        this.#isbn
      } creado por el autor ${this.#autor} tiene ${
        this.#cantidadPaginas
      } páginas`;
    }
  }

  const libro1 = new Libro(1231231, "El nombre del viento", "Patrick Rothfuss", 613);
  const libro2 = new Libro(9874987, "El temor de un hombre sabio", "Patrick Rothfuss", 1200);

  const libros = [libro1, libro2];

  const boton = articleEl.querySelector(".mostrar-datos");
  boton.addEventListener("click", (e) => {
    e.preventDefault();
    const resultado = articleEl.querySelector(".resultado");

    libros.forEach((libro) => {
      resultado.innerHTML += `${libro.mostrarLibro()}<br>`;
    });
  });
  el.appendChild(articleEl);
}
