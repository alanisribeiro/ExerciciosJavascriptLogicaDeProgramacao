function fibonacci(){
    let anterior=1
    let posterior=1
    let contador=1
    let soma

    while (contador<=15) {
        console.log(anterior)
        soma=anterior+posterior
        anterior=posterior
        posterior=soma
        contador++
    }
}