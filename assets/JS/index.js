"use strict";
function createSite(main) {
    const body = document.querySelector('body');

    const myHeader = createHeader();
    myHeader.id = 'primary-header';

    body.append(myHeader, main);

    likeCounter();
}