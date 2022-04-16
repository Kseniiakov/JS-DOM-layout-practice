"use strict";

function createLabel(svg, text, isBestseller) {
    const labelContainer = document.createElement('div');
    labelContainer.classList.add('label-container');

    const sale = document.createElement('div');
    sale.classList.add('sale');

    sale.innerHTML = svg;

    const textSale = document.createElement('p');
    textSale.textContent = `-${text}%`;

    sale.append(textSale);
    labelContainer.append(sale);

    if(isBestseller === true) {
        const bestSeller = document.createElement('div');
        bestSeller.textContent = 'ХИТ';
        bestSeller.classList.add('best-seller');
        labelContainer.append(bestSeller);
    }

    return labelContainer;
}