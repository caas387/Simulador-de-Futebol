let intervaloPartida;
let minutoAtual = 0;
let tempoTotal = 90;
let partidaPausada = false;

function simularEvento(timeA, timeB, onEvento) {
    if (partidaPausada) return;

    // Simula a chance de evento (simplificado)
    const probEvento = 0.2; // 20% chance de evento a cada "tick"
    if (Math.random() < probEvento) {
        // Decide qual time
        const time = Math.random() < 0.5 ? timeA : timeB;
        // Escolhe jogador aleatório do time titular
        const jogador =
            time.starters[Math.floor(Math.random() * time.starters.length)];

        // Gera mensagem do evento
        const evento = gerarEventoAleatorio(time, jogador);

        onEvento(evento, time, jogador);
    }
}

function iniciarPartida(timeA, timeB, atualizarUI, finalizar) {
    minutoAtual = 0;
    partidaPausada = false;

    intervaloPartida = setInterval(() => {
        if (partidaPausada) return;

        minutoAtual++;
        atualizarUI(minutoAtual);

        simularEvento(timeA, timeB, (evento, time, jogador) => {
            // Adiciona mensagem
            adicionarMensagem(evento);

            // Evento de gol simplificado (exemplo)
            if (evento.includes("⚽")) {
                if (time === timeA) placarA++;
                else placarB++;
                atualizarPlacar(placarA, placarB);
            }
        });

        if (minutoAtual >= tempoTotal) {
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