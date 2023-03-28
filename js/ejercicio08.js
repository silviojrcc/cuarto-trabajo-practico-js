function ejercicio08(el){
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
      <h2>Ejercicio 8</h2>
      <button class="mostrar-datos">Mostrar metodos de personas</button>
      <p class="resultado"></p>
      `;

    class Persona {
        #nombre;
        #edad;
        #profesion;
        constructor(nombre, edad, profesion){
            this.#nombre = nombre;
            this.#edad = edad;
            this.#profesion = profesion;
        }

        get nombre(){
            return this.nombre;
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

        get profesion(){
            return this.#profesion;
        }

        set profesion(profesion){
            this.#profesion = profesion;
        }

        saludar(){
            return `Hola soy ${this.#nombre}`;
        }

        despedirse(){
            return `Adioooos me voy porque soy un ${this.#profesion}`;
        }
    }

    //me tome un poco de libertad creativa (???)
    const persona1 = new Persona("Marley", 1, "perro explorador");
    const persona2 = new Persona("Brisa", 4, "gata saltarina");

    const mascotas = [persona1, persona2];

    const botonMostrarMetodos = articleEl.querySelector(".mostrar-datos");
    botonMostrarMetodos.addEventListener("click", (e) => {
        e.preventDefault();
        const resultado = articleEl.querySelector(".resultado");
        let texto = "";
        mascotas.forEach((mascota) => {
            texto += `${mascota.saludar()}<br>`;
            texto += `${mascota.despedirse()}<br>`;
            texto += "<br>"
        });
        resultado.innerHTML = texto;
    });
    el.appendChild(articleEl);
}