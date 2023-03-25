function ejercicio03(el) {
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
      <h2>Ejercicio 3</h2>
      <form class="form">
          <div>
              <label for="altura">Ingrese la altura del rectangulo en pixeles</label>
              <input class="altura" name="altura" type="text">
          </div>
          <div>
              <label for="base">Ingrese la base del rectangulo en pixeles</label>
              <input class="base" name="base" type="text">
          </div>
          <button>Crear rectangulo</button>
      </form>
      <div class="resultado">
        <div class="rectangulo"></div>
      </div>
      `;

      class Rectangulo {
        #base;
        #altura;
        constructor(base, altura){
            this.#altura = altura;
            this.#base = base;
        }

        get base(){
            return this.#base;
        }

        set base(nuevaBase){
            this.#base = nuevaBase;
        }

        get altura(){
            return this.#altura;
        }

        set altura(nuevaAltura){
            this.#altura = nuevaAltura;
        }

        calcularPerimetro(){
            return 2 * this.#altura + 2 * this.#base;
        }

        calcularArea(){
            return this.#altura * this.#base;
        }
    }

    function dibujarRectangulo(rectangulo){
        const style = document.createElement("style");
        style.innerHTML = `
         .rectangulo {
             width: ${rectangulo.base}px;
             height: ${rectangulo.altura}px;
              border: 2px blue solid;
            }
        `;
        articleEl.append(style);
    }

    const formEl = articleEl.querySelector(".form");
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const base = parseInt(articleEl.querySelector(".base").value);
      const altura = parseInt(articleEl.querySelector(".altura").value);
      const resultado = articleEl.querySelector(".resultado");
  
      if (!isNaN(base) && !isNaN(altura) && base >= 1 && altura >= 1) {
        const rectangulo = new Rectangulo(base, altura);
        dibujarRectangulo(rectangulo);

        const perimetro = `<p>El perimetro del rectangulo es de ${rectangulo.calcularPerimetro()} pixeles`;
        const area = `<p>El area del rectangulo es de ${rectangulo.calcularArea()} pixeles cuadrados`;

        resultado.innerHTML += perimetro;
        resultado.innerHTML += area;
        
      } else {
          resultado.textContent = "Debe ingresar numeros validos";
      }
    });
    el.appendChild(articleEl);
}