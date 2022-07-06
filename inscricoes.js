var slides=new Array("3pessoa.jpg", "foto1.jpeg", "foto2.jpeg" );
var tam=slides.length;
var satual=1;
var tmpSlider;

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




var $input;

function onInputFocus(event) {
  var $target = $(event.target);
  var $parent = $target.parent();
  $parent.addClass('input--filled');
};

function onInputBlur(event) {
  var $target = $(event.target);
  var $parent = $target.parent();

  if (event.target.value.trim() === '') {
    $parent.removeClass('input--filled');
  }
};

$(document).ready(function() {
  $input = $('.input__field');
  
  // in case there is any value already
  $input.each(function(){
    if ($input.val().trim() !== '') {
      var $parent = $input.parent();
      $parent.addClass('input--filled');
    }
  });
  
  $input.on('focus', onInputFocus);
  $input.on('blur', onInputBlur);
});