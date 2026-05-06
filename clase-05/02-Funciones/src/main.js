import './style.css'
console.log('Luciano')
console.log('Maxi')
console.log('Ailen')
console.log('Rodrigo')
console.log('Carolina')
console.log('Aaron')

function mostrarNombre(nombreAImprimir) {
  console.log(nombreAImprimir)
}

mostrarNombre('Gregorio')
mostrarNombre('Judith')
mostrarNombre('Melina')

const bienvenida = function(nombreADarLaBienvenida){
  console.log(`Bienvenido ${nombreADarLaBienvenida}`)
}

bienvenida('Pedro')
bienvenida('Juan')
bienvenida('Diego')

;(function(){
  console.log('funcion anonima')
})()

const noAnonima = () => {
  console.log('funcion no anonima')
}
noAnonima()
