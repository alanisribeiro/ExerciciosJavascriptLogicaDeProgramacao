function adicaoMultiplicacao(){
    let numero1=parseInt(prompt("Digite o 1º número"))
    let numero2=parseInt(prompt("Digite o 2º número"))
    let numero3=parseInt(prompt("Digite o 3º número"))
    let numero4=parseInt(prompt("Digite o 4º número"))

    let UmMaisDois=numero1+numero2
    let UmMaisTres=numero1+numero3
    let UmMaisQuatro=numero1+numero4
    let DoisMaisTres=numero2+numero3
    let DoisMaisQuatro=numero2+numero4
    let TresMaisQuatro=numero3+numero4

    let UmxDois=numero1*numero2
    let UmxTres=numero1*numero3
    let UmxQuatro=numero1*numero4
    let DoisxTres=numero2*numero3
    let DoisxQuatro=numero2*numero4
    let TresxQuatro=numero3*numero4

    console.log(+numero1+ " + "+numero2+" = "+UmMaisDois)
    console.log(+numero1+ " + "+numero3+" = "+UmMaisTres)
    console.log(+numero1+ " + "+numero4+" = "+UmMaisQuatro)
    console.log(+numero2+ " + "+numero3+" = "+DoisMaisTres)
    console.log(+numero2+ " + "+numero4+" = "+DoisMaisQuatro)
    console.log(+numero3+ " + "+numero4+" = "+TresMaisQuatro)

    console.log(+numero1+ " x "+numero2+" = "+UmxDois)
    console.log(+numero1+ " x "+numero3+" = "+UmxTres)
    console.log(+numero1+ " x "+numero4+" = "+UmxQuatro)
    console.log(+numero2+ " x "+numero3+" = "+DoisxTres)
    console.log(+numero2+ " x "+numero4+" = "+DoisxQuatro)
    console.log(+numero3+ " x "+numero4+" = "+TresxQuatro)
 
}