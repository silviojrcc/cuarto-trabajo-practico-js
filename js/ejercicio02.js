function ejercicio02(el){
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
      <h2>Ejercicio 2</h2>
      <form class="form-extracciones">
        <h3>Extracciones</h3>
          <div>
              <label for="cantidad-extraccion">Ingrese el monto a extraer</label>
              <input class="cantidad-extraccion" name="cantidad-extraccion" type="text">
          </div>
          <button>Extraer dinero</button>
      </form>
      <form class="form-ingresos">
        <h3>Ingresos</h3>
          <div>
              <label for="cantidad-ingreso">Ingrese el monto a ingresar</label>
              <input class="cantidad-ingreso" name="cantidad-ingreso" type="text">
          </div>
          <button>Ingresar dinero</button>
      </form>
      <button class="consultar-estado">Consultar estado de la cuenta</button>
      <p class="resultado"></p>
      `;

    class Cuenta {
        #titular;
        #saldo;
        constructor(titular, saldo = 0){
            this.#titular = titular;
            this.#saldo = saldo;
        }

        get titular(){
            return this.#titular;
        }

        set titular(nuevoTitular){
            this.#titular = nuevoTitular;
        }

        get saldo(){
            return this.#saldo;
        }

        set saldo(nuevoSaldo){
            this.#saldo = nuevoSaldo;
        }

        ingresar(cantidad){
            if (cantidad > 1) {
               this.#saldo += cantidad;
               return `Se ingreso la cantidad de $${cantidad} correctamente`;
            } else {
                return "Debe ingresar un número válido!";
            }
        }

        extraer(cantidad){
            if (cantidad < 0) {
                return `Debe ingresar un número válido!`;
            }
            if (cantidad <= this.#saldo) {
                this.#saldo -= cantidad;
                return `Se extrajo la cantidad de $${cantidad} correctamente`;
            } else {
                return `No tiene saldo suficiente para realizar esta operación`;
            }
        }

        informar(){
            return `El titular de la cuenta es ${this.titular} y su saldo actual es de ${this.#saldo}`;
        }
    }

    const cuentaAlex = new Cuenta("Alex", 0);
    const resultado = articleEl.querySelector(".resultado");

    const formExtracciones = articleEl.querySelector(".form-extracciones");
    formExtracciones.addEventListener("submit", (e) => {
        e.preventDefault();

        const cantidadExtraccion = parseFloat(articleEl.querySelector(".cantidad-extraccion").value);
        if (!isNaN(cantidadExtraccion)) {
            resultado.textContent = cuentaAlex.extraer(cantidadExtraccion);
        } else {
            resultado.textContent = "Debe ingresar un número!";
        }
    });

    const formIngresos = articleEl.querySelector(".form-ingresos");
    formIngresos.addEventListener("submit", (e) => {
        e.preventDefault();

        const cantidadIngreso = parseFloat(articleEl.querySelector(".cantidad-ingreso").value);
        if (!isNaN(cantidadIngreso)) {
            resultado.textContent = cuentaAlex.ingresar(cantidadIngreso);
        } else {
            resultado.textContent = "Debe ingresar un número!";
        }
    });

    const consultarEstadoBoton = articleEl.querySelector(".consultar-estado");
    consultarEstadoBoton.addEventListener("click", (e) => {
        e.preventDefault();
        resultado.textContent = cuentaAlex.informar();
    });

    el.appendChild(articleEl);
}