function somaPares(){
    let contador=1
    let soma=0
    do {
        if (contador % 2 ==0){
            soma=soma+contador
            console.log("A soma entre: "+contador+ " e os seus antecessores pares é: " +soma)
        }
        contador++
        
    } while (contador<=500);
}