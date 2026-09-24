
const respostaCorreta = "correta";

const somAcerto = new Audio("sons/acerto.wav");
const somErro = new Audio("sons/erro.wav");
const somSusto = new Audio("sons/susto.wav");

const progresso = document.querySelector(".progresso");
const paginaAtual = window.location.pathname;

if (progresso) {
    const numeroPergunta = Number(paginaAtual.match(/pergunta(\d+)/)[1]);
    progresso.style.width = `${numeroPergunta * 10}%`;
}


let pontos = Number(sessionStorage.getItem("pontos")) || 0;

const botoes = document.querySelectorAll(".botao");

let respondeu = false;

botoes.forEach(function (botao) {

    botao.addEventListener("click", function () {

        if (respondeu) {
            return;
        }
        respondeu = true;

        if (botao.id === respostaCorreta) {

            somAcerto.currentTime = 0;
            somAcerto.play()

            console.log("acertou");

            pontos += 10;
            sessionStorage.setItem("pontos", pontos);

            console.log(pontos);

            const paginaAtual = window.location.pathname;

            if (paginaAtual.includes("pergunta1.html")) {
                setTimeout(function () {
                    window.location.href = "pergunta2.html";
                }, 1000);


            } else if (paginaAtual.includes("pergunta2.html")) {
                setTimeout(function () {
                    window.location.href = "pergunta3.html";
                }, 1000);
            }
             else if (paginaAtual.includes("pergunta3.html")) {
                setTimeout(function () {
                    window.location.href = "pergunta4.html";
                }, 1000);
            }
             else if (paginaAtual.includes("pergunta4.html")) {
                setTimeout(function () {
                    window.location.href = "pergunta5.html";
                }, 1000);
            } 
            else if (paginaAtual.includes("pergunta5.html")) {
                setTimeout(function () {
                    window.location.href = "pergunta6.html";
                }, 1000);
            } 
            else if (paginaAtual.includes("pergunta6.html")) {
                setTimeout(function () {
                    window.location.href = "pergunta7.html";
                }, 1000);
            } 
            else if (paginaAtual.includes("pergunta7.html")) {
                setTimeout(function () {
                    window.location.href = "pergunta8.html";
                }, 1000);
            } 
            else if (paginaAtual.includes("pergunta8.html")) {
                setTimeout(function () {
                    window.location.href = "pergunta9.html";
                }, 1000);
            }
             else if (paginaAtual.includes("pergunta9.html")) {
                setTimeout(function () {
                    window.location.href = "pergunta10.html";
                }, 1000);
            } 
            else if (paginaAtual.includes("pergunta10.html")) {
                   setTimeout(function () {
                    window.location.href = "resultado.html";
                }, 1000);
            }


        } else {

            console.log("errou");

            const paginaAtual = window.location.pathname;
            const susto = document.querySelector("#susto");

            if (
                !paginaAtual.includes("pergunta5.html") &&
                !paginaAtual.includes("pergunta10.html")
            ) {
                somErro.currentTime = 0;
                somErro.play();
                console.log("SOM DE ERRO TOCOU");
            }


            // Pergunta 5: mostra o susto antes de avançar
            if (paginaAtual.includes("pergunta5.html")) {

                somSusto.currentTime = 0;
                somSusto.play();

                susto.style.display = "block";

                setTimeout(function () {
                    window.location.href = "pergunta6.html";
                }, 1500);

                // Pergunta 10: mostra o susto antes do resultado
            } else if (paginaAtual.includes("pergunta10.html")) {

                somSusto.currentTime = 0;
                somSusto.play();

                susto.style.display = "block";

                setTimeout(function () {
                    window.location.href = "resultado.html";
                }, 1500);

                // Demais perguntas: avança normalmente
            } else if (paginaAtual.includes("pergunta1.html")) {

                setTimeout(function () {
                    window.location.href = "pergunta2.html";
                }, 1000);

            }
            else if (paginaAtual.includes("pergunta2.html")) {
                setTimeout(function () {
                    window.location.href = "pergunta3.html";
                }, 1000);

            }
            else if (paginaAtual.includes("pergunta3.html")) {
                setTimeout(function () {
                    window.location.href = "pergunta4.html";
                }, 1000);
            }
            else if (paginaAtual.includes("pergunta4.html")) {
                setTimeout(function () {
                    window.location.href = "pergunta5.html";
                }, 1000);
            }
            else if (paginaAtual.includes("pergunta6.html")) {
                setTimeout(function () {
                    window.location.href = "pergunta7.html";
                }, 1000);
            }
            else if (paginaAtual.includes("pergunta7.html")) {
                setTimeout(function () {
                    window.location.href = "pergunta8.html";
                }, 1000);
            }
            else if (paginaAtual.includes("pergunta8.html")) {
                setTimeout(function () {
                    window.location.href = "pergunta9.html";
                }, 1000);
            }
            else if (paginaAtual.includes("pergunta9.html")) {
                setTimeout(function () {
                    window.location.href = "pergunta10.html";
                }, 1000);
            }

        }

    });

});

const pontuacao = document.querySelector("#pontuacao");
const acertos = document.querySelector("#acertos");


if (pontuacao && acertos) {

    const pontosFinais = Number(sessionStorage.getItem("pontos")) || 0;

    const quantidadedeAcerto = pontosFinais / 10;

    pontuacao.textContent = pontosFinais + " Pontos";

    acertos.textContent = "você acertou  " + quantidadedeAcerto + "/10";

    const barraAcertos = document.querySelector(".progresso2");

    barraAcertos.style.width = `${quantidadedeAcerto * 10}%`;
}






