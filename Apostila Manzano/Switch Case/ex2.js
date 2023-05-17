function mesAno() {

    let numero = parseInt(prompt("Digite o número correspondente ao mês:"))

    switch (numero) {
        case 1:
            alert("Janeiro")
            primeirosemestre();

            break;

        case 2:
            alert("Fevereiro")
            primeirosemestre();

            break;

        case 3:
            alert("Março")
            primeirosemestre();

            break;
        case 4:
            alert("Abril")
            primeirosemestre();

            break;
        case 5:
            alert("Maio")
            primeirosemestre();

            break;
        case 6:
            alert("Junho")
            primeirosemestre();

            break;
        case 7:
            alert("Julho")
            segundosemestre()

            break;
        case 8:
            alert("Agosto")
            segundosemestre()

            break;
        case 9:
            alert("Setembro")
            segundosemestre()

            break;
        case 10:
            alert("Outubro")
            segundosemestre()

            break;
        case 11:
            alert("Novembro")
            segundosemestre()

            break;
        case 12:
            alert("Dezembro")
            segundosemestre()
            break;



        default:
            alert("Não há correspondente")
            break;
    }
}
function primeirosemestre(){
    alert("Primeiro semestre")
}
function segundosemestre(){
    alert("Segundo semestre")
}