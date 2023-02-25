"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEl = void 0;
const change_js_1 = require("./change.js");
const elements_js_1 = require("./elements.js");
const deleteTask_js_1 = require("./deleteTask.js");
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
    input.classList.add('inputList');
    newEl.prepend(input, label, cross);
    elements_js_1.elements.list.append(newEl);
    input.addEventListener('change', (event) => {
        event.preventDefault();
        if (input.checked) {
            element.status = elements_js_1.STATUS.DONE;
            element.checked = true;
        }
        else {
            element.status = elements_js_1.STATUS.TO_DO;
            element.checked = false;
        }
        (0, change_js_1.changeStatus)(element.status, label, input);
    });
    cross.addEventListener('click', () => {
        (0, deleteTask_js_1.deleteTask)(element.text);
    });
    (0, change_js_1.changeStatus)(element.status, label, input);
}
exports.createEl = createEl;
