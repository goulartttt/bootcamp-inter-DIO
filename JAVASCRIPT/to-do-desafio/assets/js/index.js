function adicionarTarefa() {
    const input = document.getElementById('tarefaInput');
    const listaDeTarefas = document.getElementById('listaDeTarefas');
  
    if (input.value.trim() !== '') {
      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'checkbox';
  
      checkbox.addEventListener('change', function () {
        if (this.checked) {
          li.classList.add('completed');
        } else {
          li.classList.remove('completed');
        }
      });
  
      li.appendChild(checkbox);
      li.appendChild(document.createTextNode(input.value));
      listaDeTarefas.appendChild(li);
  
      input.value = '';
    }
  }
  