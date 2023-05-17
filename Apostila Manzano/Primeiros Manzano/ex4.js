function distanciaLitros(){
    let velocidade=parseFloat(prompt("Digite a velocidade média em km/h:"));
    let tempo=parseFloat(prompt("Digite o tempo gasto em horas:"));
    let distancia
    let litrosusados
    distancia=tempo*velocidade
    litrosusados=distancia/12
    alert("A quantidade de litros de combustivel gasto foi: "+litrosusados)
    alert("A distâncoa percorrida foi de: "+distancia+ "KM")
}