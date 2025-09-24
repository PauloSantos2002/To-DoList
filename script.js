const form = document.getElementById('formulario')
const list = document.getElementById('lista')

form.addEventListener('submit', function(event){
    event.preventDefault()
    
    const item = document.createElement('li')
    item.classList.add('itemlista')
    item.innerHTML = `
            <div class='itemlista_conteudo'>
                <h2> ${form.tarefa.value} </h2>
                <p> ${form.categoria.value} </p>
                <p> ${form.prioridade.value} </p>
                <p> ${form.data.value} </p>
                <p> ${form.notas.value} </p>
            </div>
            <div class='itemlista_botao'>
                <p class='concluir'> ✅</p>
                <p class="excluir">🗑️</p>
                
            </div>
        
    `

     item.querySelector('.excluir').addEventListener('click', () => {
        item.remove();
    });
    list.appendChild(item)
    form.reset()
    
})