import '/src/style/main.scss';

const form = document.querySelector('form');
const input = form.querySelector('.form-control');
const todoLists = document.querySelector('.todo-lists');
const btn = form.querySelector('.btn-submit');

let tasks = [
    { id: 1, text: "Изучить JavaScript", completed: false },
    { id: 2, text: "Сделать todo list", completed: true }
];

const renderTodo = () => {
    todoLists.innerHTML = tasks.map((todo, i) => {
        return `
        <div class="todo-text d-flex align-items-center justify-content-between p-3 mb-2 bg-white rounded shadow-sm">
            <span class="task-content fs-5">${todo.text}</span>
            <button class="btn btn-danger btn-sm rounded-circle delete-btn">
                <i class="bi bi-x-lg remuve-todo" data-id="${todo.id}"></i>
            </button>
        </div>
        `;
    }).join(' ');
}

form.addEventListener('submit', e => {
    e.preventDefault();
    renderTodo();
});

input.addEventListener('input', () => {
    input.value ? btn.disabled = false : btn.disabled = true;
});

renderTodo()