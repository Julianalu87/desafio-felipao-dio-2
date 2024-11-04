// Função para calcular o nível do jogador
function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Verifica o nível do jogador com base nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Mostra o resultado
    console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel);
}

// Teste do código
let vitorias = 15; // Altere o número de vitórias aqui
let derrotas = 5; // Altere o número de derrotas aqui

calcularNivel(vitorias, derrotas);
