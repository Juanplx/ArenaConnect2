const prompt = require('prompt-sync')();

const AtletaView = {
perguntarIdTurma() {
return parseInt(prompt("ID da Turma do Atleta: "));
},

perguntarNome() {
    return prompt("Nome do Atleta: ");
},

perguntarId(rotulo = "ID do Atleta: ") {
    return parseInt(prompt(rotulo));
},

mostrarAtletaVinculado(nomeAtleta, nomeTurma) {
    console.log(`Atleta "${nomeAtleta}" vinculado à turma "${nomeTurma}"!`);
},

mostrarErroCadastro(mensagem) {
    console.log(`Não foi possível cadastrar o atleta: ${mensagem}`);
},

listar(lista) {
    console.log("\n=== LISTA DE ATLETAS ===");

    if (lista.length === 0) {
        console.log("Nenhum atleta no sistema.");
        return;
    }

    lista.forEach(({ atleta, nomeTurma }) => {
        atleta.exibir(nomeTurma);
    });
}

};

module.exports = AtletaView;