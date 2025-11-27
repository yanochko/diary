document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Скрипт загружен');

    const form = document.getElementById('task-form');
    const tasksList = document.getElementById('tasks-list');

    // Проверка наличия элементов
    if (!form) {
        console.error('❌ Форма не найдена!');
        return;
    }
    if (!tasksList) {
        console.error('❌ Список задач не найден!');
        return;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('📝 Форма отправлена');

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
        console.log('✅ Задача добавлена');

        // Очищаем форму
        titleInput.value = '';
        descriptionInput.value = '';

        // Добавляем обработчик удаления
        const deleteBtn = taskCard.querySelector('.btn-delete');
        if (deleteBtn) {
            deleteBtn.addEventListener('click', function() {
                taskCard.remove();
                console.log('🗑️ Задача удалена');
            });
        }
    });
});