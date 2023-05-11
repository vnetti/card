import CardItem from "./CardItem.js";

export default function (cards) {
  return `<div class="cards">${cards.map(card => CardItem(card)).join('')}</div>`
}