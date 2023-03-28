function ejercicio07(el){
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
      <h2>Ejercicio 7</h2>
      <p class="resultado"></p>
      <form class="form-aniadir-contacto">
          <div>
              <label for="nombre">Ingrese el nombre del contacto</label>
              <input class="nombre" name="nombre" type="text">
          </div>
          <div>
              <label for="telefono">Ingrese el telefono</label>
              <input class="telefono" name="telefono" type="text">
          </div>
          <button>Agregar contacto</button>
      </form>

      <form class="form-existe-contacto">
          <div>
              <label for="existe-contacto">Ingrese el nombre del contacto que desea saber si existe</label>
              <input class="existe-contacto" name="existe-contacto" type="text">
          </div>
          <button>Existe contacto?</button>
      </form>

      <form class="form-buscar-contacto">
          <div>
              <label for="buscar-contacto">Ingrese el nombre del contacto que desea buscar</label>
              <input class="buscar-contacto" name="buscar-contacto" type="text">
          </div>
          <button>Buscar contacto</button>
      </form>

      <form class="form-eliminar-contacto">
          <div>
              <label for="eliminar-contacto">Ingrese el nombre del contacto que desea eliminar</label>
              <input class="eliminar-contacto" name="eliminar-contacto" type="text">
          </div>
          <button>Eliminar contacto</button>
      </form>

      <button class="listar-contactos">Listar contactos</button>
      <button class="huecos-libres">Cuantos espacios quedan?</button>
      `;

    class Contacto {
        #nombre;
        #telefono;
        constructor(nombre, telefono){
            this.#nombre = nombre;
            this.#telefono = telefono;
        }

        get nombre(){
            return this.#nombre;
        }

        set nombre(nombre){
            this.#nombre = nombre;
        }

        get telefono(){
            return this.#telefono;
        }

        set telefono(telefono){
            this.#telefono = telefono;
        }
    }

    class Agenda {
        #contactos;
        #tamanio;
        constructor(tamanio = 10){
            this.#contactos = [];
            this.#tamanio = tamanio;
        }

        get contactos(){
            return this.#contactos;
        }

        set contactos(contactos){
            if (Array.isArray(contactos)) {
                this.#contactos = contactos;
                return `Los contactos se guardaron correctamente`;
            } else {
                return `La lista de contactos debe ser un array!`; 
            }
        }

        get tamanio(){
            return this.#tamanio;
        }

        set tamanio(tamanio){
            if (tamanio >= 1) {
                this.#tamanio = tamanio;
                return `El tamaño se modificó correctamente`;
            } else {
                return `Debes ingresar un tamaño válido`;
            }
        }

        aniadirContacto(contacto){
            if (!this.agendaLlena()) {
                const contactoEncontrado = this.#contactos.find(c => c.nombre === contacto.nombre);
                if (!contactoEncontrado) {
                    this.#contactos.push(contacto);
                    return `El contacto se agrego correctamente`;
                } else {
                    return `El contacto ${contacto.nombre} ya se encontraba agendado, no puede volver a añadirse`;
                }
            } else {
                return `La agenda ya esta llena, no se pudo agregar contacto`;
            }
        }

        existeContacto(nombre){
            const contactoEncontrado = this.#contactos.find(c => c.nombre === nombre);
            if (contactoEncontrado) {
                return `El contacto ${nombre} ya se encontraba en la agenda`;
            } else {
                return `El contacto ${nombre} no se encontraba en la agenda`;
            }
        }

        listarContactos(){
            if (!(this.#contactos.length < 1)) {
                let texto = "";
                this.#contactos.forEach((c) => {
                    texto += `Nombre: ${c.nombre} telefono: ${c.telefono}<br>`;
                });
                return texto;
            }
            return `No hay ningún contacto en la agenda`;
        }

        buscarContacto(nombre){
            const contactoEncontrado = this.#contactos.find(c => c.nombre === nombre);
            if (contactoEncontrado) {
                return `Contacto: ${contactoEncontrado.nombre} Telefono: ${contactoEncontrado.telefono}`;
            }
            return `No se encontró el contacto con nombre ${nombre}`;
        }

        agendaLlena(){
            return this.#tamanio == this.#contactos.length;
        }

        huecosLibres(){
            if (!this.agendaLlena()) {
                return `A la agenda le quedan ${this.#tamanio - this.#contactos.length} espacios libres`;
            } else {
                return `A la agenda no le quedan espacios libres`;
            }
        }

        eliminarContacto(contacto){
            const indiceContactoEncontrado = this.#contactos.findIndex((c) => c.nombre == contacto);
            if (indiceContactoEncontrado !== -1) {
                this.contactos.splice(indiceContactoEncontrado, 1);
                return `El contacto ${contacto} se ha borrado de manera satisfactoria`;
            }
            return `El contacto no se encontraba en la agenda`;
        }

    }
    const agenda = new Agenda();
    
    const resultado = articleEl.querySelector(".resultado");

    const formAniadirContacto = articleEl.querySelector(".form-aniadir-contacto");
    formAniadirContacto.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = articleEl.querySelector(".nombre").value;
        const telefono = articleEl.querySelector(".telefono").value;

        if (nombre != "" && telefono != "") {
            const contacto = new Contacto(nombre, telefono);
            resultado.innerHTML = `${agenda.aniadirContacto(contacto)}`;
        } else {
            resultado.innerHTML = `Debe completar los campos`;
        }
    });

    const formExisteContacto = articleEl.querySelector(".form-existe-contacto");
    formExisteContacto.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = articleEl.querySelector(".existe-contacto").value;

        if (nombre != "") {
            resultado.innerHTML = `${agenda.existeContacto(nombre)}`;
        } else {
            resultado.innerHTML = `Debe ingresar un nombre!`;
        }
    });

    const formBuscarContacto = articleEl.querySelector(".form-buscar-contacto");
    formBuscarContacto.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = articleEl.querySelector(".buscar-contacto").value;

        if (nombre != "") {
            resultado.innerHTML = `${agenda.buscarContacto(nombre)}`;
            console.log(nombre);
        } else {
            resultado.innerHTML = `Debe ingresar un nombre!`;
        }
    });

    const formEliminarContacto = articleEl.querySelector(".form-eliminar-contacto");
    formEliminarContacto.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = articleEl.querySelector(".eliminar-contacto").value;

        if (nombre != "") {
            resultado.innerHTML = `${agenda.eliminarContacto(nombre)}`;
            console.log(nombre);
        } else {
            resultado.innerHTML = `Debe ingresar un nombre!`;
        }
    });

    const botonListarContactos = articleEl.querySelector(".listar-contactos");
    botonListarContactos.addEventListener("click", (e) => {
        e.preventDefault();
        resultado.innerHTML = `${agenda.listarContactos()}`;
    });

    const botonHuecosLibres = articleEl.querySelector(".huecos-libres");
    botonHuecosLibres.addEventListener("click", (e) => {
        e.preventDefault();
        resultado.innerHTML = `${agenda.huecosLibres()}`;
    });
    el.appendChild(articleEl);
}