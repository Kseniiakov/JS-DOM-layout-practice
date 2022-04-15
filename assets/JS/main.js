"use strict";
function createMain(card) {
    const main = document.createElement('main');
    const popularProducts = document.createElement('section');
    popularProducts.id = 'popular-products';
    main.append(popularProducts);
    popularProducts.append(card);
    // for(let i = 0; i < 4; i++) {
        
    // }
    createSite(main);
}