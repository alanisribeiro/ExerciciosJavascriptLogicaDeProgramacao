function somaPares(){
    let soma=0
    for(let contador=1; contador<=500; contador++){
        if (contador % 2 == 0){
            soma=soma+contador
            console.log(soma)
        }
    }
}