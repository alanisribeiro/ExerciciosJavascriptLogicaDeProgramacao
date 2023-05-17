function somaPares(){
    let contador=0
    let soma=0

    while (contador<=500) {
        contador++
        if (contador % 2 == 0){
            soma=soma+contador
        }
    }
    alert("A soma dos valores pares de 1 a 500 é: "+soma)
    
}
