const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

function onAdd() {
    const text = input.value;
    if (text === '') {
        input.focus();
        return;
    }
    const item = createItem(text);
    items.appendChild(item);
    item.scrollIntoView({ block: 'center' });
    input.value = '';
    input.focus();
}

let id = 0; //UUID
function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);
    const itemBox = document.createElement("div");
    itemBox.setAttribute("class", "item");
    const name = document.createElement("span");
    name.setAttribute("class", "item__name");
    name.innerHTML = text;
    const delBtn = document.createElement("button");
    delBtn.setAttribute("class", "item__delete");
    delBtn.innerHTML = `<i class="fas fa-trash-alt" data-id=${id}></i>`;      
    itemBox.appendChild(name);
    itemBox.appendChild(delBtn);    
    itemRow.appendChild(itemBox);
    id++;
    return itemRow;
}

addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        onAdd();
    }
});

items.addEventListener('click', event => {
    const id = event.target.dataset.id;
    if (id) {
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
        toBeDeleted.remove();
    }
});