function tabuadaUmDez(){
    let contador=1
    let numero=parseInt(prompt("Digite um número e receba sua tabuada"))
    for (contador=1; contador<=10; contador++){
        console.log(numero+" x "+contador+" = "+ (numero*contador) )
    }
}