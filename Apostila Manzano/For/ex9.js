function fibonacciPara(){
    let contador=1
    let numero1=1
    let numero2=1

    for(contador=1; contador<=15; contador++){
        console.log(numero1)
        soma=numero1+numero2
        numero1=numero2
        numero2=soma
    }
}