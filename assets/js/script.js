/* 1.- Solicitar numero por pantalla
2.- Validar si el numero esta en el rango solicitado
3.- Realizar ciclo multiplicando hasta el numero ingresado
4.- Realizar ciclo con el factorial
5.- Mostrar todo en pantalla
*/

let estado=true
let numero =0
let factorial = 1
while (estado == true){
    let numero = parseInt(prompt("Ingrese numero:"))
    console.log(numero)
    if (numero >= 1 && numero <= 20) {
        estado = false
        for (let i = 1; i <= numero; i++) {
            console.log(`${i} X ${numero} = ${numero * i}`)
        }
        for (let i = 1; i <= numero; i++) {
            factorial = (i * (factorial))
            console.log(`Factorial de ${i} es: ${factorial}`)
        }
    }
}


