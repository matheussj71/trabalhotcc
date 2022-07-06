function trocaAutomatica(){
    satual++;
    if(satual >= tam){
        satual=0;
    }
    document.getElementById("dvSlider").style.backgroundImage="url('"+slides[satual]+"')";
}

function iniciaSlider(){
    document.getElementById("dvSlider").style.backgroundImage="url('"+slides[satual]+"')";
    tmpSlider=setInterval(trocaAutomatica,3000);
}

function parar(){
    clearInterval(tmpSlider);
}   

function troca(dir){
    satual+=dir;
    if(satual < 0){
        satual=2;
    }else if(satual >= tam){
        satual=0;
    }
    document.getElementById("dvSlider").style.backgroundImage="url('"+slides[satual]+"')";
    clearInterval(tmpSlider);
    tmpSlider=setInterval(trocaAutomatica,3000);                
}

const titulo = document.querySelector('h2');
typeWriter(rimando);
typeWriterriter(document.querySelector('p'));

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
});
}