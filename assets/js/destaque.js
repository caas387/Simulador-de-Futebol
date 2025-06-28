function mostrarMelhorJogador(timeA, timeB) {
    const melhorA = timeA.getMelhorJogador();
    const melhorB = timeB.getMelhorJogador();

    let melhorGeral = melhorA;
    let timeMelhor = timeA;

    if (melhorB.getPontuacao() > melhorA.getPontuacao()) {
        melhorGeral = melhorB;
        timeMelhor = timeB;
    }

    const mensagemFinal = document.getElementById("mensagemFinal");
    mensagemFinal.innerHTML = `
    🎉 Melhor jogador da partida: <strong>${melhorGeral.name}</strong> do time <strong style="color:${timeMelhor.color}">${timeMelhor.name}</strong> com pontuação ${melhorGeral.getPontuacao()}!
  `;

    // Efeito de destaque simples
    mensagemFinal.style.animation = "fadeInHighlight 2s ease forwards";
}