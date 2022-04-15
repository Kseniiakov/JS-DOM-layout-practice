"use strict";

function createLabel(svg, text) {
    const labelContainer = document.createElement('div');
    labelContainer.classList.add('label-container');
    labelContainer.innerHTML = svg;
    const textSale = document.createElement('p');
    textSale.textContent = `-${text}%`;
    labelContainer.append(textSale);
    return labelContainer;
}