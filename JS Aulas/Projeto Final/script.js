// Selecionando elementos do DOM
const form = document.getElementById('form');
const descricaoInput = document.getElementById('descricao');
const listaTarefas = document.getElementById('lista-tarefas');

// Array para armazenar as tarefas
const tarefas = [];

// Adicionando evento de submissão do formulário
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const descricao = descricaoInput.value.trim();
    if (descricao !== '') {
        adicionarTarefa(descricao);
        descricaoInput.value = '';
    }
});

// Função para adicionar tarefa
function adicionarTarefa(descricao) {
    const tarefa = { id: tarefas.length + 1, descricao };
    tarefas.push(tarefa);
    atualizarListaTarefas();
}

// Função para atualizar a lista de tarefas exibida
function atualizarListaTarefas() {
    listaTarefas.innerHTML = '';
    tarefas.forEach(tarefa => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${tarefa.descricao}</span>
            <div>
                <button class="editar" onclick="editarTarefa(${tarefa.id})">Editar</button>
                <button class="remover" onclick="removerTarefa(${tarefa.id})">Remover</button>
            </div>
        `;
        // Adiciona a classe para a animação de fade in
        li.classList.add('fade-in');
        listaTarefas.appendChild(li);
    });
}

// Função para editar uma tarefa
function editarTarefa(id) {
    const novaDescricao = prompt('Digite a nova descrição:');
    const tarefa = tarefas.find(tarefa => tarefa.id === id);
    if (tarefa && novaDescricao !== null) {
        tarefa.descricao = novaDescricao;
        atualizarListaTarefas();
    }
}

// Função para remover uma tarefa
function removerTarefa(id) {
    const index = tarefas.findIndex(tarefa => tarefa.id === id);
    if (index !== -1) {
        // Adiciona a classe para a animação de fade out
        listaTarefas.children[index].classList.add('fade-out');
        setTimeout(() => {
            tarefas.splice(index, 1);
            atualizarListaTarefas();
        }, 500); // Tempo para a animação de fade out terminar (em milissegundos)
    }
}

// Função para obter uma tarefa por ID (não é usada no exemplo final)
// function obterTarefaPorId(id) {
//     const tarefa = tarefas.find(tarefa => tarefa.id === id);
//     if (tarefa) {
//         alert(`Tarefa ${tarefa.id}: ${tarefa.descricao}`);
//     } else {
//         alert("Tarefa não encontrada.");
//     }
// }

// Inicializa a lista de tarefas ao carregar a página
atualizarListaTarefas();
