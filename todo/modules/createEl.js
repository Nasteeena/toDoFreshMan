import { changeStatus } from "./changeStatus.js";
import { elements, STATUS } from "./elem.js";
import { deleteTask } from "./delete.js";

function createEl(element) {
    const newEl = document.createElement('li');
    const cross = document.createElement('button');
    const input = document.createElement('input');
    const label = document.createElement('label');

    input.setAttribute('id', `${element.id}`);
    input.setAttribute('type', `checkbox`);
    cross.textContent = 'x';
    label.setAttribute('for', `${element.id}`);
    label.textContent = element.text;
    input.classList.add('inputList')
    newEl.prepend(input, label, cross);
    elements.list.append(newEl);

    input.addEventListener('change', (event) => {
        event.preventDefault();
        if(event.target.checked) {
            element.status = STATUS.DONE
            element.checked = true;
        } else  {
            element.status = STATUS.TO_DO
            element.checked = false;
        }
        changeStatus(element.status, label, input);
    })

    cross.addEventListener('click', () => {
        deleteTask(element.text)
    });

    changeStatus(element.status, label, input);
}

export {createEl}