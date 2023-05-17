function time(){
    let time1=(prompt("Digite o nome do 1º time:"));
    let golstime1=parseInt(prompt("Digite a quantidade de gols que esse time fez:"));
    let time2=(prompt("Digite o nome do 2º time:"));
    let golstime2=parseInt(prompt("Digite a quantidade de gols que esse time fez:"));

    if (golstime1>golstime2){
        alert("O vencedor foi: "+time1)
    }
    else if (golstime1<golstime2){
        alert("O vencedor foi: "+time2)
    }
    else{
        alert("Empate!")
    }
}

