let intervaloPartida;
let minutoAtual = 0;
let tempoTotal = 90;
let partidaPausada = false;

function simularEvento(timeA, timeB, onEvento) {
    if (partidaPausada) return;

    const probEvento = 0.2;
    if (Math.random() < probEvento) {
        const time = Math.random() < 0.5 ? timeA : timeB;
        const jogador = time.starters[Math.floor(Math.random() * time.starters.length)];
        const evento = gerarEventoAleatorio(time, jogador);
        onEvento(evento, time, jogador);
    }
}

function iniciarPartida(timeA, timeB, atualizarUI, finalizar) {
    minutoAtual = 0;
    partidaPausada = false;
    adicionarMensagem("🔔 Início do Jogo!", true);

    intervaloPartida = setInterval(() => {
        if (partidaPausada) return;

        minutoAtual++;
        atualizarUI(minutoAtual);

        simularEvento(timeA, timeB, (evento, time, jogador) => {
            if (evento.includes("OVNI")) {
                adicionarMensagem(evento, true);
            } else {
                adicionarMensagem(evento);
            }

            if (evento.includes("⚽")) {
                if (time === timeA) placarA++;
                else placarB++;
                atualizarPlacar(placarA, placarB);
            }
        });

        if (minutoAtual === 45 && !segundoTempo) {
            adicionarMensagem("⏸ Intervalo de Jogo!", true);
            pausarPartida();
            document.getElementById("simulacaoJogo").style.display = "none";
            document.getElementById("intervalo").style.display = "block";
        }

        if (minutoAtual >= tempoTotal) {
            adicionarMensagem("🏁 Fim do Jogo!", true);
            clearInterval(intervaloPartida);
            finalizar();
        }
    }, 1000);
}

function pausarPartida() {
    partidaPausada = true;
}

function continuarPartida() {
    partidaPausada = false;
}

function finalizarPartida() {
    clearInterval(intervaloPartida);
}
