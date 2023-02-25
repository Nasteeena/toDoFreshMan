"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTodo = void 0;
const elements_js_1 = require("./elements.js");
const index_js_1 = require("../index.js");
function addTodo(text) {
    if (text !== '') {
        let task = text.trim();
        let newtask = new Task(task, Math.random(), false, elements_js_1.STATUS.TO_DO);
        elements_js_1.toDoArr.push(newtask);
    }
    else {
        return;
    }
    (0, index_js_1.render)();
}
exports.addTodo = addTodo;
class Task {
    constructor(text, id, checked, status) {
        this.text = text;
        this.id = id;
        this.checked = checked;
        this.status = status;
        this.text = text,
            this.id = id,
            this.checked = checked,
            this.status = status;
    }
}
