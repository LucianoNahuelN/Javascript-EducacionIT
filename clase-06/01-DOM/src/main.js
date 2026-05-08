import './style.css'
console.log('Luciano')

//Manipulacion DOM
const coleccionH1 = document.getElementsByTagName('h1')
console.log(coleccionH1[0])

const etiquetaH1 = coleccionH1[0]
console.dir(etiquetaH1)
etiquetaH1.style.backgroundColor = 'darkred'
etiquetaH1.classList.add('textoGrande')
etiquetaH1.textContent = 'Manipulacion DOM'

//Eventos
const boton = document.querySelector('#btn')
// console.dir(boton)

// boton.onclick = function() {
//   console.log('Me hicieron click')
// }
boton.addEventListener('click', function(){
  console.log('me hicieron click')
})



const elementos = document.getElementsByClassName('texto-verde')
console.log(elementos)
const parrafo = elementos[0]
console.log(parrafo)

boton.addEventListener('click', () => {
  console.log('hicieron click sobre el boton')
  parrafo.style.backgroundColor = 'yellow'
})

const caja = document.querySelector('#caja')
console.log(caja)
caja.style.backgroundColor = 'red'
caja.style.height = '40px'

caja.addEventListener('mouseover', () => {
  caja.style.backgroundColor = 'blue'
})
caja.addEventListener('mouseleave', () => {
  caja.style.backgroundColor = 'red'
})

document.addEventListener('DOMContentLoaded', () => {
  console.log('funciona')
} )

console.log('Funciona??')

const startOld = () => {

  const producto1 = {
    nombre: 'PC',
    categoria: 'Electro',
    destacado: true,
    stock: 20,
    activo: true,
    precio: 2240
  }

  const producto2 = {
    nombre: 'Celular',
    categoria: 'Electro',
    destacado: true,
    stock: 10,
    activo: true,
    precio: 555
  }

  const producto3 = {
    nombre: 'Batidora',
    categoria: 'Electro',
    destacado: true,
    stock: 10,
    activo: true,
    precio: 325
  }

  const producto4 = {
    nombre: 'Auto',
    categoria: 'Transporte',
    destacado: true,
    stock: 15,
    activo: false,
    precio: 16000
  }
//                           0           1          2         3
  const arrayProductos = [producto1, producto2, producto3, producto4]

  console.log(arrayProductos)

  console.warn('--------------for')
  for (let i = 0; i < arrayProductos.length; i++) {
    console.log(i)
    console.log(arrayProductos[i].nombre)
  }
  console.warn('--------------foreach')
  arrayProductos.forEach((producto) => {
    console.log(producto.nombre)
  })
  console.warn('--------------forof')

  let template = ''

  for (const producto of arrayProductos) {
    // console.log(producto.nombre)

    template += `<article class="producto-card">
        <h2 class="nombre-producto">${producto.nombre}</h2>
        <p class="produto-categoria">Categoría: <span>${producto.categoria}</span></p>
        <p class="producto-precio">${producto.precio}</p>
  
        <p class="producto-stock">Stock disponible: ${producto.stock}</p>
        <p class="producto-status">${producto.activo ? 'Activo' : 'Inactivo'}</p>
    </article>`
    //debugger
    //console.log(template)
  }

  //console.log(template)
 
  const contentedorCards = document.querySelector('#contenedor-cards')
  console.log(contentedorCards)

  contentedorCards.innerHTML = template

}

const start = () => {

  const producto1 = {
    nombre: 'PC',
    categoria: 'Electro',
    destacado: true,
    stock: 20,
    activo: true,
    precio: 2240
  }

  const producto2 = {
    nombre: 'Celular',
    categoria: 'Electro',
    destacado: true,
    stock: 10,
    activo: true,
    precio: 555
  }

  const producto3 = {
    nombre: 'Batidora',
    categoria: 'Electro',
    destacado: true,
    stock: 10,
    activo: true,
    precio: 325
  }

  const producto4 = {
    nombre: 'Auto',
    categoria: 'Transporte',
    destacado: true,
    stock: 15,
    activo: false,
    precio: 16000
  }
//                           0           1          2         3
  const arrayProductos = [producto1, producto2, producto3, producto4]

  console.log(arrayProductos)

  console.warn('--------------for')
  for (let i = 0; i < arrayProductos.length; i++) {
    console.log(i)
    console.log(arrayProductos[i].nombre)
  }
  console.warn('--------------foreach')
  arrayProductos.forEach((producto) => {
    console.log(producto.nombre)
  })
  console.warn('--------------forof')

  let template = ''

  for (const producto of arrayProductos) {
    // console.log(producto.nombre)

    template += `<article class="producto-card">
        <h2 class="nombre-producto">${producto.nombre}</h2>
        <p class="produto-categoria">Categoría: <span>${producto.categoria}</span></p>
        <p class="producto-precio">${producto.precio}</p>
  
        <p class="producto-stock">Stock disponible: ${producto.stock}</p>
        <p class="producto-status">${producto.activo ? 'Activo' : 'Inactivo'}</p>
    </article>`
    //debugger
    //console.log(template)
  }

  //console.log(template)
 
  const contentedorCards = document.querySelector('#contenedor-cards')
  console.log(contentedorCards)

  contentedorCards.innerHTML = template

}

document.addEventListener('DOMContentLoaded', start)