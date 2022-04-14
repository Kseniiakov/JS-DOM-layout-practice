"use strict";
function createSite() {
    const body = document.querySelector('body');

    const header = document.createElement('header');
    header.id = 'primary-header';

    const main = document.createElement('main');
    body.append(header, main);

    createHeader(header);
}

createSite();