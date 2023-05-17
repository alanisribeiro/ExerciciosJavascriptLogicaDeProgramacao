function paresCinquentaSetenta(){
    let contador=50
    let par=0
    let par2=0
    let media=0

    while (contador<=70) {
        if (contador % 2 == 0){
            par=contador+par
            par2=contador
            console.log("Os números pares são: "+par2)
        }
        contador++
    }
    media=par/10
    console.log("A média aritmética é: "+media)

}