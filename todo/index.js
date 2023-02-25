"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
const elements_js_1 = require("./modules/elements.js");
const add_js_1 = require("./modules/add.js");
const create_js_1 = require("./modules/create.js");
elements_js_1.elements.form.addEventListener('submit', (event) => {
    event.preventDefault();
    (0, add_js_1.addTodo)(elements_js_1.elements.inputMessage.value);
    elements_js_1.elements.inputMessage.value = '';
});
function render() {
    elements_js_1.elements.list.innerHTML = '';
    elements_js_1.toDoArr.forEach(function (item) {
        (0, create_js_1.createEl)(item);
    });
}
exports.render = render;
