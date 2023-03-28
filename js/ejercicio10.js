function ejercicio10(el) {
  const articleEl = document.createElement("article");
  articleEl.innerHTML = `
      <h2>Ejercicio 10</h2>
      <button class="mostrar-datos">Mostrar ejercicio10</button>
      <p class="resultado"></p>
    `;

  class Aeropuerto {
    #nombreAeropuerto;
    #listaAviones;
    constructor(nombreAeropuerto) {
      this.#nombreAeropuerto = nombreAeropuerto;
      this.#listaAviones = [];
    }

    get nombreAeropuerto() {
      return this.#nombreAeropuerto;
    }

    set nombreAeropuerto(nombreAeropuerto) {
      this.#nombreAeropuerto = nombreAeropuerto;
    }

    get listaAviones() {
      return this.#listaAviones;
    }

    set listaAviones(listaAviones) {
      this.#listaAviones = listaAviones;
    }

    agregarAvion(avion) {
      this.#listaAviones.push(avion);
      return `El avión ${avion.nombre} ha sido agregado al aeropuerto ${
        this.#nombreAeropuerto
      }`;
    }

    buscarAvion(nombreAvion) {
      const avionEncontrado = this.#listaAviones.find(
        (avion) => avion.nombre === nombreAvion
      );
      if (avionEncontrado) {
        return `Se ha encontrado el avion ${avionEncontrado.nombre} con capacidad ${avionEncontrado.capacidad} y destino a ${avionEncontrado.destino}`;
      } else {
        return `No se encontro el avion ${nombreAvion} en el aeropuerto ${
          this.#nombreAeropuerto
        }`;
      }
    }
  }

  class Avion {
    #nombre;
    #capacidad;
    #destino;
    #listaDePasajeros;
    constructor(nombre, capacidad, destino) {
      this.#nombre = nombre;
      this.#capacidad = capacidad;
      this.#destino = destino;
      this.#listaDePasajeros = [];
    }

    get nombre() {
      return this.#nombre;
    }

    set nombre(nombre) {
      this.#nombre = nombre;
    }

    get capacidad() {
      return this.#capacidad;
    }

    set capacidad(capacidad) {
      this.#capacidad = capacidad;
    }

    get destino() {
      return this.#destino;
    }

    set destino(destino) {
      this.#destino = destino;
    }

    get listaDePasajeros() {
      return this.#listaDePasajeros;
    }

    set listaDePasajeros(listaDePasajeros) {
      this.#listaDePasajeros = listaDePasajeros;
    }

    abordar(pasajero) {
      if (!(this.#listaDePasajeros.length >= this.#capacidad)) {
        this.listaPasajeros.push(pasajero);
        return `El pasajero ${pasajero} ha abordado el avión ${this.nombre}`;
      } else {
        return `Lo siento, no puede abordar a este avion, ya esta lleno`;
      }
    }
  }

	const aeropuerto = new Aeropuerto("Aeropuerto internacional");
	const avion1 = new Avion("Jay-Jay", 150, "Narnia");
	const avion2 = new Avion("Barón Rojo", 2, "Vaux-sur-Somme");
	const avion3 = new Avion("Concorde", 100, "Japón");

	aeropuerto.agregarAvion(avion1);
	aeropuerto.agregarAvion(avion2);
	aeropuerto.agregarAvion(avion3);

	const boton = articleEl.querySelector(".mostrar-datos");
	boton.addEventListener("click", (e) => {
		const resultado = articleEl.querySelector(".resultado");
		e.preventDefault();
		resultado.innerHTML += `${aeropuerto.buscarAvion("Jay-Jay")}`;
	});
	el.appendChild(articleEl);
}
