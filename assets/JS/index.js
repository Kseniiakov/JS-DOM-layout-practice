"use strict";
function createSite(main) {
    const body = document.querySelector('body');

    const myHeader = createHeader();

    body.append(myHeader, main);

    likeCounter();
}