let data = new Date();
let diaDoMes = data.getDate();
let mes = data.getMonth();
let ano = data.getUTCFullYear();
let diaDaSemana = new Date(ano, mes, 1).getDay();

document.querySelector('.appCalendar').style.background = 'cornflowerblue'
let mudancaDeMes = document.querySelector('#fifth');


if (ano % 4 === 0 && (!(ano % 100 === 0) || ano % 400 === 0)) {
    mudancaDeMes.innerHTML = '<td id="29">29</td>';
}

switch (mes){
    case 1:
        mudancaDeMes.innerHTML = ' ';
        
        break;
    case 3:
    case 5:
    case 8:
    case 10:
        //console.log(mes);
        mudancaDeMes.lastChild.remove()
        mudancaDeMes.removeChild(mudancaDeMes.lastChild);
        break;
    default:
        break;
}

document.getElementById(diaDoMes).style.background = 'red';

