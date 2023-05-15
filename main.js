"use strict"
// import App from './App.js'

function App () {

    const cards = [
        {
        id: 1,
        poster: 'the_secret_life_of_pets_2.jpg',
        title: 'Тайная жизнь домашних животных 2',
        subtitle: '',
        price: {
            value: 50,
            currency: 'руб.'
        },
        sale: 10,
        type: ['blue-ray'],
        rating: 3.5,
        },
        {
        id: 2,
        poster: 'toy_story_4.jpg',
        title: 'История игрушек 4',
        subtitle: 'Приключения Вилкинса',
        price: {
            value: 60,
            currency: 'руб.'
        },
        sale: 10,
        type: ['blue-ray'],
        rating: 4,
        },
        {
        id: 3,
        poster: 'ferdinand.jpg',
        title: 'Фердинанд',
        subtitle: 'Побег из коровника',
        price: {
            value: 40,
            currency: 'руб.'
        },
        sale: 10,
        type: ['blue-ray'],
        rating: 3,
        },
    ]

    function CardItem (card) {

    const sale = card.sale ?
        '<img class="poster__item poster__item_sale" src="images/sales.png" alt="sale">' : ''

    const type = card.type[0] === 'blue-ray' ?
        '<img class="poster__item poster__item_type" src="images/type.png" alt="blu-ray 3d">' : ''

    const priceWithSale = card.sale ?
        `<span class="card__price-item">
        ${Math.round(card.price.value - card.price.value * (card.sale / 100))},00 ${card.price.currency}
    </span>` : ''

    const rating = () => {
        let result = ''
        for (let i = 1; i <= 5; i++) {
        let star =
            i <= card.rating
            ? 'star'
            : i - card.rating === 0.5
                ? 'star_half'
                : 'star_border'
        result += `<span class="material-icons">${star}</span>`
        }
        return result
    }

    return `<div class="card">
        <div class="card__poster poster">
        <img class="poster__img" src="images/${card.poster}" alt=${card.poster}>
        ${sale}
        ${type}
        </div>
        <div class="card__heading heading">
        <h3 class="heading__title" >${card.title}</h3>
        <p class="heading__subtitle">${card.subtitle}</p>
        </div>
        <div class="card__price">
        ${priceWithSale}
        <span class="card__price-item ${card.sale && 'card__price-item_old'}">${card.price.value},00 ${card.price.currency}</span>
        </div>
        <div class="card__rating">
            ${rating()}
        </div>
        <button class="card__button"></button>
    </div>`
    }  

    function Card (cards) {
        return `<div class="cards">${cards.map(card => CardItem(card)).join('')}</div>`
    }
    const root = document.getElementById('root')

    return Card(cards)
}

root.innerHTML += App()