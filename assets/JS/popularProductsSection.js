"use strict";

function createSectionPopularProducts(...card) {
    const popularProducts = document.createElement('section');
    popularProducts.id = 'popular-products';

    const headerSectionWrapper = document.createElement('div');
    headerSectionWrapper.classList.add('header-section-wrapper');

    const h2 = document.createElement('h2');
    h2.textContent = 'ПОПУЛЯРНЫЕ ТОВАРЫ';

    const allProductsLink = document.createElement('a');
    allProductsLink.href = '#';
    allProductsLink.textContent = 'Все товары';
    allProductsLink.classList.add('all-products-link');

    headerSectionWrapper.append(h2, allProductsLink);

    const wrapperCards = document.createElement('div');
    wrapperCards.classList.add('wrapper-cards');
    wrapperCards.append(...card);

    popularProducts.append(headerSectionWrapper, wrapperCards);
    
    createMain(popularProducts);
}