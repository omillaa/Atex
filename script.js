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
        plano = `Generate a lesson plan for ${pergunta}. Have an introduction that describes the importance of the topic ${pergunta} in everyday life or in the context of the discipline.
        Define learning objectives, highlighting what students should understand or be able to do at the end of the lesson.
        Then provide a starter activity that activates students' prior knowledge about ${pergunta}
        – relate the activity to practical situations or fundamentals of the discipline.
        After that, present a development: divide the content into sections and provide key information about ${pergunta}
        – Use visual resources, practical examples and case studies related to the discipline.
        Create a hands-on activity that allows students to apply what they have learned, include questions that encourage reflection and discussion.
        Start a Group Discussion: Divide students into groups to discuss different perspectives or approaches related to the specific topic, asking each group to share their conclusions with the class.
        Then, summarize the main points covered during the class – reinforce the key concepts and highlight their relevance in the discipline.
        Moving towards the end, create an assessment activity that allows students to demonstrate their understanding of the topic
        (use different formats, such as written questions, oral presentations or projects).
        Finally, provide constructive feedback on students' performance (highlight strengths and areas for improvement) and create homework assignments related to the ${pergunta} to do this, encourage students to explore additional resources to deepen their understanding.`
        ;
    } else {
        // Plano em português (padrão)
        plano = `Gere um plano de aula para ${pergunta}. Disponha de uma introdução  que descreva a importância do tema ${pergunta} no dia a dia ou no contexto da disciplina.
        Defina os objetivos de aprendizagem, destacando o que os alunos devem entender ou serem capazes de fazer ao final da aula. 
        Em seguida, forneça uma atividade inicial que ative o conhecimento prévio dos alunos sobre ${pergunta} 
        – relacione a atividade com situações práticas ou fundamentos da disciplina. 
        Após isso, apresente um desenvolvimento: divida o conteúdo em seções e forneça informações-chave sobre ${pergunta} 
        – Utilize recursos visuais, exemplos práticos e estudos de caso relacionados à disciplina. 
        Crie uma atividade prática que permita aos alunos aplicar o que aprenderam, inclua perguntas que incentivem a reflexão e a discussão. 
        Inicie uma discussão em Grupo: divida os alunos em grupos para discutir diferentes perspectivas ou abordagens relacionadas  ao tópico específico, pedindo que cada grupo compartilhe suas conclusões com a turma. 
        Depois, faça uma síntese dos principais pontos abordados durante a aula – reforce os conceitos-chave e destaque sua relevância na disciplina. 
        Seguindo para o final, elabore uma atividade avaliativa que avaliação que permita aos alunos demonstrar sua compreensão do tópico 
        (utilize diferentes formatos, como questões escritas, apresentações orais ou projetos). 
        Por fim forneça um feedback construtivo sobre o desempenho dos alunos (destaque pontos fortes e áreas para melhorias) e crie tarefas de casa  relacionadas  a(o) ${pergunta} para isso, encoraje os alunos a explorarem recursos adicionais para aprofundar seu entendimento.`
        ;
    }

    return plano;

}
function redirecionarParaWhatsApp() {
    var resposta = document.getElementById('resposta').innerText;
    const numeroTelefone = '5511972553036';
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(resposta)}`;
    window.location.href = linkWhatsApp;
}



