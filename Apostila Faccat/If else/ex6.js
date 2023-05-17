function maior(){
    let numero1 = parseInt(prompt("Digite o 1º número:"));
    let numero2 = parseInt(prompt("Digite o 2º número:"));
    if (numero1>numero2){
        window.alert(numero1+" é maior que "+ numero2)
    } else{
        window.alert(numero2+" é maior que "+ numero1)
    }
}