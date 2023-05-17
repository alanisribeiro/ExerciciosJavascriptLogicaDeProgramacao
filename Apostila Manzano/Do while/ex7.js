function maiorNumero(){
    let parar="não"
    do {
        let numero=parseInt(prompt("Digite o 1º número:"))
        let numero2=parseInt(prompt("Digite o 2º número"))
         parar=(prompt("Deseja finalizar o programa?"))
        if (numero>numero2) {
            console.log(numero+" é maior que "+ numero2) 
        }else{
        console.log(numero2+" é maior que "+ numero)
        }
        
    } while (parar=="não");
}