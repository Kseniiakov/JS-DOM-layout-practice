"use strict";
function createHeader(myHeader) {
    const imgLogo = document.createElement('img');
    imgLogo.src = './imgs/logo.svg';
    imgLogo.alt = 'logo';
    myHeader.append(imgLogo);

    createSearch(myHeader)
}
