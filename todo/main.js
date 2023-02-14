const elements = {
    form: document.querySelector('.js-form'),
    inputMessage: document.querySelector('.js-todo-input'),
    list: document.querySelector('.js-todo-list'),
}

const STATUS = {
    TO_DO: 'To do',
    DONE: 'Done',
}

let toDoArr = [];

elements.form.addEventListener('submit', (event) => {
    event.preventDefault();
    addTodo(elements.inputMessage.value);
    elements.inputMessage.value = '';
});

function render() {
    elements.list.innerHTML = '';
    toDoArr.forEach(function(item){
        createEl(item);
    })
}

function addTodo(text) {
    if(text !== '') {
        let task = text.trim();
        let newtask = new Task(task);
        toDoArr.push(newtask);
        console.log(toDoArr)
    } else {
        return
    }
    render();
}

function Task(text) {
    this.text = text,
    this.id = Date.now(),
    this.checked = false, 
    this.status = STATUS.TO_DO
}

function deleteTask(task) {
    let res = toDoArr.findIndex(function(item) {
        return item.text === task;
    })

    toDoArr.splice(res, 1);
    render();
}

function createEl(element) {
    const newEl = document.createElement('li');
    const cross = document.createElement('button');
    const input = document.createElement('input');
    const label = document.createElement('label');

    input.setAttribute('id', `${element.id}`);
    input.setAttribute('type', `checkbox`);
    cross.textContent = 'x';
    label.setAttribute('for', `${element.id}`);
    label.textContent = element.text;
    input.classList.add('inputList')
    newEl.prepend(input, label, cross);
    elements.list.append(newEl);

    input.addEventListener('change', (event) => {
        event.preventDefault();
        if(event.target.checked) {
            element.status = STATUS.DONE
            element.checked = true;
        } else  {
            element.status = STATUS.TO_DO
            element.checked = false;
        }
        changeStatus(element.status, label, input);
    })

    cross.addEventListener('click', () => {
        deleteTask(element.text)
    });

    changeStatus(element.status, label, input);
}



function changeStatus(status, element, checkbox) {
    if(status === STATUS.DONE) {
        element.style.color = 'black';
        element.style.textDecoration = 'line-through';
        checkbox.checked = true;
    } else if(status === STATUS.TO_DO) {
        element.style.color = 'grey';
        element.style.textDecoration = 'none';
        checkbox.checked = false;
    }
}



