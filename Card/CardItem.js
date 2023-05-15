export default function (card) {

  const sale = card.sale ?
    '<img class="poster__item poster__item_sale" src="images/sales.png" alt="sale">' : ''

  const type = card.type[0] === 'blue-ray' ?
    '<img class="poster__item poster__item_type" src="images/type.png" alt="blu-ray 3d">' : ''

  const priceWithSale = card.sale ?
    `<span class="card__price-item">
    ${card.price.value - card.price.value * (card.sale / 100)},00 ${card.price.currency}
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
