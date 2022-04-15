"use strict";

function iconTextDiv(iconSvgString, text, className, classNameElem) {
    const container = document.createElement('a');
    container.href = '#';
    container.classList.add(className, classNameElem);

    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');
    iconContainer.innerHTML = iconSvgString;

    const pText = document.createElement('p');
    pText.href = '#';    
    pText.textContent = text;

    container.append(iconContainer, pText);

    container.addEventListener('mouseenter', () => {
        container.classList.add(`${classNameElem}-active`);
        container.querySelector('svg').classList.add(`${classNameElem}-svg-active`);
    });

    container.addEventListener('mouseleave', () => {
        container.classList.remove(`${classNameElem}-active`);
        container.querySelector('svg').classList.remove(`${classNameElem}-svg-active`);
    });

    return container;
}