let carrito = [];
const cards = document.getElementById("cards");
const carritoCompra = document.getElementById("carrito");
const carritoBtn = document.getElementById("carritoBtn");
const vaciarCarrito = document.getElementById("vaciarBtn");
const comprarBtn = document.getElementById("comprarBtn");

productosMegasabrosos.forEach((e) => {
  const contenedor = document.createElement("div");
  contenedor.className = "text-center";

  contenedor.innerHTML = `
  <div class="mx-2">
  <img src="./img/hamburguesa.jpg" class="card-img-top" alt="card-grid-image">
  <div class="card-body">
    <h5 class="card-title">${e.nombre}</h5>
    <p class="card-text">${e.toppings}</p>
    <p class="card-text">$${e.precio}<p>
    </div>
  </div>
  </div>`;

  cards.append(contenedor);

  const addBtn = document.createElement("button");
  addBtn.innerText = "agregar";
  addBtn.className = "btn btn-dark m-2";

  contenedor.append(addBtn);

  addBtn.addEventListener("click", () => {
    carrito.push({
      id: e.id,
      nombre: e.nombre,
      precio: e.precio,
      toppings: e.toppings,
    });
  });
});

let verCarrito = () => {
  carritoCompra.innerHTML = "";
  carrito.forEach((e) => {
    const products = document.createElement("div");
    products.className = "p-5 bg-dark text-white rounded";
    products.innerHTML = `<h5>${e.nombre}</h5>
    <p>${e.toppings}</p>
    <p>$${e.precio}</p>`;

    carritoCompra.append(products);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Eliminar";
    deleteBtn.className = "btn btn-danger mb-2 deleteBtn";

    carritoCompra.append(deleteBtn);
  });

  let total = carrito.reduce((acc, e) => acc + e.precio, 0);
  const totalPrecio = document.createElement("div");
  totalPrecio.innerHTML = `<h3><span class="text-dark">Total: ${total}</span><h3>`;
  carritoCompra.append(totalPrecio);
};

carritoBtn.addEventListener("click", verCarrito);

document.getElementById("guardarDatos").addEventListener("click", function () {
  let nombre = document.querySelector("#nombre").value;
  let direccion = document.querySelector("#direccion").value;
  let telefono = document.querySelector("#telefono").value;
  let clave = document.querySelector("#clave").value;
  sessionStorage.setItem("nombre", nombre);
  sessionStorage.setItem("direccion", direccion);
  sessionStorage.setItem("telefono", telefono);
  sessionStorage.setItem("clave", clave);
});

let comprar = () => {
  let datosFinal = document.getElementById(`datosFinal`);
  let msgContainer = document.createElement(`div`);

  msgContainer.className = "bg-dark text-white rounded m-2 text-center";
  let buyMsg = document.createElement(`div`);
  buyMsg.innerHTML = `<p>Muchas gracias ${sessionStorage.getItem("nombre")}</p>
  <p>tu pedido con destino: ${sessionStorage.getItem(
    "direccion"
  )} esta siendo preparado.</p>
  <p>nos pondremos en contacto en la brevedad</p>`;

  msgContainer.append(buyMsg);

  datosFinal.append(msgContainer);
};

comprarBtn.addEventListener("click", comprar);

/*
 */
