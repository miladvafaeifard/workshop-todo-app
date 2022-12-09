console.clear();

const [addBtn] = document.getElementsByClassName('add-btn');
const [inputText] = document.getElementsByClassName('text-input');

addBtn.addEventListener('click', $event => {
    inputText.value = '';
});
