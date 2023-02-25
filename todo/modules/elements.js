"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDoArr = exports.STATUS = exports.elements = void 0;
const elements = {
    form: document.querySelector('.js-form'),
    inputMessage: document.querySelector('.js-todo-input'),
    list: document.querySelector('.js-todo-list'),
};
exports.elements = elements;
const STATUS = {
    TO_DO: 'To do',
    DONE: 'Done',
};
exports.STATUS = STATUS;
let toDoArr = [];
exports.toDoArr = toDoArr;
