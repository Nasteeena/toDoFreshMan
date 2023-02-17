"use strict";
exports.__esModule = true;
exports.render = void 0;
var elements_js_1 = require("./modules/elements.js");
var add_js_1 = require("./modules/add.js");
var create_js_1 = require("./modules/create.js");
elements_js_1.elements.form.addEventListener('submit', function (event) {
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
