//ACORDEÃO (ABRIR E FECHAR CONTEÚDOS)
document.querySelectorAll(".titulo-acordeao").forEach(botao => {
    botao.addEventListener("click", () => {
        let conteudo = botao.nextElementSibling; //pegue o próximo elemento
        let simbolo = botao.querySelector("span");

        // Alterna entre block e none usando operador ternário
        conteudo.style.display = conteudo.style.display === "block" ? "none" : "block";
        simbolo.textContent = conteudo.style.display === "block" ? "−" : "+";
    });
});

//LINHA DO TEMPO
function mostrarAno(id, botao) {
    // Esconde todos os eventos de uma vez só
    document.querySelectorAll(".evento").forEach(ev => ev.style.display = "none");
    
    // Remove a classe 'ativo' de todos os botões de anos
    document.querySelectorAll(".anos button").forEach(btn => btn.classList.remove("ativo"));

    // Mostra o evento selecionado e ativa o botão atual
    let eventoSelecionado = document.getElementById(id);
    eventoSelecionado.style.display = "block";
    botao.classList.add("ativo");

    // Rolar suavemente até o marco
    eventoSelecionado.scrollIntoView({ behavior: "smooth", block: "center" });
}

//EIXO E ALIADOS
function mostrarBlocoGuerra(id) {
    let conteudo = document.getElementById(id);
    let estavaAberto = conteudo.style.display === "block";

    // Fecha todos os blocos de guerra em uma linha
    document.querySelectorAll(".conteudo-guerra").forEach(bloco => bloco.style.display = "none");

    // Só reabre se ele já não estivesse aberto antes
    if (!estavaAberto) conteudo.style.display = "block";
}

//QUIZ (DADOS E LÓGICA)
const perguntas = [
    {
        pergunta: "Qual é a principal função da fórmula de Bhaskara?",
        alternativas: ["Calcular a área de figuras geométricas.", "Encontrar as soluções de uma equação do segundo grau.", "Determinar a porcentagem de um valor.", "Calcular a média de um conjunto de números."],
        correta: 1,
        explicacao: "A fórmula de Bhaskara permite encontrar os valores de (x) que tornam uma equação do segundo grau verdadeira. Esses valores são chamados de raízes da equação."
    },
    {
        pergunta: "Na fórmula de Bhaskara, por que é importante calcular o delta antes de encontrar as raízes?",
        alternativas: ["APorque o delta indica se a equação possui raízes reais e ajuda a calculá-las.", "Porque o delta representa o valor de (x).", "Porque o delta elimina a necessidade de conhecer os coeficientes.", "Porque o delta transforma qualquer equação em uma equação do primeiro grau."],
        correta: 0,
        explicacao: " O delta, calculado por Δ = b² - 4ac , permite analisar a existência de raízes reais. Se for positivo, existem duas raízes reais distintas; se for zero, existe uma raiz real dupla; se for negativo, não existem raízes reais."
    },
    {
        pergunta: " Considere a equação (x² - 5x + 6 = 0). Quais são suas raízes utilizando a fórmula de Bhaskara?",
        alternativas: ["(x_1 = 1) e (x_2 = 6)", "(x_1 = 2) e (x_2 = 3)", "(X_1=-2) e (x_2 = -3)", "(x_1 = O) e (x_2 = 5)"],
        correta: 1,
        explicacao: " Identificamos (a=1), (b=-5) e (c=6). Calculando o delta, encontramos ((Delta=1). Aplicando a fórmula de Bhaskara, obtemos as raízes (x_1=3) e (x_2=2)."
    },
    {
        pergunta: "Na fórmula de Bhaskara, o que acontece quando o delta é negativo?",
        alternativas: ["A equação apresenta obrigatoriamente duas raízes positivas.", "A equação possui uma única raiz real.", "A equação não possui raízes reais.", "A equação deixa de apresentar coeficientes."],
        correta: 2,
        explicacao: "Quando o delta é negativo, não existe raiz quadrada real de delta. Por isso, a equação não apresenta soluções reais, embora possa ter soluções no conjunto dos números complexos."
    },
    {
        pergunta: "Qual é a função do símbolo = (∓) na fórmula de Bhaskara?",
        alternativas: ["Indicar que devemos multiplicar os coeficientes.", "Mostrar que devemos considerar a adição e a subtração para encontrar as possíveis raízes.", "Indicar que o resultado será sempre negativo.", "Mostrar que a equação possui obrigatoriamente três soluções."],
        correta: 1,
        explicacao: "O símbolo (∓) indica que devemos considerar duas possibilidades: uma utilizando a adição e outra utilizando a subtração. Quando o delta é positivo, isso permite encontrar as duas raízes reais distintas."
    },
    {
        pergunta: "A fórmula de Bhaskara é frequentemente associada ao matemático indiano Bhaskara II. Qual afirmação é historicamente correta?",
        alternativas: ["Bhaskara II inventou sozinho todos os conhecimentos sobre equações do segundo grau.", "Bhaskara II foi um matemático e astrônomo que contribuiu para o desenvolvimento da Matemática.", "Bhaskara II criou o sistema de numeração romano.","Bhaskara II foi responsável pela invenção dos computadores."],
        correta: 1,
        explicacao: "Bhaskara II viveu na Índia no século XII e contribuiu para a algebra, a aritmética e a astronomia. Entretanto, métodos para resolver equações do segundo ary já eram conhecidos antes dele."
    },
    {
        pergunta: "Imagine que uma equação do segundo grau tenha duas raízes reais iguais. O que podemos concluir sobre seu delta?",
        alternativas: ["O delta é positivo.", "O delta é negativo.", "O delta é igual a zero.", "O delta é sempre igual a 1."],
        correta: 2,
        explicacao: "Quando o delta é zero, a raiz quadrada de delta também é zero. Assim, as operações de adição e subtração na fórmula produzem o mesmo resultado, fazendo com que as duas raízes coincidam."
    },
    {
        pergunta: "Por que a fórmula de Bhaskara é considerada útil para resolver problemas do cotidiano?",
        alternativas: ["Porque permite resolver qualquer tipo de problema sem utilizar outras informações.", "Porque pode ajudar a encontrar valores desconhecidos em situações representadas por equações do segundo grau.", "Porque substitui todas as outras fórmulas matemáticas.", "Porque serve exclusivamente para problemas relacionados à astronomia."],
        correta: 1,
        explicacao: "A fórmula pode ser aplicada a problemas envolvendo áreas, trajetórias de objetos e outras situações que podem ser representadas por equações do segundo grau. Sua utilidade depende de o problema poder ser modelado matematicamente dessa forma."
    },
    {
        pergunta: "Uma pessoa afirma que, se o delta for positivo, a equação terá duas raízes reais diferentes. Essa afirmação está correta?",
        alternativas: ["Sim, porque um delta positivo resulta em duas raízes reais distintas.", "Não, porque um delta positivo indica que não existem raízes reais.", "Não, porque um delta positivo sempre produz duas raízes iguais.", "Sim, mas somente quando o coeficiente (a) é igual a zero."],
        correta: 0,
        explicacao: "Quando o delta é positivo, sua raiz quadrada é um número real positivo. Na fórmula, somar e subtrair esse valor produz resultados diferentes, originando duas raízes reais distintas."
    },
    {
        pergunta: "Qual alternativa apresenta corretamente a importância dos estudos de Bhaskara II para a ciência?",
        alternativas: ["Seus estudos contribuíram para a Matemática e a astronomia, ajudando no desenvolvimento de conhecimentos científicos.", "Seus estudos se limitaram à criação de uma única fórmula matemática.", "Sua principal contribuição foi desenvolver a tecnologia digital.", "Ele foi responsável por criar todas as regras matemáticas utilizadas atualmente."],
        correta: 0,
        explicacao: "Bhaskara II realizou importantes contribuições para diferentes áreas da Matemática e para a astronomia. Sua obra faz parte de uma tradição científica que ajudou a ampliar os conhecimentos matemáticos ao longo da história."
    }
];

