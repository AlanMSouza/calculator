const botao = document.querySelectorAll(".botao");
const telaAtual = document.querySelector(".tela")

botao.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        botaoOperador(evento.target.textContent);
    })
})

function botaoOperador(operador) {
    if(operador === "-") {
        telaAtual.textContent = parseInt(telaAtual.textContent) + 3;
    }
}