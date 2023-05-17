function lataOleo(){
    let raio=parseFloat(prompt("Digite o raio da lata:"));
    let altura=parseFloat(prompt("Digite a altura da lata:"));
    let volume;

    volume=Math.PI*raio**2*altura
    alert("O volume da lata é de: "+volume)


}