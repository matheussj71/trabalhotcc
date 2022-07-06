var imagens= document.querySelectorAll('.mini_img');
var modal = document.querySelector('.modal');
var modalImg = document.querySelector('#modal_img');
var btClose = document.querySelector('#bt_close');
var srcVal="";

for(let i =0; i<imagens.length;i++){
    imagens[i].addEventListener('click',function(){
        
        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    });
    
}


btClose.addEventListener('click', function(){
    modal.classList.toggle('modal_active');

});


const titulo = document.querySelector('h2');
typeWriter(rimando);
typeWriterriter = (document.querySelector('p'));

function typeWriter(elemento) {
	const textoArray = elemento.innerHTML.split('');
	elemento.innerHTML = '';
	textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
});
}
