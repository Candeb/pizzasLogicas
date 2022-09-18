// array

const pizzas = [
  {
    id: 1,
    nombre: 'fugazzeta',
    ingredientes: [
      'Harina sin tacc',
      'sal',
      'levadura',
      'queso mozzarella',
      'cebolla',
    ],
    precio: 650,
  },
  {
    id: 2,
    nombre: 'mozzarella',
    ingredientes: [
      'Harina sin tacc',
      'sal',
      'levadura',
      'salsa de tomate',
      'queso mozzarella',
      'aceitunas',
    ],
    precio: 500,
  },
  {
    id: 3,
    nombre: 'napolitana',
    ingredientes: [
      'Harina sin tacc',
      'sal',
      'levadura',
      'salsa de tomate',
      'queso mozzarella',
      'tomate',
      'aceitunas',
    ],
    precio: 550,
  },
  {
    id: 4,
    nombre: 'calabresa',
    ingredientes: [
      'Harina sin tacc',
      'sal',
      'levadura',
      'aceitunas',
      'salsa de tomate',
      'queso mozzarella',
      'longaniza calabresa',
    ],
    precio: 580,
  },
  {
    id: 5,
    nombre: 'cuatro quesos',
    ingredientes: [
      'Harina sin tacc',
      'sal',
      'levadura',
      'salsa de tomate',
      'queso mozzarella',
      'queso gorgonzola',
      'queso fontina',
      'queso parmesano',
    ],
    precio: 600,
  },
  {
    id: 6,
    nombre: 'especial',
    ingredientes: [
      'Harina sin tacc',
      'sal',
      'levadura',
      'salsa de tomate',
      'queso mozzarella',
      'jamón cocido',
      'aceitunas',
      'pimiento rojo',
    ],
    precio: 650,
  },
  {
    id: 7,
    nombre: 'hawaiana',
    ingredientes: [
      'Harina sin tacc',
      'sal',
      'levadura',
      'salsa de tomate',
      'queso mozzarella',
      'jamón cocido',
      'azúcar',
      'ananá',
    ],
    precio: 650,
  },
];

// DOM

const pizzaName = document.querySelector('.pizza-name');
const pizzaPrice = document.querySelector('.pizza-price');
const inputPizza = document.querySelector('.input-number');
const pizzaBtn = document.querySelector('.pizza-btn');
const divPizza = document.getElementById('title');
const divInput = document.getElementById('pizza');
const errorMsj = document.getElementById('msjerror');

// localStorage

localStorage.setItem('pizzas', JSON.stringify(pizzas));

// funciones

const resetear = (input) => {
  input.value = '';
};

const mostrarError = (input, mensaje) => {
  input.classList.remove('exito');
  input.classList.add('error');
  const errorMsj = document.getElementById('msjerror');
  errorMsj.textContent = mensaje;
};

const mostrarExito = (input) => {
  input.classList.remove('error');
  input.classList.add('exito');
  const errorMsj = document.getElementById('msjerror');
  errorMsj.textContent = '';
};

const setImgPizza = (id) => {
  return id === 1
    ? 'assets/fugazzeta.png'
    : id === 2
    ? 'assets/muzarella.png'
    : id === 3
    ? 'assets/napolitana.png'
    : id === 4
    ? 'assets/calabresa.png'
    : id === 5
    ? 'assets/cuatro-quesos.png'
    : id === 6
    ? 'assets/especial.png'
    : 'assets/hawaiana.png';
};

const pintarCard = (pizza) => {
  const { id, nombre, ingredientes, precio } = pizza;
  return `
        <div class="type-pizza">
          <h2 class="pizza-name">${nombre}</h2>
          <img src=${setImgPizza(id)} alt="Imagen de pizza ${nombre}" />
        </div>

        <div class="description">
          <p class="ingredients">${ingredientes.join(', ')}</p>
          <h4 class="pizza-price">$${precio}</h4>
        </div>
  `;
};

const buscarPizza = () => {
  const numeroPizza = +inputPizza.value.trim();
  if (numeroPizza > 0 && numeroPizza <= pizzas.length) {
    let pizzaElegida = pizzas.find((pizza) => pizza.id === numeroPizza);
    divPizza.innerHTML = pintarCard(pizzaElegida);
    // pizzaName.innerHTML = pizzaElegida.nombre;
    // pizzaPrice.innerHTML = '$' + pizzaElegida.precio;
    // divPizza.classList.add('pizza-card');
    inputPizza.classList.remove('error');
    inputPizza.classList.add('exito');
  } else {
    mostrarError(
      inputPizza,
      'Lo sentimos, no tenemos pizzas con ese número. Intenta con uno del 1 al ' +
        pizzas.length
    );
    divPizza.innerHTML = '';
  }
  resetear(inputPizza);
};

const chequeoInput = () => {
  const numeroPizza = +inputPizza.value.trim();
  if (!numeroPizza) {
    mostrarError(inputPizza, 'Debe ingresar un número');
    divPizza.innerHTML = '';
  } else {
    mostrarExito(inputPizza);
    buscarPizza();
  }
};
const init = () => {
  pizzaBtn.addEventListener('click', chequeoInput);
};

init();
