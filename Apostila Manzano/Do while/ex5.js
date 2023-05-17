function leituraSucessiva(){
    let contador=0
    let media=0
    let soma=0
    let mediaFinal=0
    let numero
    do {
        numero=parseInt(prompt("Digite um número positivo (Negativo para parar)"))
        contador++
        media=media+numero
        soma=soma+numero 
    } while (numero>0);
    mediaFinal=media/(contador-1)
    console.log("Foram digitados "+ (contador-1)+ " numeros")
    console.log("A média dos números digitados é: "+mediaFinal)
    console.log("O somatório dos números digitados é: "+soma)
}