function conversaoReal(){
    let cotacao = parseFloat(prompt("Digite o valor da atual cotação do dolar:"));
    let reais = parseFloat(prompt("Digite a quantidade de reais que você possui:"))
    let dolar
    dolar=reais/cotacao
    alert("O valor em dolar é: "+dolar.toFixed(2)+"$")
}