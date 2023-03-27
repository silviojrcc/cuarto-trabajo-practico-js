function ejercicio05(el){
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
      <h2>Ejercicio 5</h2>
      <button class="mostrar-datos">Mostrar datos persona ingresada</button>
      <div class="resultado"></div>
      `;

    class Persona {
        #nombre;
        #edad;
        #DNI;
        #sexo;
        #peso;
        #altura;
        #anioNacimiento;
        //la edad se calculara dependiendo del año de nacimiento y el dni se generara de forma automatica
        constructor(nombre, sexo, peso, altura, anioNacimiento){
            this.#nombre = nombre;

            this.#sexo = sexo;
            this.#peso = peso;
            this.#altura = altura;
            this.#anioNacimiento = anioNacimiento;

            this.calcularEdad();
            this.generarDNI();
        }

        get nombre(){
            return this.#nombre;
        }

        set nombre(nombre){
            this.#nombre = nombre;
        }

        get edad(){
            return this.edad;
        }

        set edad(edad){
            this.#edad = edad;
        }

        get dni(){
            return this.#DNI;
        }

        set dni(dni){
            this.#DNI = dni;
        }

        get sexo(){
            return this.#sexo;
        }

        set sexo(sexo){
            sexo = sexo.toUpperCase();
            if (sexo === "H" || sexo === "F") {
                this.#sexo = sexo;
                return `El sexo se registró correctamente`;
            } else {
                return `El sexo solo puede ser "H" para hombre y "M" para mujer`;
            }

        }

        get peso(){
            return this.#peso;
        }

        set peso(peso){
            this.#peso = peso;
        }

        get altura(){
            return this.#altura;
        }

        set altura(altura){
            this.#altura = altura;
        }

        get anioNacimiento(){
            return this.#anioNacimiento;
        }

        set anioNacimiento(anioNacimiento){
            this.#anioNacimiento = anioNacimiento;
        }

        mostrarGeneracion() {
            const generaciones = {
              "Generacion silenciosa":this.#anioNacimiento >= 1930 && this.#anioNacimiento <= 1948,
              "Baby Boomers": this.#anioNacimiento >= 1949 && this.#anioNacimiento <= 1968,
              "Generacion X": this.#anioNacimiento >= 1969 && this.#anioNacimiento <= 1980,
              "Millennials": this.#anioNacimiento >= 1981 && this.#anioNacimiento <= 1993,
              "Generación Z": this.#anioNacimiento >= 1994 && this.#anioNacimiento <= 2010,
            };
          
            for (const generacion in generaciones) {
              if (generaciones[generacion]) {
                return generacion;
              }
            }
          
            return "No tenemos información acerca de ese año (o tal vez si pero preferimos no darla)";
        }

        esMayorDeEdad(){
            return this.#anioNacimiento >= 18 ?  `Es mayor de edad` :  `No es mayor de edad`;
        }

        mostrarDatos(){
            return `
                <h3>Usuario: ${this.#nombre}</h3>
                <h4>Datos</h4>
                <ul>
                    <li>Edad: ${this.#edad}</li>
                    <li>DNI: ${this.#DNI}</li>
                    <li>Sexo: ${this.#sexo}</li>
                    <li>Peso: ${this.#peso}kg</li>
                    <li>Altura: ${this.#altura}cm</li>
                    <li>Año Nacimiento: ${this.#anioNacimiento}</li>
                    <li>Generación: ${this.mostrarGeneracion()}</li>
                </ul>
            `;
        }

        generarDNI(){
            const numeroMinimo = 10000000;
            const numeroMaximo = 99999999;
            this.#DNI = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1) + numeroMinimo);
        }

        calcularEdad(){
            const fechaActual = new Date();
            const anioActual = fechaActual.getFullYear();
            this.#edad = anioActual - this.#anioNacimiento;
        }

    }

    const persona = new Persona("Silvio", "h", 60, 184, 1990);
    const resultado = articleEl.querySelector(".resultado");

    const boton = articleEl.querySelector(".mostrar-datos");
    boton.addEventListener("click", (e) => {
        e.preventDefault();
        resultado.innerHTML = persona.mostrarDatos();
    });

    el.appendChild(articleEl);
    
}