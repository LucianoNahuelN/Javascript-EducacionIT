import './style.css'

console.log('hola')


//SWITCH
// let diaSemana = 'sabado'
// diaSemana = diaSemana.toLowerCase()

// switch (diaSemana) {
//     case 'lunes':
//     case 'martes':
//     case 'miercoles':
//     case 'jueves':
//     case 'viernes':
//         console.log(`El ${diaSemana} es un día de la semana`)
//         break;
//     case 'sabado':
//     case 'domingo':
//         console.log(`El ${diaSemana} es día de fin de semana`)
//         break
//     default:
//         console.log('No es un día de la semana válido')
//         break;
// }

//FOREACH
// let nombres = ['Arnold','Gregorio','Melina','Kevin','Kiara']
// nombres.forEach(function(nombre, indice, array) {
//     console.log(nombre)
//     console.log(indice)
//     console.log(array)
// });

// const personas = [
// {
// nombre: "Juan",
// apellido: "Pérez",
// edad: 28,
// altura: 1.75
// },
// {
// nombre: "María",
// apellido: "Gómez",
// edad: 34,
// altura: 1.62
// },
// {
// nombre: "Carlos",
// apellido: "López",
// edad: 22,
// altura: 1.80
// },
// {
// nombre: "Ana",
// apellido: "Martínez",
// edad: 30,
// altura: 1.68
// }
// ];

// personas.forEach(function(persona){
//     console.log(persona)
//     for(const clave in persona){
//         //console.log(persona[clave])
//         console.log(`${clave}: ${persona[clave]}`)
//     }
// })

//WHILE
// let color = 'verde'
//     while (color != 'rojo'){
//         color = prompt('escribi un color(rojo para salir)')
//         console.log(color)
//     }
//     console.error('fin del programa)')

// DO WHILE
//debugger
let h = 0
let corte = 5
do{
    console.log(h)
    h++
}while(h <= corte)