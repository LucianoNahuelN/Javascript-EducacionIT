import './style.css'

const formu = document.querySelector('form')
console.dir(formu[0])
console.log(formu[0])
console.log(formu[0].name)

formu.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log('Se hizo click sobre el boton y se esta enviando el formulario')
  console.log(formu[0].name)
  console.log(formu[0].value)

  
  console.log(formu[1].name)
  console.log(formu[1].value)
  
  const nombreName = formu[0].name
  const nombreValue = formu[0].value
  const apellidoName = formu[1].name
  const apellidoValue = formu[1].value

  const datoValidado = {
    // [formu[0].name]: formu[0].value
    [nombreName]: nombreValue,
    [apellidoName]: apellidoValue,
  }
  console.log(datoValidado)
})

