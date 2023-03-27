function ejercicio04(el) {
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
      <h2>Ejercicio 4</h2>
      <button class="mostrar-datos">Mostrar datos de productos</button>
      <p class="resultado"></p>
      `;

    class Producto {
        #codigo;
        #nombre;
        #precio;
        constructor(codigo, nombre, precio){
            this.#codigo = codigo;
            this.#nombre = nombre;
            this.#precio = precio;
        }

        get codigo(){
            return this.#codigo;
        }

        set codigo(codigo){
            this.#codigo = codigo;
        }

        get nombre(){
            return this.#nombre;
        }

        set nombre(nombre){
            this.#nombre = nombre;
        }

        get precio(){
            return this.#precio;
        }

        set precio(precio){
            this.#precio = precio;
        }

        imprimirDatos(){
            return `El codigo del producto es ${this.#codigo}, su nombre es ${this.#nombre} y su precio es de $${this.#precio}`;
        }
    }

    const procesador = new Producto(151515, "Procesador AMD Ryzen 9 5900X", 221000);
    const placaMadre = new Producto(151516, "Mother Asrock X670E", 215000);
    const memoriaRam = new Producto(151517, "Memoria Team DDR5 8GB 5200MHz", 24000);

    const productos = [procesador, placaMadre, memoriaRam];

    const boton = articleEl.querySelector(".mostrar-datos");
    boton.addEventListener("click", (e) => {
        e.preventDefault();
        const resultado = articleEl.querySelector(".resultado");

        productos.forEach(producto => {
            resultado.innerHTML += `${producto.imprimirDatos()}<br>`
        });
    });

    el.appendChild(articleEl);
}