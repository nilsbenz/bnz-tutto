import { Card } from './types';

const street: Card = {
  displayName: 'Strasse',
  prize: 2000,
  icon: 'mdi-car',
};
const stop: Card = {
  displayName: 'Stop',
  prize: null,
  icon: 'mdi-hand-right',
};
const shamrock: Card = {
  displayName: 'Kleeblatt',
  prize: null,
  icon: 'mdi-flower-tulip',
};

const streets: Card[] = new Array(5).fill({ ...street });
const stops: Card[] = new Array(10).fill({ ...stop });

export const cards: Card[] = [...streets, ...stops, shamrock];

export const shuffle = (cards: Card[]): Card[] => {
  const array: Card[] = [...cards];
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
