function gerarAtributos() {
    return {
        Ataque: Math.floor(Math.random() * 10) + 1,
        Defesa: Math.floor(Math.random() * 10) + 1,
        Velocidade: Math.floor(Math.random() * 10) + 1,
        Passe: Math.floor(Math.random() * 10) + 1,
        Resistencia: Math.floor(Math.random() * 10) + 1,
    };
}

class Player {
    constructor(name, position) {
        this.name = name;
        this.position = position;
        this.atributos = gerarAtributos();
    }
    getPontuacao() {
        return Object.values(this.atributos).reduce((a, b) => a + b, 0);
    }
}

class Team {
    constructor(name, color, starters, reserves) {
        this.name = name;
        this.color = color;
        this.starters = starters.map((j) => new Player(j, "Titular"));
        this.reserves = reserves.map((j) => new Player(j, "Reserva"));
    }
    getForcaTotal() {
        return this.starters.reduce((soma, jogador) => soma + jogador.getPontuacao(), 0);
    }
    getMelhorJogador() {
        return [...this.starters, ...this.reserves].sort((a, b) => b.getPontuacao() - a.getPontuacao())[0];
    }
}

// Array de times com jogadores
const teams = [
    {
        name: "Flamengo",
        color: "#c00000",
        starters: [
            "Rossi",
            "Varela",
            "Fabricio Bruno",
            "Léo Pereira",
            "Ayrton Lucas",
            "Pulgar",
            "De la Cruz",
            "Arrascaeta",
            "Gerson",
            "Bruno Henrique",
            "Pedro",
        ],
        reserves: [
            "Matheus Cunha",
            "Wesley",
            "David Luiz",
            "Victor Hugo",
            "Everton",
            "Luiz Araújo",
            "Gabigol",
            "Allan",
            "Léo Ortiz",
            "Cleiton",
        ],
    },
    // [ ... demais times conforme seu código original ... ]
    {
        name: "Vasco",
        color: "#111111",
        starters: [
            "Léo Jardim",
            "Pumita",
            "Léo",
            "Maicon",
            "Lucas Piton",
            "Zé Gabriel",
            "Payet",
            "Praxedes",
            "Adson",
            "Rayan",
            "Vegetti",
        ],
        reserves: [
            "Halls",
            "Robson",
            "Galdames",
            "Orellano",
            "Barros",
            "Marcos Junior",
            "Sebastian",
            "Andrey",
            "Pec",
            "Gustavo",
        ],
    },
].map((t) => new Team(t.name, t.color, t.starters, t.reserves));