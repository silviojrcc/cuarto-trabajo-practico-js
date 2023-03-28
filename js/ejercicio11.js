let listaProductos = [
  {
    nombreProducto: "Hidratante facial",
    precio: 3500,
    categoria: "Hidratante",
  },
  { nombreProducto: "Tonico exfoliante", precio: 2350.45, categoria: "Tonico" },
  {
    nombreProducto: "Protector solar factor 50",
    precio: 3300,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Protector solar toque seco factor 50",
    precio: 4100,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Protector solar con color factor 50",
    precio: 3850.5,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Gel de limpieza facial",
    precio: 1740.99,
    categoria: "Limpieza",
  },
  { nombreProducto: "Tonico hidratante", precio: 1250.99, categoria: "Tonico" },
  { nombreProducto: "Sérum hidratante", precio: 4250.99, categoria: "Sérum" },
  {
    nombreProducto: "Exfoliante de azúcar cherry",
    precio: 1200,
    categoria: "Labios",
  },
  {
    nombreProducto: "Pads de hidrogel para contorno de ojos",
    precio: 2800,
    categoria: "Ojos",
  },
  {
    nombreProducto: "Mascarilla facial",
    precio: 3250.99,
    categoria: "Mascaras",
  },
  { nombreProducto: "Sérum facial con PHA", precio: 3200, categoria: "Sérum" },
  { nombreProducto: "Bálsamo labial", precio: 3200, categoria: "Labios" },
  { nombreProducto: "Crema contorno de ojos", precio: 3200, categoria: "Ojos" },
  {
    nombreProducto: "Protector solar en barra",
    precio: 3800,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Mascara de hidratación y reparación",
    precio: 1200,
    categoria: "Mascaras",
  },
  { nombreProducto: "Agua micellar", precio: 2890, categoria: "Limpieza" },
];

function ejercicio11(el) {
  const articleEl = document.createElement("article");
  articleEl.innerHTML = `
    <h2>Ejercicio 11 - Arreglo de productos</h2>
    <button class="mostrar-lista-completa">Mostrar lista completa</button>
    <button class="filtrar-protectores">Mostrar filtrada por protectores</button>
    <button class="buscar-serum">Buscar Sérum</button>
    <button class="buscar-bruma">Buscar Bruma</button>
    <p class="resultado"></p>
  `;

	const resultado = articleEl.querySelector(".resultado");

	const botonListaCompleta = articleEl.querySelector(".mostrar-lista-completa");
	botonListaCompleta.addEventListener("click", (e) => {
		e.preventDefault();
		resultado.innerHTML = "";
		listaProductos.forEach(producto => {
			resultado.innerHTML += `Nombre: ${producto.nombreProducto}, precio: ${producto.precio}, categoría ${producto.categoria}<br>`;
		});
	});

	const botonListaFiltradaProtectores = articleEl.querySelector(".filtrar-protectores");
	botonListaFiltradaProtectores.addEventListener("click", (e) => {
		e.preventDefault();
		resultado.innerHTML = "";
		const nuevaLista = listaProductos.filter((producto) => producto.nombreProducto.toLocaleLowerCase().includes("protector solar"));

		nuevaLista.forEach(producto => {
			resultado.innerHTML += `Nombre: ${producto.nombreProducto}, precio: ${producto.precio}, categoría ${producto.categoria}<br>`;
		});
	});

	const botonBuscarSerum = articleEl.querySelector(".buscar-serum");
	botonBuscarSerum.addEventListener("click", (e) => {
		e.preventDefault();
		resultado.innerHTML = "";
		const productoEncontrado = listaProductos.find((producto) => producto.nombreProducto.toLocaleLowerCase().includes("sérum"));

		resultado.innerHTML = `Nombre: ${productoEncontrado.nombreProducto}, precio: ${productoEncontrado.precio}, categoría ${productoEncontrado.categoria}<br>`;
	});

	const buscarBruma = articleEl.querySelector(".buscar-bruma");
	buscarBruma.addEventListener("click", (e) => {
		e.preventDefault();
		resultado.innerHTML = "";
		const productoEncontrado = listaProductos.find((producto) => producto.nombreProducto.toLocaleLowerCase().includes("bruma"));
		if (productoEncontrado) {
			resultado.innerHTML = `Nombre: ${productoEncontrado.nombreProducto}, precio: ${productoEncontrado.precio}, categoría ${productoEncontrado.categoria}<br>`;
		} else {
			resultado.innerHTML = "No se encontro ningun producto Bruma";
		}
	});

	el.appendChild(articleEl);
}
