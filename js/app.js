//alert("Sitioweb");
console.log("La App funciona de acuerdo a los requerimientos");

console.log("Esta linea la agrego Jefferson Beltran") 

const divNombres = document.querySelector(".nombres")
let nombres = ["Mauricio Meza", "Nicolas Suarez", "Diego Mancilla", "Jefferson Beltran"]

nombres.forEach(nombre => {
    divNombres.append(document.createTextNode(nombre + "\n"))
})

