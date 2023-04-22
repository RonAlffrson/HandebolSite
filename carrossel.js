//------Carrosel de imagens-----------------------
let lista2 = ["imagemCarrossel1", "imagemCarrossel2", "imagemCarrossel3", "imagemCarrossel4"];let imgIndex = 0;
function carrosselIndo(){
    imgIndex = (imgIndex + 1) % 4;
    document.getElementById("curiosidadesImg").innerHTML = "<img src='" + lista2[imgIndex] + ".jpg'>";
}
function carrosselVoltando(){
    imgIndex = (imgIndex - 1);
    if (imgIndex < 0){
        imgIndex = 3;
    }
    document.getElementById("curiosidadesImg").innerHTML = "<img src='" + lista2[imgIndex] + ".jpg'>";
}

    