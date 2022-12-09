console.clear();

const [addBtn] = document.getElementsByClassName('add-btn');
const [inputText] = document.getElementsByClassName('text-input');
const [tasksList] = document.getElementsByClassName('tasks-list');

addBtn.addEventListener('click', ($event) => {
  createNewTask();
});

function createNewTask() {
  const li = document.createElement('li');
  const checkBoxInput = document.createElement('input');
  const textNode = document.createTextNode(inputText.value);
  checkBoxInput.setAttribute('type', 'checkbox');
  li.appendChild(checkBoxInput);
  li.appendChild(textNode);
  li.setAttribute('class', 'task-item');
  li.onclick = deleteTask;
  tasksList.append(li);
  inputText.value = '';
}

function deleteTask($event) {
  $event.target.remove();
}
