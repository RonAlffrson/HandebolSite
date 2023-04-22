function changeColor(){
    document.body.style.background = "white";
}
function changeFont(){
    document.body.style.fontFamily = "Arial";
}function changeFontSize(){
    document.body.style.fontSize = "larger"
}
function reset(){
    document.body.style.background = "rgba(153, 214, 223, 0.705)";
    document.body.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
    document.body.style.fontSize = "initial"
}
//------Mudança de imagens na página inicial------------------------------
let lista = [" ","jogador_de_handebol.jpg","imagem2.jpg","imagem3.jpeg"];

if (typeof(Storage) != 'undefined'){
    if (localStorage.i){
        localStorage.i = Number(localStorage.i) + 1;
        if (localStorage.i == 1 || localStorage.i == 2 || localStorage.i == 3){
            document.getElementById("frontPageImg").innerHTML = "<img src='" + lista[localStorage.i] + "'>";
        }
        else{
            localStorage.i = localStorage.i % 3;
            if (localStorage.i == 1 || localStorage.i == 2 || localStorage.i == 3){
                document.getElementById("frontPageImg").innerHTML = "<img src='" + lista[localStorage.i] + "'>";
            }
        }
    }
    else{
        localStorage.i = 1;
    }
}
