"use strict";
exports.__esModule = true;
exports.addTodo = void 0;
var elements_js_1 = require("./elements.js");
var index_js_1 = require("../index.js");
function addTodo(text) {
    if (text !== '') {
        var task = text.trim();
        var newtask = new Task(task);
        elements_js_1.toDoArr.push(newtask);
    }
    else {
        return;
    }
    (0, index_js_1.render)();
}
exports.addTodo = addTodo;
function Task(text) {
    this.text = text,
        this.id = Date.now(),
        this.checked = false,
        this.status = elements_js_1.STATUS.TO_DO;
}
