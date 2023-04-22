const diaNascimento = document.querySelector('#diaNascimento');
const mesNascimento = document.querySelector('#mesNascimento');
const anoNascimento = document.querySelector('#anoNascimento');
const botaoSubmit = document.querySelector('#botaoSubmit');

const diaCalcular = 06;
const mesCalcular = 02;
const anoCalcular = 1890;
let diasDiferenca;
let mesesDiferenca;
let anosDiferenca;
const diferenca = document.querySelector('.diferenca');

botaoSubmit.addEventListener('click', (e) => {e.preventDefault()
    const valorDia = diaNascimento.value;
    const valorMes = mesNascimento.value;
    const valorAno = anoNascimento.value;

    if (valorAno > anoCalcular){
        anosDiferenca = valorAno - anoCalcular;
    }
    else if(valorAno == anoCalcular){
        anosDiferenca = 'null';
    }
    else{
        mesesDiferenca = anoCalcular - valorAno;
    }

    if (valorMes > mesCalcular){
        mesesDiferenca = valorMes - mesCalcular;
    }
    else if(valorMes == mesCalcular){
        mesesDiferenca = 'null';
    }
    else{
        mesesDiferenca = mesCalcular - valorMes;
    }
    
    if (valorDia > diaCalcular){
        diasDiferenca = valorDia - diaCalcular;
    }
    else if(valorDia == diaCalcular){
        diasDiferenca = 'null';
    }
    else{
        diasDiferenca = diaCalcular - valorDia;
    }
        
    const p = document.createElement('p');
    p.classList = 'diferenca';
    //console.log(typeof(anoNascimento));
    //if (typeof(valorAno) != Int32Array && typeof)
    if (anosDiferenca == 'null'){
        p.textContent = `Você nasceu há ${diasDiferenca} dia(s) e ${mesesDiferenca} mês(meses) depois do nascimento de Karl Schelenz, o "pai" do handebol.`
    }
    else if (mesesDiferenca == 'null'){
        p.textContent = `Você nasceu há ${diasDiferenca} dia(s) e ${anosDiferenca} ano(s) depois do nascimento de Karl Schelenz, o "pai" do handebol.`
    }
    else if (diasDiferenca == 'null'){
    p.textContent = `Você nasceu há ${mesesDiferenca} mês(meses) e ${anosDiferenca} ano(s) depois do nascimento de Karl Schelenz, o "pai" do handebol.`
    }
    else{
    p.textContent = `Você nasceu há ${diasDiferenca} dia(s), ${mesesDiferenca} mês(meses) e ${anosDiferenca} ano(s) depois do nascimento de Karl Schelenz, o "pai" do handebol.`
    }

    diferenca.appendChild(p);


})
