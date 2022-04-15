"use strict";

async function createCard() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/fd-freshjs/serve-json/main/mebel.json');
        const data = await response.json();
        
        const cardContainer = document.createElement('article');
        cardContainer.classList.add('card-container');

        const cardImage = document.createElement('img');
        cardImage.src = `https://github.com/fd-freshjs/serve-json/raw/main/assets/images/mebel/${data.data[0].code}.png`;
        cardImage.alt = `${data.data[0].code}`;

        const cardHeader = document.createElement('h4');
        cardHeader.textContent = `${data.data[0].name}`;

        const price = document.createElement('p');
        price.classList.add('card-price');
        price.textContent = `${data.data[0].price.current}`;

        const priceOld = document.createElement('p');
        priceOld.classList.add('card-price-old');
        priceOld.textContent = `${data.data[0].price.old}`;

        const btnContainer = document.createElement('div');
        btnContainer.classList.add('btn-container');

        const cardBtn = createButton('КУПИТЬ', '#', 'card-btn', 'card-btn-active');
        const iconLike = '<svg width="34" height="29" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0001 29C16.6794 29.0066 16.3648 28.8764 16.098 28.6266L2.6297 15.2561C-0.87494 11.7696 -0.87494 6.09992 2.6297 2.60068C4.51207 0.842412 6.73304 -0.0651634 8.99399 -1.92153e-05C11.2564 -0.0595561 13.4775 0.854693 15.3583 2.61966L17.0001 4.24589L18.6419 2.61966C22.1511 -0.866919 27.8613 -0.866919 31.3705 2.61966C34.8796 6.10624 34.8796 11.7696 31.3705 15.2751L17.9067 28.6266C17.6383 28.8766 17.3222 29.0067 17.0001 29ZM8.99399 2.53107C7.37429 2.49605 5.78587 3.15861 4.44292 4.42939C1.93058 6.92252 1.93058 10.9786 4.44292 13.4717L17.0001 25.9437L29.5618 13.4591C32.0696 10.9659 32.0696 6.90987 29.5618 4.41674C27.054 1.92361 22.9675 1.8983 20.4506 4.42939L17.9067 6.96049C17.6378 7.2038 17.3246 7.3332 17.0046 7.3332C16.6846 7.3332 16.3714 7.2038 16.1025 6.96049L13.5315 4.42939C12.1923 3.16269 10.6091 2.50035 8.99399 2.53107Z" fill="#E13B3F"/></svg>';
        
        const iconLikeContain = document.createElement('div');
        iconLikeContain.classList.add('icon-like-container');
        iconLikeContain.innerHTML = iconLike;

        cardBtn.insertAdjacentElement('afterend', iconLikeContain);
        btnContainer.append(cardBtn, iconLikeContain);

        iconLikeContain.firstChild.addEventListener('mouseenter', () => {
            iconLikeContain.innerHTML = '<svg width="34" height="29" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0001 29C16.6794 29.0066 16.3648 28.8764 16.098 28.6266L2.6297 15.2561C-0.87494 11.7696 -0.87494 6.09992 2.6297 2.60068C4.51207 0.842412 6.73304 -0.0651634 8.99399 -1.92155e-05C11.2564 -0.0595561 13.4775 0.854694 15.3583 2.61966L17.0001 4.24589L18.6419 2.61966C22.1511 -0.866919 27.8613 -0.866919 31.3705 2.61966C34.8796 6.10624 34.8796 11.7696 31.3705 15.2751L17.9067 28.6266C17.6383 28.8766 17.3222 29.0067 17.0001 29ZM8.99399 2.53107C7.37429 2.49605 5.78588 3.15861 4.44292 4.42939C1.93058 6.92252 1.93058 10.9786 4.44292 13.4717L1 9.5L5.5 2L12.5 2.53107L17.0046 7.3332L23 1.5L30 4L33 10L29.5618 13.4591C32.0696 10.9659 32.0696 6.90987 29.5618 4.41674C27.054 1.92361 22.9675 1.8983 20.4506 4.42939L17.9067 6.96049C17.6378 7.2038 17.3246 7.3332 17.0046 7.3332C16.6846 7.3332 16.3714 7.2038 16.1025 6.96049L13.5315 4.42939C12.1923 3.16269 10.6091 2.50035 8.99399 2.53107Z" fill="#E13B3F"/></svg>'
        });
        iconLikeContain.firstChild.addEventListener('mouseleave', () => {
            iconLikeContain.innerHTML = iconLike;
        });

        cardContainer.append(cardImage, cardHeader, price, priceOld, btnContainer);

        createMain(cardContainer);
        
    } catch(e) {
        console.error(e);
    };
};


createCard();