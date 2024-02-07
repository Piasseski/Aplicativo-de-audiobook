const audio = document.getElementById("audio-capitulo");
const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");
const nomeCapitulo = document.getElementById("capitulo");
const quantidadeCapitulos = 30;
let taTocando = false;
let capitulo = 1;

function tocarFaixa() {
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi bi-pause-circle-fill");
    audio.play();
    taTocando = true;
}

function pausarFaixa() {
    botaoPlayPause.classList.add("bi-play-circle-fill");
    botaoPlayPause.classList.remove("bi bi-pause-circle-fill");
    audio.pause();
    taTocando = false;
}

function tocarOuPausarFaixa() {
    if (taTocando === true) {
        pausarFaixa();
    } else { 
        tocarFaixa();
    }
    }

    function proximoCapitulo() {
    if (capitulo < quantidadeCapitulos) 
        capitulo += 1;
    } else {
            capitulo = 1;
    }
    audio.src = "books/dom-casmurro/" + capitulo + ".mp3";
    nomeCapitulo.innerText = "Capítulo" + capitulo;
    tocarFaixa;
        

    function capituloAnterior() {
    if (capitulo === 1) {
    capitulo = quantidadeCapitulos;
    } else {
    capitulo -= 1;
    }

    audio.src = "books/dom-casmurro/" + capitulo + ".mp3";
    nomeCapitulo.innerText = "Capítulo" + capitulo;
        tocarFaixa();
    }

botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);
botaoProximoCapitulo.addEventListener("click", proximoCapitulo);
botaoCapituloAnterior.addEventListener("click", capituloAnterior);
audio.addEventListener("ended", proximoCapitulo);
