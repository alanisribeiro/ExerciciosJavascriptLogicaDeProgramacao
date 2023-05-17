function crescente(){
    let numero1 = parseInt(prompt("Digite o 1º número:"));
    let numero2 = parseInt(prompt("Digite o 2º número:"));
    if (numero1<numero2){
        window.alert("Ordem crescente: "+numero1+" e "+ numero2)
    } else{
        window.alert("Ordem crescente: "+numero2+" e "+numero1)
    }
}