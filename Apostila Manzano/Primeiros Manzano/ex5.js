function prestacao(){
    let prestacaoInicial=parseFloat(prompt("Digite o valor da prestação:"));
    let taxa=parseFloat(prompt("Digite o valor da taxa:"));
    let tempoAtraso=parseFloat(prompt("Digite os dias de atraso do pagamento:"));
    let prestacao;
    prestacao=prestacaoInicial+(prestacaoInicial*taxa/100)*tempoAtraso
    alert("O valor da prestação em atraso é: "+prestacao)
    
}