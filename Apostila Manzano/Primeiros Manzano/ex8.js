function caixaRetangular(){
    let comprimento = parseFloat(prompt("Digite o comprimento da caixa:"));
    let altura = parseFloat(prompt("Digite a altura da caixa:"));
    let largura = parseFloat(prompt("Digite a largura da caixa:"));
    let volume;
    volume=comprimento*altura*largura
    alert("O volume da caixa retângular é: "+volume)
}