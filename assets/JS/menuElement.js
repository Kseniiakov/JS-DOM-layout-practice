"use strict";

function iconTextDiv(parentTag, iconSvgString, text, className) {
    const container = document.createElement('div');
    container.classList.add('menu-elem-container', className);

    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');
    iconContainer.innerHTML = iconSvgString;

    const pText = document.createElement('p');
    pText.textContent = text;

    container.append(iconContainer, pText);

    parentTag.append(container);
    return container;
}