function potenciaBase(){
    let potencia=1;
    let contador=1;

    let base=parseFloat(prompt("Digite o valor da base da potência:"));
    let expoente=parseFloat(prompt("Digite o valor do expoente da potência:"));

    while (contador<=expoente) {
        potencia=potencia*base
        contador++
    }
    alert(+base+" elevado à "+expoente+" = "+potencia)
}