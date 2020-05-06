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
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
