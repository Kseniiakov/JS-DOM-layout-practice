"use strict";
function createMain(...card) {
    const main = document.createElement('main');

    const h2 = document.createElement('h2');
    h2.textContent = 'ПОПУЛЯРНЫЕ ТОВАРЫ';

    const popularProducts = document.createElement('section');
    popularProducts.id = 'popular-products';
    main.append(popularProducts);
    popularProducts.append(h2, ...card);

    createSite(main);
};