function responder() {
    var pergunta = document.getElementById('pergunta').value;
    var idioma = document.getElementById('idioma').value;
    var resposta = generatePlanoDeAula(pergunta, idioma);

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
function generatePlanoDeAula(pergunta, idioma) {
    // Defina o plano de aula com base no idioma escolhido
    let plano = '';

    if (idioma === 'ingles') {
        plano = `
        Generate a lesson plan for ${pergunta}.
        1. Introduction: - Describe the importance of the ${pergunta} topic in everyday life or within the discipline context.
        2. Objectives: - Define the learning objectives, highlighting what students should understand or be able to do by the end of the class.
        3. Initial Activity: - Propose an activity that activates students' prior knowledge about ${pergunta}.
           - Relate the activity to practical situations or fundamentals of the discipline.
        4. Development: - Divide the content into sections and provide key information about ${pergunta}.
           - Use visual aids, practical examples, and case studies related to the discipline.
        5. Practical Activity: - Develop a practical activity that allows students to apply what they have learned.
           - Include questions that encourage reflection and discussion.
        6. Group Discussion: - Divide students into groups to discuss different perspectives or approaches related to the specific topic.
           - Ask each group to share their conclusions with the class.
        7. Synthesis: - Review the main points covered during the class.
           - Reinforce key concepts and highlight their relevance in the discipline.
        8. Assessment Activity: - Create an assessment activity that allows students to demonstrate their understanding of the topic.
           - Use different formats, such as written questions, oral presentations, or projects.
        9. Feedback: - Provide constructive feedback on students' performance.
           - Highlight strengths and areas for improvement.
        10. Homework: - Assign homework related to the specific topic.
            - Encourage students to explore additional resources to deepen their understanding.
        `;
    } else {
        // Plano em português (padrão)
        plano = `
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

    return plano;

}
function redirecionarParaWhatsApp() {
    var resposta = document.getElementById('resposta').innerText;
    const numeroTelefone = '5511972553036';
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(resposta)}`;
    window.location.href = linkWhatsApp;
}



