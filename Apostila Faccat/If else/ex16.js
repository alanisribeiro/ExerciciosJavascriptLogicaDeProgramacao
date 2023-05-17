function iguais(){
    let numero1=parseInt(prompt("Digite o 1º número"));
    let numero2=parseInt(prompt("Digite o 2º número"));

    if (numero1>numero2){
        alert("O 1º número é maior")
    } else if (numero2>numero1){
        alert("O 2º número é maior")
    } else{
        alert("Os números são iguais")
    }

}