let perguntaAtual = 0;
let pontos = 0;

function mostrarPergunta() {
    let pergunta = perguntas[perguntaAtual];
    
    document.getElementById("progresso").textContent = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
    document.getElementById("pergunta").textContent = pergunta.pergunta;
    
    let alternativasContainer = document.getElementById("alternativas");
    alternativasContainer.innerHTML = ""; // Limpa anterior

    pergunta.alternativas.forEach((alternativa, indice) => {
        let botao = document.createElement("button");
        botao.textContent = alternativa;
        botao.onclick = () => verificarResposta(indice);
        alternativasContainer.appendChild(botao);
    });

    document.getElementById("feedback").textContent = "";
    document.getElementById("proxima").style.display = "none";
}

function verificarResposta(indice) {
    let pergunta = perguntas[perguntaAtual];
    let botoes = document.querySelectorAll("#alternativas button");

    botoes.forEach(btn => btn.disabled = true);

    if (indice === pergunta.correta) {
        botoes[indice].classList.add("correta");
        document.getElementById("feedback").textContent = `Resposta correta! ${pergunta.explicacao}`;
        pontos++;
    } else {
        botoes[indice].classList.add("errada");
        botoes[pergunta.correta].classList.add("correta");
        document.getElementById("feedback").textContent = `Resposta incorreta. ${pergunta.explicacao}`;
    }

    document.getElementById("proxima").style.display = "block";
}

function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    let msg = pontos === perguntas.length ? "Excelente! Você acertou todas!" : 
              pontos >= 7 ? "Muito bom! Ótimo conhecimento." : "Vale a pena revisar o conteúdo.";

    document.getElementById("quiz-container").innerHTML = `
        <h3>Resultado final</h3>
        <p>Você acertou <strong>${pontos}</strong> de <strong>${perguntas.length}</strong> questões.</p>
        <p>${msg}</p>
        <button id='refazer' onclick='refazerQuiz()'>Refazer Quiz</button>
    `;
}

function refazerQuiz() {
    perguntaAtual = 0;
    pontos = 0;
    document.getElementById("quiz-container").innerHTML = `
        <p id="progresso"></p>
        <h3 id="pergunta"></h3>
        <div id="alternativas"></div>
        <p id="feedback"></p>
        <button id="proxima" onclick="proximaPergunta()">Próxima pergunta</button>
    `;
    mostrarPergunta();
}

// Inicialização automática do Quiz
if (document.getElementById("quiz-container")) {
    mostrarPergunta();
}
