function ejercicio09(el){
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
      <h2>Ejercicio 9</h2>
      <button class="mostrar-datos">Mostrar metodos de animales</button>
      <p class="resultado"></p>
      `;

    //La clase animal vendría a ser como una clase abstracta? se puede/debe hacer instancias de esta clase?
    class Animal {
        #nombre;
        #edad;
        constructor(nombre, edad){
            this.#nombre = nombre;
            this.#edad = edad;
        }

        get nombre(){
            return this.#nombre;
        }

        set nombre(nombre){
            this.#nombre = nombre;
        }

        get edad(){
            return this.#edad;
        }

        set edad(edad){
            this.#edad = edad;
        }

        emitirSonido(){
            return `Soy un animal que dice hhhhhh`;
        }
    }

    class Perro extends Animal{
        constructor(nombre, edad){
            super(nombre, edad);
        }

        emitirSonido(){
            return `Soy un perro que hace guau`;
        }
    }

    class Gato extends Animal{
        constructor(nombre, edad){
            super(nombre, edad);
        }

        emitirSonido(){
            return `Soy un gato que hace miuau`;
        }
    }

    const animal = new Animal("Marley", 1);
    const perro = new Perro("Brisa", 4);
    const gato = new Gato("Brisa", 4);
    

    const animales = [animal, perro, gato];

    const botonMostrarMetodos = articleEl.querySelector(".mostrar-datos");
    botonMostrarMetodos.addEventListener("click", (e) => {
        e.preventDefault();
        const resultado = articleEl.querySelector(".resultado");
        let texto = "";
        animales.forEach((animal) => {
            texto += `${animal.emitirSonido()}<br>`;
            texto += "<br>"
        });
        resultado.innerHTML = texto;
    });
    el.appendChild(articleEl);
}