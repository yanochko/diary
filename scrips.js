const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const taskTitleInput = document.getElementById('task-title');
const taskDescriptionInput = document.getElementById('task-description');

taskForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const title = taskTitleInput.value.trim();
  const description = taskDescriptionInput.value.trim();

  if (!title) return;

  const taskCard = document.createElement('div');
  taskCard.classList.add('task-card');
  taskCard.innerHTML = `
    <h3>${title}</h3>
    <p>${description || 'Без описания'}</p>
    <button class="delete-btn">Удалить</button>
  `;

  taskList.appendChild(task