"use strict";
exports.__esModule = true;
exports.deleteTask = void 0;
var main_js_1 = require("../main.js");
var elements_js_1 = require("./elements.js");
function deleteTask(task) {
    var res = elements_js_1.toDoArr.findIndex(function (item) {
        return item.text === task;
    });
    elements_js_1.toDoArr.splice(res, 1);
    (0, main_js_1.render)();
}
exports.deleteTask = deleteTask;
