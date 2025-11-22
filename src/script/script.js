import '/src/style/main.scss';

const form = document.querySelector('form');
const input = form.querySelector('.form-control');
const todoLists = document.querySelector('.todo-lists');
const btn = form.querySelector('.btn-submit');

let index = 2;

let tasks = [
    { id: 0, text: "Изучить JavaScript", completed: false },
    { id: 1, text: "Сделать todo list", completed: true }
];

const renderTodo = () => {
    todoLists.innerHTML = tasks.map((todo, i) => {
        return `
        <div class="todo-text d-flex align-items-center justify-content-between p-3 mb-2 bg-white rounded shadow-sm">
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
    tasks.push({
        id: index++,
        text: input.value,
        disabled: false
    });
    form.reset();
    renderTodo();
});

input.addEventListener('input', () => {
    input.value ? btn.disabled = false : btn.disabled = true;
});

renderTodo()