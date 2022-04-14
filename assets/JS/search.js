"use strict";

function createSearch(parentTag) {
    const searchForm = document.createElement('form');
    searchForm.classList.add('search-form');
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.name = 'text';
    searchInput.placeholder = 'Поиск';

    const searchBtn = document.createElement('button');
    searchBtn.type = 'submit';
    searchBtn.classList.add('search-btn');
    const searchIcon = document.createElement('img');
    searchIcon.src = './imgs/search.svg';
    searchBtn.append(searchIcon);

    searchForm.append(searchInput, searchBtn);
    parentTag.append(searchForm);
}