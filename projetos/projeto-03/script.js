const frases = [

    "Mesmo quando o caminho parecer impossivel, continue avançando. Determinação também é saber tentar de novo",
    "Você não precisa vencer todas as batalhas; às vezes, a maior vitória é escolher não lutar.",
    "Até no lugar mais escuro, uma pequena esperança ainda pode mudar tudo.",
    "Seu passado pode fazer parte da sua história sem precisar decidir o seu próximo capítulo.",
    "Não importa quantas vezes você erre: ainda existem escolhas esperando por você.",
    "Talvez você não saiba qual é o seu destino, mas isso não significa que não possa escolher seus próximos passos.",
    "Ser gentil não é ser fraco. É continuar escolhendo a bondade mesmo quando seria mais fácil desistir dela.",
    "Algumas portas só aparecem depois que você encontra coragem para continuar.",
    "Você não precisa saber o final da história para tornar o próximo momento melhor.",
    "Quando tudo parecer perdido, lembre-se: enquanto houver uma escolha, a história ainda não acabou.",


];

const fraseTexto = document.querySelector (".frase");
const btnFrase = document.querySelector (".btnFrase");

function mostrarFrase() {

    let indice = Math.floor(Math.random() * frases.length);
   fraseTexto.textContent = frases [indice];

}

btnFrase.addEventListener ("click", function () {

    mostrarFrase();

});