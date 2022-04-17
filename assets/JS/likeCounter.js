"use strict";

function likeCounter() {
    let counter = 0;
    const countDiv = document.querySelector('#count');
    countDiv.textContent = `${counter}`;

    const iconLike = document.querySelectorAll('.icon-like-container');

    iconLike.forEach((elem) => {
            elem.addEventListener('click', (event) => {
                const classList = event.currentTarget.lastChild.classList;
                const classArray = Array.from(classList);

                const isClassName = classArray.some((value) => {
                    if(value === 'display-click') {
                        return true;
                    } else {
                        return false;
                    }
                })
                if(isClassName === false) {
                    counter++;
                    event.currentTarget.firstChild.classList.add('hidden-click');
                    event.currentTarget.lastChild.classList.add('display-click');
                } else {
                    counter--;
                    event.currentTarget.firstChild.classList.remove('hidden-click');
                    event.currentTarget.lastChild.classList.remove('display-click');
                }

                countDiv.textContent = counter;
        })
    }
    
    )};