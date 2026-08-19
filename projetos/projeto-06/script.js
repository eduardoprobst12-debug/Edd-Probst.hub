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
        renderizar();

 }
}

function renderizar() {

    lista.innerHTML = "";
    tarefas.forEach(function(item) {

        let li = document.createElement ("li");
        li.textContent = item.tarefa;
        lista.appendChild (li);

        let btnExcluir = document.createElement ("button")
        btnExcluir.innerText = "❌​"
        li.appendChild
        btnExcluir.addEventListener ("click", function(e) {

            e.stopPropagation();

            tarefas = tarefas.filter (function(t) {

                return t.id !== item.id

   })

   renderizar();

  })
 });
}
