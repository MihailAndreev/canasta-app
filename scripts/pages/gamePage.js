import cardsUrl from 'svg-cards/svg-cards.svg?url';

const handCards = [
  'club_1',
  'heart_10',
  'spade_king',
  'diamond_queen',
  'heart_7',
  'spade_8',
  'club_9',
  'diamond_3',
  'heart_4',
  'spade_5',
  'club_6',
  'diamond_jack',
  'heart_2',
  'spade_1',
  'joker_red',
  'diamond_5',
  'club_2',
  'heart_8',
  'spade_10',
  'diamond_king',
  'club_7',
  'heart_9',
  'spade_2',
  'diamond_6',
  'club_8',
  'heart_jack',
  'spade_queen',
  'diamond_9',
  'club_10',
  'heart_king',
  'spade_4',
  'diamond_8',
  'club_jack',
  'heart_6',
  'spade_7',
  'diamond_2',
  'club_5',
  'heart_3',
  'spade_9',
  'diamond_7',
  'club_queen',
  'heart_5',
  'spade_6',
  'diamond_10',
  'club_3',
  'heart_1',
  'spade_3',
  'diamond_4',
  'club_4',
  'heart_3',
  'heart_3',
    'club_1',
  'heart_10',
  'spade_king',
  'diamond_queen',
  'heart_7',
  'spade_8',
  'club_9',
  'diamond_3',
  'heart_4',
  'spade_5',
  'club_6',
  'diamond_jack',
  'heart_2',
  'spade_1',
  'joker_red',
  'diamond_5',
  'club_2',
  'heart_8',
  'spade_10',
  'diamond_king',
  'club_7',
  'heart_9',
  'spade_2',
  'diamond_6',
  'club_8',
  'heart_jack',
  'spade_queen',
  'diamond_9',
  'club_10',
  'heart_king',
  'spade_4',
  'diamond_8',
  'club_jack',
  'heart_6',
  'spade_7',
  'diamond_2',
  'club_5',
  'heart_3',
  'spade_9',
  'diamond_7',
  'club_queen',
  'heart_5',
  'spade_6',
  'diamond_10',
  'club_3',
  'heart_1',
  'spade_3',
  'diamond_4',
  'club_4',
  'heart_3',
  'heart_3',
  
  
];

const svgNamespace = 'http://www.w3.org/2000/svg';
const xlinkNamespace = 'http://www.w3.org/1999/xlink';
const maxRowCards = 35;
const maxRedThrees = 4;

function isRedThree(cardId) {
  return cardId === 'diamond_3' || cardId === 'heart_3';
}

function createCardSvg(cardId) {
  const card = document.createElementNS(svgNamespace, 'svg');
  card.classList.add('hand-card');
  card.setAttribute('viewBox', '0 0 169.075 244.64');
  card.setAttribute('role', 'img');
  card.setAttribute('aria-label', cardId.replace('_', ' '));

  const use = document.createElementNS(svgNamespace, 'use');
  const href = `${cardsUrl}#${cardId}`;
  use.setAttribute('href', href);
  use.setAttributeNS(xlinkNamespace, 'href', href);

  card.appendChild(use);
  return card;
}

function updateRowOverlay(row) {
  if (!row) return;

  const cards = row.querySelectorAll('.hand-card');
  if (cards.length <= 1) {
    row.style.setProperty('--hand-overlap', '0px');
    return;
  }

  const cardWidth = cards[0].getBoundingClientRect().width || 84;
  const available = row.clientWidth;
  if (available <= 0) return;

  const rawStep = (available - cardWidth) / (cards.length - 1);
  const step = Math.max(16, Math.min(cardWidth, rawStep));
  const overlap = step - cardWidth;
  row.style.setProperty('--hand-overlap', `${overlap}px`);
}

function renderPlayerHand() {
  const hand = document.getElementById('player-hand');
  const redThreesHost = document.getElementById('hand-red-threes');
  const rowTop = document.getElementById('hand-row-top');
  const rowBottom = document.getElementById('hand-row-bottom');
  const totalCounter = document.getElementById('hand-counter-total');
  const red3Counter = document.getElementById('hand-counter-red3');

  if (!hand || !redThreesHost || !rowTop || !rowBottom || !totalCounter || !red3Counter) return;

  redThreesHost.innerHTML = '';
  rowTop.innerHTML = '';
  rowBottom.innerHTML = '';

  const redThrees = handCards.filter(isRedThree);
  const regularCards = handCards.filter((cardId) => !isRedThree(cardId));

  redThrees.slice(0, maxRedThrees).forEach((cardId) => {
    redThreesHost.appendChild(createCardSvg(cardId));
  });

  const topCards = regularCards.slice(0, maxRowCards);
  const bottomCards = regularCards.slice(maxRowCards, maxRowCards * 2);

  topCards.forEach((cardId) => rowTop.appendChild(createCardSvg(cardId)));
  bottomCards.forEach((cardId) => rowBottom.appendChild(createCardSvg(cardId)));

  if (bottomCards.length === 0) {
    rowTop.classList.add('centered');
  } else {
    rowTop.classList.remove('centered');
  }
  rowBottom.classList.remove('centered');

  const totalValue = totalCounter.querySelector('.hand-counter-value');
  const red3Value = red3Counter.querySelector('.hand-counter-value');
  if (totalValue) totalValue.textContent = handCards.length.toString();
  if (red3Value) red3Value.textContent = redThrees.length.toString();

  requestAnimationFrame(() => {
    updateRowOverlay(rowTop);
    updateRowOverlay(rowBottom);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderPlayerHand();

  window.addEventListener('resize', () => {
    updateRowOverlay(document.getElementById('hand-row-top'));
    updateRowOverlay(document.getElementById('hand-row-bottom'));
  });
});
