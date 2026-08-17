const senhaCorreta = "12345";
const btnEnviar = document.querySelector (".btnEnviar");

btnEnviar.addEventListener ("click", function() {

    verificar();

}); 

function verificar() {

    const imput = document.querySelector (".imputSenha");
    let imputValue = imput.value;

    const senha = document.querySelector (".senha");
    for (let i = 0; i < senhaCorreta.length; i++) {

        let number = senha.children[i]

        number.textContent = imputValue[i]

        if (imputValue[i] == senhaCorreta[i]) {

            number.classList.add ("certo");

    } else {

        number.classList.add ("erro");

  }
 }
}