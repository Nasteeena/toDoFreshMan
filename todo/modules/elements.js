"use strict";
exports.__esModule = true;
exports.toDoArr = exports.STATUS = exports.elements = void 0;
var elements = {
    form: document.querySelector('.js-form'),
    inputMessage: document.querySelector('.js-todo-input'),
    list: document.querySelector('.js-todo-list')
};
exports.elements = elements;
var STATUS = {
    TO_DO: 'To do',
    DONE: 'Done'
};
exports.STATUS = STATUS;
var toDoArr = [];
exports.toDoArr = toDoArr;
