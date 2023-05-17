function tabuada(){
    let numero = parseInt(prompt("Digite um número e receba sua tabuada"))
    let contador=0
    let resultado


    while (contador<10) {
        contador++
        resultado=contador*numero
        console.log(+numero+" x "+contador+" = "+resultado)
        
    }
}