function potenciaBase(){
    let base = parseInt(prompt("Digite o valor da base da potência: "))
    let expoente = parseInt(prompt("Digite o valor do expoente da potência"))
    let resultado=1
    for(let contador=1; contador<=expoente; contador++){
        resultado=resultado*base
    }
    console.log(base+" elevado à "+ expoente+" = "+ resultado)
}