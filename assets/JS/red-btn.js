"use strict";
function createRedButton(parentTag, text, link) {
    const redBtn = document.createElement('a');
    redBtn.href = link;
    redBtn.classList.add('red-btn');
    redBtn.textContent = text;

    redBtn.addEventListener('mouseenter', () => {
        redBtn.classList.add('red-btn-active');
    });

    redBtn.addEventListener('mouseleave', () => {
        redBtn.classList.toggle('red-btn-active');
    });
    
    parentTag.append(redBtn);
}