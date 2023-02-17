import { toDoArr, elements } from "./modules/elements.js";
import { addTodo } from "./modules/add.js";
import { createEl } from "./modules/create.js";

elements.form.addEventListener('submit', (event) => {
    event.preventDefault();
    addTodo(elements.inputMessage.value);
    elements.inputMessage.value = '';
});

export function render() {
    elements.list.innerHTML = '';
    toDoArr.forEach(function(item){
        createEl(item);
    })
}



