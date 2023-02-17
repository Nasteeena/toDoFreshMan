"use strict";
exports.__esModule = true;
exports.createEl = void 0;
var change_js_1 = require("./change.js");
var elements_js_1 = require("./elements.js");
//import { deleteTask } from "./deleteTask.js";
function createEl(element) {
    var newEl = document.createElement('li');
    var cross = document.createElement('button');
    var input = document.createElement('input');
    var label = document.createElement('label');
    input.setAttribute('id', "".concat(element.id));
    input.setAttribute('type', "checkbox");
    cross.textContent = 'x';
    label.setAttribute('for', "".concat(element.id));
    label.textContent = element.text;
    input.classList.add('inputList');
    newEl.prepend(input, label, cross);
    elements_js_1.elements.list.append(newEl);
    input.addEventListener('change', function (event) {
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
    /*   cross.addEventListener('click', () => {
           deleteTask(element.text)
       }); */
    (0, change_js_1.changeStatus)(element.status, label, input);
}
exports.createEl = createEl;
