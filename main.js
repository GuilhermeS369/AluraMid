function tocaSom (idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if (elemento != null && elemento.localName === 'audio') {
        
        elemento.play();
    }
    else{
        console.log('Elemento invalido ou não encontrado');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//enquanto
for (let x = 0; x < listaDeTeclas.length; x++) {

    const tecla = listaDeTeclas[x];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`



    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento){
        
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function (evento){
        tecla.classList.remove('ativa')
       
    }
 
}