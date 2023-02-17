import { toDoArr, elements } from "./modules/elem.js";
import { addTodo } from "./modules/addTask.js";
import { createEl } from "./modules/createEl.js";

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



