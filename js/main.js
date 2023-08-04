function insere(num) {
    var numero = document.querySelector(".tela").innerHTML;
    document.querySelector(".tela").innerHTML = numero + num;
}

const limpaTela = document.querySelector(".tela")
const limpar = document.querySelector("[data-limpar]");
limpar.addEventListener("click", () => {
    limpaTela.innerHTML = "";
})

function calcular() {
    var resultado = document.querySelector(".tela").innerHTML;
    if(resultado) {
        document.querySelector(".tela").innerHTML = eval(resultado);
    }
}