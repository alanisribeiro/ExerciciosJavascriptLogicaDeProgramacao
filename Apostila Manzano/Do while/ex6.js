function areaResidencia(){
    let area=0
    let soma=0
    let parar="sim"
    do {
        let nome = (prompt("Digite o nome do cômodo que deseja calcular a área:"))
        let largura = parseFloat(prompt("Digite o valor da largura do cômodo:"))
        let comprimento = parseFloat(prompt("Digite o valor do comprimento do cômodo:"))

        area=comprimento*largura
        console.log("A área do(a) "+nome+" é "+ area)
        parar = (prompt("Deseja calcular novo cômodo?"))
        soma=soma+area
        
    } while (parar=="sim");
    console.log("O somatório das áreas calculadas é: "+soma)
}