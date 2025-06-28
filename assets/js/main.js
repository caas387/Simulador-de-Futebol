document.addEventListener("DOMContentLoaded", () => {
    const timeASelect = document.getElementById("timeA");
    const timeBSelect = document.getElementById("timeB");
    const btnIniciar = document.getElementById("iniciarJogo");

    // Popular os times nos selects
    teams.forEach((team) => {
        const optionA = document.createElement("option");
        optionA.value = team.name;
        optionA.textContent = team.name;
        timeASelect.appendChild(optionA);

        const optionB = document.createElement("option");
        optionB.value = team.name;
        optionB.textContent = team.name;
        timeBSelect.appendChild(optionB);
    });

    // Clique no botão para iniciar o jogo
    btnIniciar.addEventListener("click", () => {
        const nomeA = timeASelect.value;
        const nomeB = timeBSelect.value;

        if (nomeA === nomeB) {
            alert("Escolha dois times diferentes.");
            return;
        }

        const timeA = teams.find(t => t.name === nomeA);
        const timeB = teams.find(t => t.name === nomeB);

        if (!timeA || !timeB) {
            alert("Erro ao selecionar os times.");
            return;
        }

        // Atualizar nomes e placar na UI
        document.getElementById("nomeTimeA").textContent = timeA.name;
        document.getElementById("nomeTimeB").textContent = timeB.name;
        document.getElementById("placarA").textContent = "0";
        document.getElementById("placarB").textContent = "0";

        // Exibir escalação dos times
        const escalação = document.getElementById("escalação");
        escalação.innerHTML = `
    <div class="row">
        <div class="col-md-6">
            <h4>${timeA.name} (Titulares)</h4>
            <ul class="list-group mb-3">${timeA.starters.map(j =>
            `<li class="list-group-item d-flex justify-content-between">${j.name}<span>${j.getPontuacao()}</span></li>`
        ).join('')}</ul>
        </div>
        <div class="col-md-6">
            <h4>${timeB.name} (Titulares)</h4>
            <ul class="list-group mb-3">${timeB.starters.map(j =>
            `<li class="list-group-item d-flex justify-content-between">${j.name}<span>${j.getPontuacao()}</span></li>`
        ).join('')}</ul>
        </div>
    </div>
    `;
        escalação.style.display = "block";

        // Ocultar tela de pré-jogo e exibir simulação
        document.getElementById("pre-jogo").style.display = "none";
        document.getElementById("simulacaoJogo").style.display = "block";

        // Iniciar o motor da partida (se já estiver implementado)
        iniciarPartida(timeA, timeB, atualizarTimer, () => {
            mostrarMelhorJogador(timeA, timeB);
            document.getElementById("simulacaoJogo").style.display = "none";
            document.getElementById("fimJogo").style.display = "block";
        });
    });
});