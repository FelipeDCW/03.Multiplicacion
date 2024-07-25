function multiplicacion() {

    let estado = true
    let numero = 0
    while (estado == true) {
        let numero = parseInt(prompt("Ingrese numero:"))
        console.log(numero)
        if (numero >= 1 && numero <= 20) {
            estado = false
            tablamultiplicar(numero)
            tablafactorial(numero)
        }
    }

}

function tablamultiplicar(numero) {
    for (let i = 1; i <= numero; i++) {
        console.log(`${i} X ${numero} = ${numero * i}`)
    }
}

function tablafactorial(numero) {
    let factorial = 1
    for (let i = 1; i <= numero; i++) {
        factorial = (i * (factorial))
        console.log(`Factorial de ${i} es: ${factorial}`)
    }

}

multiplicacion();