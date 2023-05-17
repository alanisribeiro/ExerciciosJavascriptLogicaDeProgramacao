function tabuleiroXadrez(){
    let quadro=1
    let soma=quadro
    let grao=2
    let contador=0

    do {
        contador++
        grao=grao*2
        quadro++
        soma=soma+grao  
    } while (contador<64);
    console.log("Somatório: "+soma)
}