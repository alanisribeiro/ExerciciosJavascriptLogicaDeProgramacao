function novoCalculo(){
    let continuar
    do {
        let nota1=parseInt(prompt("Digite a 1º nota:"))
        let nota2=parseInt(prompt("Digite a 2º nota:"))
        let media

        continuar=(prompt("Novo cálculo?"))
        if (continuar!="sim"){
            console.log("Cálculo finalizado")
        }
        media=(nota1+nota2)/2
        console.log("Média do aluno: "+media)
        
    } while (continuar=="sim");
}