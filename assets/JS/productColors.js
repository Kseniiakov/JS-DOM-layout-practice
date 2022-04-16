"use strict";

function createColorsSection(colors) {
    const colorsWrapper = document.createElement('div');
    colorsWrapper.classList.add('hidden');

    colors.forEach((element) => {
        const color = document.createElement('div');
        color.classList.add('color');
        color.style.backgroundColor = element;

        colorsWrapper.append(color);
    });
    return colorsWrapper;
};