"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeStatus = void 0;
const elements_js_1 = require("./elements.js");
function changeStatus(status, element, checkbox) {
    if (status === elements_js_1.STATUS.DONE) {
        element.style.color = 'black';
        element.style.textDecoration = 'line-through';
        checkbox.checked = true;
    }
    else if (status === elements_js_1.STATUS.TO_DO) {
        element.style.color = 'grey';
        element.style.textDecoration = 'none';
        checkbox.checked = false;
    }
}
exports.changeStatus = changeStatus;
