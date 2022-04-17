"use strict";

function createDimensions(dimensionsParam) {
    const dimensionsWrapper = document.createElement('div');
    dimensionsWrapper.classList.add('hidden');

    const dimensionsName = document.createElement('div');
    dimensionsName.classList.add('dimensions-name');
    dimensionsName.textContent = 'Размеры:';

    const dimensionsContentWrapper = document.createElement('div');
    dimensionsContentWrapper.classList.add('dimensions-content-wrapper');

    const dimensionsWidth = document.createElement('div');
    dimensionsWidth.textContent = `Ширина ${dimensionsParam.width} мм`;
    const dimensionsHeight = document.createElement('div');
    dimensionsHeight.textContent = `Высота ${dimensionsParam.height} мм`;
    const dimensionsDepth = document.createElement('div');
    dimensionsDepth.textContent = `Глубина ${dimensionsParam.depth} мм`;

    dimensionsContentWrapper.append(dimensionsWidth, dimensionsHeight, dimensionsDepth);

    dimensionsWrapper.append(dimensionsName,dimensionsContentWrapper);
    return dimensionsWrapper;
}