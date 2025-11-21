import '/src/style/main.scss';

const form = document.querySelector('form');
const input = form.querySelector('.form-control');
const todoLists = document.querySelector('.todo-lists');
const btn = form.querySelector('.btn-submit');

form.addEventListener('submit', e => {
    e.preventDefault();
});

input.addEventListener('input', () => {
    input.value ? btn.disabled = false : btn.disabled = true;
});

