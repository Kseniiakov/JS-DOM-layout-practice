"use strict";
function createSite() {
    const body = document.querySelector('body');

    const myHeader = createHeader();

    const main = document.createElement('main');
    body.append(myHeader, main);
}

createSite();