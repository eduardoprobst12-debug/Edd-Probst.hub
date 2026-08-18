let tarefas = [];
let contadorId = 0;

let imputText = document.querySelector (".imputText").value;
let btnEnviar = document.querySelector (".btnEnviar");
let lista = document.querySelector (".lista");

btnEnviar.addEventListener ("click", function() {

    adicionarTarefa();

});

imputText.addEventListener ("keydown", function(event) {

    if (event.key == "Enter") {

        adicionarTarefa()
    }

});

function adicionarTarefa() {

    let texto = imputText.value.trim();

    if (texto !== "" ) {

        contador++;
        tarefas.push ({id: contadorId, tarefa: texto, concluido: false });
        imputText.value = "";
        console.log (tarefas);

 }
}
