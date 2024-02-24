//alert("Sitioweb");
console.log("La app funciona de acuerdo a los ");

const divNombres = document.querySelector(".nombres")
let nombres = ["Mauricio Meza", "Nicolas Suarez", "Diego Mancilla", "Jefferson Beltran"]

nombres.forEach(nombre => {
    divNombres.append(document.createTextNode(nombre + "\n"))
})