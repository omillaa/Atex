function responder() {
    var pergunta = document.getElementById('pergunta').value;
    var resposta = generatePlanoDeAula(pergunta);

    document.getElementById('resposta').innerText = resposta;
}

function copiarResposta() {
    var respostaText = document.getElementById('resposta');
    var range = document.createRange();
    range.selectNode(respostaText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    document.execCommand('copy');

    window.getSelection().removeAllRanges();
    alert('Resposta copiada!');
}
function generatePlanoDeAula(pergunta) {
    // Lógica para gerar uma resposta formatada com base na pergunta
    return `
    Gere um plano de aula para ${pergunta}.
    1. Introdução: - Descreva a importância do tema ${pergunta} na vida cotidiana ou no contexto da disciplina.
    2. Objetivos: - Defina os objetivos de aprendizagem, destacando o que os alunos devem entender ou ser capazes de fazer ao final da aula.
    3. Atividade Inicial: - Proponha uma atividade que ative o conhecimento prévio dos alunos sobre ${pergunta}.
     - Relacione a atividade com situações práticas ou fundamentos da disciplina.
    4. Desenvolvimento: - Divida o conteúdo em seções e forneça informações-chave sobre ${pergunta}. 
    - Utilize recursos visuais, exemplos práticos e estudos de caso relacionados à disciplina.
    5. Atividade Prática: - Elabore uma atividade prática que permita aos alunos aplicar o que aprenderam. 
    - Inclua perguntas que incentivem a reflexão e a discussão.
    6. Discussão em Grupo: - Divida os alunos em grupos para discutir diferentes perspectivas ou abordagens relacionadas ao tópico específico.
     - Peça que cada grupo compartilhe suas conclusões com a turma.
    7. Síntese: - Faça uma revisão dos principais pontos abordados durante a aula. 
    - Reforce os conceitos-chave e destaque sua relevância na disciplina.
    8. Atividade de Avaliação: - Crie uma atividade de avaliação que permita aos alunos demonstrar sua compreensão do tópico. 
    - Utilize diferentes formatos, como questões escritas, apresentações orais ou projetos.
    9. Feedback: - Forneça feedback construtivo sobre o desempenho dos alunos. 
    - Destaque pontos fortes e áreas para melhorias.
    10. Tarefas de Casa: - Atribua tarefas de casa relacionadas ao tópico específico. 
    - Encoraje os alunos a explorarem recursos adicionais para aprofundar seu entendimento.
    `;
}


