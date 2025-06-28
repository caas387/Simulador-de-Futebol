// Lista simplificada com 10 times da Série A
const teams = [
    {
        name: "Flamengo",
        color: "#c00000",
        starters: ["Rossi", "Varela", "Fabricio Bruno", "Léo Pereira", "Ayrton Lucas", "Pulgar", "De la Cruz", "Arrascaeta", "Gerson", "Bruno Henrique", "Pedro"],
        reserves: ["Matheus Cunha", "Wesley", "David Luiz", "Victor Hugo", "Everton", "Luiz Araújo", "Gabigol", "Allan", "Léo Ortiz", "Cleiton"]
    },
    {
        name: "Palmeiras",
        color: "#1d6838",
        starters: ["Weverton", "Marcos Rocha", "Gustavo Gómez", "Murilo", "Piquerez", "Zé Rafael", "Richard Ríos", "Raphael Veiga", "Luis Guilherme", "Endrick", "Rony"],
        reserves: ["Marcelo Lomba", "Mayke", "Luan", "Fabinho", "Jhon Jhon", "Breno Lopes", "Flaco López", "Garcia", "Navarro", "Michel"]
    },
    {
        name: "São Paulo",
        color: "#d50000",
        starters: ["Rafael", "Rafinha", "Arboleda", "Ferraresi", "Wellington", "Alisson", "Pablo Maia", "Luciano", "Rodriguinho", "Calleri", "Ferreirinha"],
        reserves: ["Jandrei", "Diego Costa", "Moreira", "Michel Araújo", "Galoppo", "Erick", "Juan", "Nikão", "Wellington Rato", "David"]
    },
    {
        name: "Corinthians",
        color: "#000000",
        starters: ["Cássio", "Fagner", "Gil", "Lucas Veríssimo", "Fábio Santos", "Maycon", "Fausto Vera", "Renato Augusto", "Wesley", "Yuri Alberto", "Romero"],
        reserves: ["Carlos Miguel", "Matheus Bidu", "Caetano", "Roni", "Biro", "Giovane", "Mosquito", "Pedro", "Paulinho", "Felipe Augusto"]
    },
    {
        name: "Grêmio",
        color: "#005ca9",
        starters: ["Marchesín", "João Pedro", "Kannemann", "Rodrigues", "Reinaldo", "Carballo", "Pepê", "Cristaldo", "Galdino", "Ferreira", "Diego Costa"],
        reserves: ["Caíque", "Bruno Alves", "Nathan", "Ronald", "Besozzi", "Edenílson", "Du Queiroz", "Nathan Fernandes", "André", "Franco Cristaldo"]
    },
    {
        name: "Internacional",
        color: "#ba0c2f",
        starters: ["Rochet", "Fabricio Bustos", "Vitão", "Mercado", "Renê", "Aránguiz", "Johnny", "Alan Patrick", "Mauricio", "Wanderson", "Enner Valencia"],
        reserves: ["Keiller", "Thauan Lara", "Igor Gomes", "Romulo", "Lucca", "Pedro Henrique", "Bruno Henrique", "Bruno Gomes", "Robert Renan", "Gustavo Maia"]
    },
    {
        name: "Atlético-MG",
        color: "#333333",
        starters: ["Everson", "Saravia", "Bruno Fuchs", "Lemos", "Guilherme Arana", "Otávio", "Battaglia", "Zaracho", "Paulinho", "Hulk", "Scarpa"],
        reserves: ["Matheus Mendes", "Igor Rabello", "Mariano", "Pedrinho", "Edenílson", "Vargas", "Allan", "Hyoran", "Savarino", "Rabelo"]
    },
    {
        name: "Bahia",
        color: "#0033cc",
        starters: ["Marcos Felipe", "Gilberto", "Kanu", "David Duarte", "Chávez", "Cauly", "Rezende", "Thaciano", "Jean Lucas", "Everton Ribeiro", "Biel"],
        reserves: ["Mateus Claus", "Gabriel Xavier", "Cicinho", "Yago", "Ademir", "Luciano Juba", "Oscar Ruiz", "Luciano", "Rildo", "Rafael Ratão"]
    },
    {
        name: "Athletico-PR",
        color: "#a50000",
        starters: ["Bento", "Madson", "Zé Ivaldo", "Thiago Heleno", "Esquivel", "Erick", "Hugo Moura", "Christian", "Vitor Bueno", "Canobbio", "Pablo"],
        reserves: ["Mycael", "Pedro Henrique", "Fernando", "Cuello", "Romulo", "Alex Santana", "Arriagada", "Julimar", "Bruno Zapelli", "Leo Cittadini"]
    },
    {
        name: "Vasco",
        color: "#111111",
        starters: ["Léo Jardim", "Pumita", "Léo", "Maicon", "Lucas Piton", "Zé Gabriel", "Payet", "Praxedes", "Adson", "Rayan", "Vegetti"],
        reserves: ["Halls", "Robson", "Galdames", "Orellano", "Barros", "Marcos Junior", "Sebastian", "Andrey", "Pec", "Gustavo"]
    }
];

const timeASelect = document.createElement("select");
timeASelect.id = "selectTimeA";
timeASelect.className = "form-select mb-3";

const timeBSelect = document.createElement("select");
timeBSelect.id = "selectTimeB";
timeBSelect.className = "form-select mb-3";

teams.forEach(team => {
    const optionA = document.createElement("option");
    optionA.value = team.name;
    optionA.textContent = team.name;
    timeASelect.appendChild(optionA);

    const optionB = document.createElement("option");
    optionB.value = team.name;
    optionB.textContent = team.name;
    timeBSelect.appendChild(optionB);
});

document.getElementById("timeA").replaceWith(timeASelect);
document.getElementById("timeB").replaceWith(timeBSelect);