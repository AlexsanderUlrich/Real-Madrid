
let botao = document.getElementById('meuBotao');
let numeroCartao = document.getElementById('numeroCartao');
let agencia = document.getElementById('agencia');
let codigo = document.getElementById('codigo');

// Função para verificar se todos os campos estão preenchidos
function verificarCampos() {
    if (numeroCartao.value && agencia.value && codigo.value) {
        botao.disabled = false; // Habilita o botão
    } else {
        botao.disabled = true; // Desabilita o botão
    }
};

// Adiciona evento de entrada a cada campo
numeroCartao.addEventListener('input', verificarCampos);
agencia.addEventListener('input', verificarCampos);
codigo.addEventListener('input', verificarCampos);

const jogadores = [
    "/paginas/cris.html", 
    "/paginas/beckham.html", 
    "/paginas/benzema.html", 
    "/paginas/kaka.html", 
    "/paginas/ozil.html", 
    "/paginas/roberto.html", 
    "/paginas/ronaldo.html", 
    "/paginas/vini.html", 
    "/paginas/zidane.html"
];

var escolhido = Math.floor(Math.random() * (jogadores.length));

botao.addEventListener('click', function() {
    window.location.href = escolhido;
    console.log(escolhido)
});
