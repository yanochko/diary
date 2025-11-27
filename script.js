document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('task-form');
    const tasksList = document.getElementById('tasks-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const titleInput = document.getElementById('task-title');
        const descriptionInput = document.getElementById('task-description');

        const title = titleInput.value.trim();
        const description = descriptionInput.value.trim();

        if (title === '') {
            alert('Пожалуйста, введите название задачи.');
            return;
        }

        // Создаем карточку задачи
        const taskCard = document.createElement('div');
        taskCard.className = 'task-card';

        taskCard.innerHTML = `
            <h3 class="task-title">${title}</h3>
            ${description ? `<p class="task-description">${description}</p>` : ''}
            <button class="btn-delete">Удалить</button>
        `;

        // Добавляем в список
        tasksList.appendChild(taskCard);

        // Очищаем форму
        titleInput.value = '';
        descriptionInput.value = '';

        // Добавляем обработчик удаления
        const deleteBtn = taskCard.querySelector('.btn-delete');
        if (deleteBtn) {
            deleteBtn.addEventListener('click', function() {
                taskCard.remove();
            });
        }
    });
});