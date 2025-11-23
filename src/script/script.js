import '/src/style/main.scss';

const form = document.querySelector('form');
const input = form.querySelector('.form-control');
const todoLists = document.querySelector('.todo-lists');
const btn = form.querySelector('.btn-submit');

let index = 0;

let tasks = [];

const renderTodo = () => {
    todoLists.innerHTML = tasks.map(todo => {
        return `
        <div class="todo-text  d-flex align-items-center justify-content-between p-3 mb-2 bg-white rounded shadow-sm" data-id=${todo.id}>
            <span class="task-content fs-5">${todo.text}</span>
            <button class="btn btn-danger btn-sm rounded-circle delete-btn">
                <i class="bi bi-x-lg remuve-todo"></i>
            </button>
        </div>

        `;
    }).join(' ');
}

form.addEventListener('submit', e => {
    e.preventDefault();

    tasks.unshift({
        id: index++,
        text: input.value,
        disabled: false,
        date: new Date().getFullYear(),
    });
    form.reset();
    renderTodo();
});

input.addEventListener('input', () => {
    input.value ? btn.disabled = false : btn.disabled = true;
});


todoLists.addEventListener('click', (e) => {
    if (e.target.classList.contains('bi-x-lg')) {
        const taskElement = e.target.closest('.todo-text');
        const taskId = parseInt(taskElement.dataset.id);
        tasks = tasks.filter(task => task.id !== taskId);
        renderTodo();
    }
});

renderTodo()