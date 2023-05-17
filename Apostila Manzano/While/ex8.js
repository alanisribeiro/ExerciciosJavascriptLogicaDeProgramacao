function dezValores(){
    let contador=0
    let soma=0
    let media=0
    
    while (contador<10) {
        let numero=parseFloat(prompt("Digite um número:"))
        soma=soma+numero
        contador++
    }
    media=soma/10
    console.log("Soma: "+soma)
    console.log("Média aritmética: "+media)
}