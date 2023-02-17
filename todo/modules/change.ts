import { STATUS } from "./elements.js";

function changeStatus(status: string, element: any, checkbox: any) {
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

export {changeStatus}