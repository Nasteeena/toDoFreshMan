"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = void 0;
const index_js_1 = require("../index.js");
const elements_js_1 = require("./elements.js");
function deleteTask(task) {
    let res = elements_js_1.toDoArr.findIndex(function (item) {
        return item.text === task;
    });
    elements_js_1.toDoArr.splice(res, 1);
    (0, index_js_1.render)();
}
exports.deleteTask = deleteTask;
