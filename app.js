document.getElementById('continue-button').addEventListener('click', function () {
    document.querySelector('.welcome-page').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
});

document.getElementById('task-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        li.textContent = taskText;
        const button = document.createElement('button');
        button.textContent = 'Delete';
        button.addEventListener('click', function () {
            taskList.removeChild(li);
        });
        li.appendChild(button);
        taskList.appendChild(li);
        taskInput.value = '';
    }
});
