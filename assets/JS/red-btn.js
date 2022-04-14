"use strict";
function createRedButton(parentTag) {
    const redBtn = document.createElement('a');
    redBtn.href = '#';
    redBtn.classList.add('red-btn');
    redBtn.textContent = 'Заказать звонок';
    parentTag.append(redBtn);
}