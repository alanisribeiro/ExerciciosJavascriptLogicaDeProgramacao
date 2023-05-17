function positivoNegativo() {
    let numero = parseInt(prompt("Digite um número:"));
    if (numero > 0) {
        alert("O número digitado é positivo")
    } else if (numero<0){
        alert("O valor digitado é negativo")
    } else{
        alert("O número digitado é neutro")
    }
}