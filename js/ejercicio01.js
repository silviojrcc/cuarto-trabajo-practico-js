function ejercicio01(el) {
  const articleEl = document.createElement("article");
  articleEl.innerHTML = `
    <h2>Ejercicio 1</h2>
    <form class="form">
        <div>
             <label for="color">Ingrese el color del auto</label>
             <input name="color" class="color" type="text">
        </div>
        <div>
             <label for="marca">Ingrese la marca del auto</label>
             <input name="marca" class="marca" type="text">
        </div>
        <div>
             <label for="modelo">Ingrese el modelo del auto</label>
             <input name="modelo" class="modelo" type="text">
        </div>
        <button>Crear auto</button>
    </form>
    <div class="resultado"></div>
    `;
  const resultado = articleEl.querySelector(".resultado");

  function crearAuto(color, marca, modelo) {
    const auto = {
      color: color,
      marca: marca,
      modelo: modelo,
      estaEncendido: false,

      encender: function () {
        this.estaPrendido = true;
      },

      apagar: function () {
        this.estaPrendido = false;
      },
    };
    return auto;
  }

  function generarResultado(auto) {
    return `
            <p>El auto creado es ${auto.color}, de la marca ${auto.marca} y modelo ${auto.modelo}</p>
            <p class="estado"></p>
            <button class="boton" data-estado="encender">Encender auto</button>
            <button class="boton" data-estado="apagar">Apagar auto</button>
        `;
  }

  function manejadorDeEventos(auto, resultado) {
    const botones = resultado.querySelectorAll(".boton");
    const resultadoEstado = resultado.querySelector(".estado");

    botones.forEach((boton) => {
      boton.addEventListener("click", () => {
        const estado = boton.getAttribute("data-estado");
        if (estado === "encender") {
          auto.encender();
          resultadoEstado.textContent = "El auto esta encendido";
        } else {
          auto.apagar();
          resultadoEstado.textContent = "El auto esta apagado";
        }
      });
    });
  }

  const formEl = articleEl.querySelector(".form");
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const color = articleEl.querySelector(".color").value;
    const marca = articleEl.querySelector(".marca").value;
    const modelo = articleEl.querySelector(".modelo").value;

    const verificarInputs = color != "" && marca != "" && modelo != "";

    if (verificarInputs) {
      const autoCreado = crearAuto(color, marca, modelo);

      resultado.innerHTML = generarResultado(autoCreado);

      manejadorDeEventos(autoCreado,resultado);
    } else {
      resultado.textContent = "Debe ingresar color, marca y modelo!";
    }
  });

  el.appendChild(articleEl);
}
