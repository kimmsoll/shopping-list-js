const button = document.querySelector(".plusBtn");
const form = document.querySelector("form");
const input = document.querySelector("input");
const items = document.querySelector(".itemList");

function paintItems(){
    const item = document.createElement("li");
    const itemText = document.createElement("span");
    const delBtn = document.createElement("button");
    itemText.innerHTML = input.value;
    delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    items.appendChild(item);
    item.appendChild(itemText);
    item.appendChild(delBtn);
}

function saveItems(){
    const currentList = localStorage.getItem("shoppingList");
    document.getElementById("shoppingList").value = currentList;
}

function loadItems(){
localStorage.setItem("shoppingList", document.getElementById("shoppingList").value);
saveItems();
};

button.addEventListener("click", paintItems);

loadItems();