const items = [
  { id: 1, src: "img/galery/1.jpg", title: "imagen 1", type: "branding" },
  { id: 2, src: "img/galery/2.jpg", title: "imagen 2", type: "branding" },
  { id: 3, src: "img/galery/3.jpg", title: "imagen 3", type: "branding" },
  { id: 4, src: "img/galery/4.jpg", title: "imagen 4", type: "photograpy" },
  { id: 5, src: "img/galery/5.jpg", title: "imagen 5", type: "photograpy" },
  { id: 6, src: "img/galery/6.jpg", title: "imagen 6", type: "photograpy" },
  { id: 7, src: "img/galery/7.jpg", title: "imagen 7", type: "web" },
  { id: 8, src: "img/galery/8.jpg", title: "imagen 8", type: "web" },
  { id: 9, src: "img/galery/9.jpg", title: "imagen 9", type: "web" },
  { id: 9, src: "img/galery/10.jpg", title: "imagen 10", type: "app" },
  { id: 9, src: "img/galery/11.jpg", title: "imagen 11", type: "app" },
];

function renderizarItems(items, limite = 9) {
  let contenido = "";
  const portafolio = document.getElementById("portafolio");

  for (let i = 0; i < limite; i++) {
    contenido =
      contenido +
      `<div class="portafolio-item" id="portafolio-item">
      <img src=${items[i].src} alt="" class="portafolio-img" />
      <h2 class="portafolio-title">${items[i].title}</h2>
    </div>`;
  }
  portafolio.innerHTML = contenido;
}

function filter(tipo) {
  let itemsFiltered = items.filter((item) => item.type === tipo);
  renderizarItems(itemsFiltered, itemsFiltered.length);
}

function getAll() {
  renderizarItems(items);
}

function verMas() {
  renderizarItems(items, items.length);
}
function buscar(e) {
  const error = document.getElementById("error");
  const portafolio = document.getElementById("portafolio");
  let filtro = e.srcElement.value;
  let itemsBusqueda = items.filter((item) => item.type === filtro);
  if (itemsBusqueda.length > 0) {
      error.innerHTML = ''
    renderizarItems(itemsBusqueda, itemsBusqueda.length);
  } else {
    let mensaje = `
      <h2>No se encontraron resultado para su busqueda</h2>`;
    portafolio.innerHTML = "";
    error.innerHTML = mensaje;
  }
  if (filtro.length === 0) {
    error.innerHTML = "";
    getAll();
  }
}
this.renderizarItems(items);
