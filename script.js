const form = document.getElementById('formulario')
const list = document.getElementById('lista')


form.addEventListener('submit', function(event){
    event.preventDefault()

    const input = {
        tarefa: document.getElementById('tarefaInput').value,
        categoria: document.getElementById('categoriaInput').value,
        prioridade: document.querySelector('input[name=prioridade]:checked').value,
        dataInicio: document.getElementById('dataInicio').value,
        dataFim: document.getElementById('dataFim').value,
        notas: document.getElementById('notasInput').value
    
    }
    //Adicionar Tarefa
    const item = document.createElement('li')
    item.classList.add('itemlista')
    item.innerHTML = `
            <div class='itemlista_conteudo'>
                <h2> ${input.tarefa} </h2>
                <p> ${input.categoria} </p>
                <p> ${input.prioridade} </p>
                <p> ${input.dataInicio} - ${input.dataFim}</p>
                <p> ${input.notas} </p>
            </div>
            <div class='itemlista_botao'>
                <p class='concluir'> ✅</p>
                <p class="excluir">🗑️</p>
                
            </div>
        
    `
    list.appendChild(item)
    form.reset()
    //Remover Tarefa
    item.querySelector('.excluir').addEventListener('click', () => {
        item.remove();
    });
    item.querySelector('.concluir').addEventListener('click', () => {
        item.style.backgroundColor = "green";
    });

    

    
})