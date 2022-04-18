"use strict";
function createMain(resultPopularProd) {
    const main = document.createElement('main');

    main.append(resultPopularProd);
    
    createSite(main);
};