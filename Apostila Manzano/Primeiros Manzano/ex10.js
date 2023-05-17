function conversaoDolar(){
    let cotacao = parseFloat(prompt("Digite a atual cotação do dolar:"));
    let dolar = parseFloat(prompt("Digite quantos doláres você possui:"));
    let reais
    reais=dolar*cotacao
    alert("O valor convertido para real é: "+reais+"R$")
}