'use strict';

const form = document.getElementById('todo-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskText = input.value.trim();
  if (taskText === '') return;

  const listItem = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const textSpan = document.createElement('span');
  textSpan.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';

  checkbox.addEventListener('change', () => {
    listItem.classList.toggle('done');
  });

  deleteButton.addEventListener('click', () => {
    list.removeChild(listItem);
  });

  listItem.appendChild(checkbox);
  listItem.appendChild(textSpan);
  listItem.appendChild(deleteButton);

  list.appendChild(listItem);

  input.value = '';
});