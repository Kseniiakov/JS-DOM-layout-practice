"use strict";
function createButton(text, link, className, classNameActive) {
    const redBtn = document.createElement('a');
    redBtn.href = link;
    redBtn.classList.add(className);
    redBtn.textContent = text;

    redBtn.addEventListener('mouseenter', (event) => {
        event.target.classList.add(classNameActive);
    });

    redBtn.addEventListener('mouseleave', (event) => {
        event.target.classList.remove(classNameActive);
    });
    
    return redBtn;
};