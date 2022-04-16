"use strict";

async function createCard() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/fd-freshjs/serve-json/main/mebel.json');
        const data = await response.json();
        const arrayProducts = data.data;

        const resultProducts = arrayProducts.map((product) => {
            const cardContainer = document.createElement('article');
            cardContainer.classList.add('card-container');

            const discountSvg = '<svg width="63" height="30" viewBox="0 0 63 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M60.313 1.91569C59.0393 0.777219 57.3456 0.149655 55.5444 0.149366L15.2846 0.147555C13.3357 0.148042 11.4816 0.899575 10.2033 2.21191L1.76826 10.8567C-0.449645 13.1214 -0.449884 16.5368 1.76722 18.8006L10.2025 27.447C11.4816 28.7593 13.3343 29.512 15.2841 29.5124L55.5431 29.5135C57.1584 29.513 58.6426 29.003 59.8059 28.1526C61.3202 27.0457 62.289 25.362 62.2893 23.4806L62.2907 6.18151C62.2899 4.57045 61.5886 3.05545 60.313 1.91569ZM12.568 11.425L12.5841 11.4176L12.5895 11.4344L12.568 11.425ZM6.55521 15.4021C6.53577 15.3465 6.52773 15.2891 6.53043 15.23C6.53724 15.2877 6.54551 15.3452 6.55521 15.4021ZM13.1071 14.8303C13.1077 16.0029 12.0425 16.9578 10.7313 16.9572C9.42142 16.9572 8.35547 16.0031 8.35541 14.8305C8.35507 14.2624 8.60218 13.7285 9.05164 13.3265C9.11017 13.275 9.16999 13.2261 9.23192 13.1809C9.6548 12.8717 10.1782 12.7042 10.7317 12.7042C12.0419 12.7045 13.1076 13.6583 13.107 14.8303L13.1071 14.8303Z" fill="#E13B3F"/></svg>';
            
            const sale = product.sale;

            const bestSellers = product.isBestseller;
            
            const label = createLabel(discountSvg, sale, bestSellers);
            cardContainer.append(label);

            const cardImage = document.createElement('img');
            cardImage.src = `https://github.com/fd-freshjs/serve-json/raw/main/assets/images/mebel/${product.code}.png`;
            cardImage.alt = `${product.code}`;
            cardImage.classList.add('card-image');

            const cardHeader = document.createElement('h4');
            cardHeader.textContent = `${product.name}`;

            const price = document.createElement('div');
            price.classList.add('card-price');
            price.textContent = `${product.price.current} руб.`;

            const priceOld = document.createElement('p');
            priceOld.classList.add('card-price-old');
            priceOld.textContent = `${product.price.old} руб.`;

            price.insertAdjacentElement('afterbegin', priceOld);

            const btnContainer = document.createElement('div');
            btnContainer.classList.add('btn-container');
    
            const cardBtn = createButton('КУПИТЬ', '#', 'card-btn', 'card-btn-active');
            const iconLike = '<svg width="34" height="29" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0001 29C16.6794 29.0066 16.3648 28.8764 16.098 28.6266L2.6297 15.2561C-0.87494 11.7696 -0.87494 6.09992 2.6297 2.60068C4.51207 0.842412 6.73304 -0.0651634 8.99399 -1.92153e-05C11.2564 -0.0595561 13.4775 0.854693 15.3583 2.61966L17.0001 4.24589L18.6419 2.61966C22.1511 -0.866919 27.8613 -0.866919 31.3705 2.61966C34.8796 6.10624 34.8796 11.7696 31.3705 15.2751L17.9067 28.6266C17.6383 28.8766 17.3222 29.0067 17.0001 29ZM8.99399 2.53107C7.37429 2.49605 5.78587 3.15861 4.44292 4.42939C1.93058 6.92252 1.93058 10.9786 4.44292 13.4717L17.0001 25.9437L29.5618 13.4591C32.0696 10.9659 32.0696 6.90987 29.5618 4.41674C27.054 1.92361 22.9675 1.8983 20.4506 4.42939L17.9067 6.96049C17.6378 7.2038 17.3246 7.3332 17.0046 7.3332C16.6846 7.3332 16.3714 7.2038 16.1025 6.96049L13.5315 4.42939C12.1923 3.16269 10.6091 2.50035 8.99399 2.53107Z" fill="#E13B3F"/></svg><svg width="34" height="29" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0001 29C16.6794 29.0066 16.3648 28.8764 16.098 28.6266L2.6297 15.2561C-0.87494 11.7696 -0.87494 6.09992 2.6297 2.60068C4.51207 0.842412 6.73304 -0.0651634 8.99399 -1.92155e-05C11.2564 -0.0595561 13.4775 0.854694 15.3583 2.61966L17.0001 4.24589L18.6419 2.61966C22.1511 -0.866919 27.8613 -0.866919 31.3705 2.61966C34.8796 6.10624 34.8796 11.7696 31.3705 15.2751L17.9067 28.6266C17.6383 28.8766 17.3222 29.0067 17.0001 29ZM8.99399 2.53107C7.37429 2.49605 5.78588 3.15861 4.44292 4.42939C1.93058 6.92252 1.93058 10.9786 4.44292 13.4717L1 9.5L5.5 2L12.5 2.53107L17.0046 7.3332L23 1.5L30 4L33 10L29.5618 13.4591C32.0696 10.9659 32.0696 6.90987 29.5618 4.41674C27.054 1.92361 22.9675 1.8983 20.4506 4.42939L17.9067 6.96049C17.6378 7.2038 17.3246 7.3332 17.0046 7.3332C16.6846 7.3332 16.3714 7.2038 16.1025 6.96049L13.5315 4.42939C12.1923 3.16269 10.6091 2.50035 8.99399 2.53107Z" fill="#E13B3F"/></svg>';
    
            const iconLikeContain = document.createElement('div');
            iconLikeContain.classList.add('icon-like-container');
            iconLikeContain.innerHTML = iconLike;
            iconLikeContain.lastChild.classList.add('hidden');
            cardBtn.insertAdjacentElement('afterend', iconLikeContain);

            const popup = document.createElement('div');
            popup.classList.add('hidden');
            popup.textContent = 'Добавить в избранное';

            btnContainer.append(cardBtn, iconLikeContain, popup);

            // hover like icon
    
            iconLikeContain.addEventListener('mouseenter', (event) => {
                console.log(event.target.nextElementSibling);
                event.target.firstChild.classList.add('hidden');
                event.target.lastChild.classList.add('display');
                event.target.nextElementSibling.classList.add('icon-like-popup');
            });
            iconLikeContain.addEventListener('mouseleave', (event) => {
                event.target.firstChild.classList.remove('hidden');
                event.target.lastChild.classList.remove('display');
                event.target.nextElementSibling.classList.remove('icon-like-popup');
            });

            // hover card

            cardContainer.addEventListener('mouseenter', (event) => {

            });
    
            cardContainer.append(cardImage, cardHeader, price, btnContainer);
            return cardContainer;
        });

        createMain(...resultProducts);
        
    } catch(e) {
        console.error(e);
    };
};


createCard();