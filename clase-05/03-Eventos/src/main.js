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