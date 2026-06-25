const card = document.querySelectorAll('.card');
const start = document.querySelector('.start');

document.addEventListener('DOMContentLoaded',() =>{
    IniciarApp ();
})

start.addEventListener('click', ()=>{
    cronometro();
})

function IniciarApp() {
    for (let i = 0; i < card.length; i++) {
        card[i].disabled = true;
    }
}

function desbloquearCard(){
    for (let i = 0; i < card.length; i++) {
        card[i].disabled = false;
    }
}

function cronometro(){
    desbloquearCard();
    let time = 4;
    start.classList.add('disabled');
    const contador = setInterval(() => {
        time --
        contador_cronometro.innerHTML = time;
        if (time == 0) {
            clearInterval(contador);
            console.log('se acabó el tiempo')
        }
    }, 1000);
}
