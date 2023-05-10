"use strict"

const card = {
    id: 1,
    poster: 'poster.png',
    title: 'Тайная жизнь домашних животных 2',
    subtitle: '',
    price: {
        value: 50,
        currency: 'руб.'
    },
    sale: 10,
    type: ['blue-ray'],
    rating: 3.5,
}

const sale = 
card.sale ? '<img class="poster__item poster__item_sale" src="images/sales.png" alt="sale">' : ''


document.body.innerHTML += `

<div class="card">
        <div class="card__poster poster">
            <img class="poster__img" src="images/${card.poster}" alt="Тайная жизнь домашних животных 2">
            ${sale}
            <img class="poster__item poster__item_type" src="images/type.png" alt="blu-ray 3d">
        </div>
        <div class="card__heading heading">
            <h3 class="heading__title" >Тайная жизнь <br> домашних животных 2</h3>
            <p class="heading__subtitle"></p>
        </div>
        <div class="card__price">
            <span class="card__price-item">45,00 руб</span>
            <span class="card__price-item card__price-item_old">50,00 руб</span>
        </div>
        <div class="card__rating">
            <span class="material-icons">star</span>
            <span class="material-icons">star</span>
            <span class="material-icons">star</span>
            <span class="material-icons">star_half</span>
            <span class="material-icons">star_border</span>
        </div>
        <button class="card__button"></button>
    </div>

`