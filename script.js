document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const task = input.value.trim();
        if (task !== '') {
            addTask(task);
            input.value = '';
        }
    });

    function addTask(task) {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = task;
        span.className = 'todo-text';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
            list.removeChild(li);
        };

        li.appendChild(span);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    }
});