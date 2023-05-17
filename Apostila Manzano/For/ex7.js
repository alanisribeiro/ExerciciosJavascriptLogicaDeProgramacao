function potenciaTres() {
    let resultado = 0
    for (let contador = 0; contador <= 15; contador++) {
        resultado = resultado * 3;
        if (resultado == 0) {
            resultado = resultado + 1
        }
        console.log("3 elevado a " + contador + " = " + resultado)
    }


}
