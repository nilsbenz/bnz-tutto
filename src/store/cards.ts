import { Card } from './types';
import colors from 'vuetify/lib/util/colors';

const street: Card = {
  displayName: 'Strasse',
  price: 2000,
  icon: 'mdi-car',
  color: colors.grey.darken4,
  backgroundColor: colors.grey.lighten3,
};
const stop: Card = {
  displayName: 'Stop',
  price: null,
  icon: 'mdi-hand-right',
  color: colors.red.darken2,
  backgroundColor: colors.red.lighten5,
};
const firework: Card = {
  displayName: 'Feuerwerk',
  price: '',
  icon: 'mdi-firework',
  color: colors.deepPurple.darken2,
  backgroundColor: colors.deepPurple.lighten5,
};
const plusMinus: Card = {
  displayName: 'Plus / Minus',
  price: '1000',
  icon: 'mdi-swap-horizontal-bold',
  color: colors.blue.darken2,
  backgroundColor: colors.blue.lighten5,
};
const timesTwo: Card = {
  displayName: 'Verdoppler',
  price: '2x',
  icon: 'mdi-numeric-2-box-multiple-outline',
  color: colors.orange.darken2,
  backgroundColor: colors.orange.lighten5,
};
const bonus: Card = {
  displayName: 'Bonus',
  price: null,
  icon: 'mdi-plus-box-outline',
  color: colors.yellow.darken2,
  backgroundColor: colors.yellow.lighten5,
};
const shamrock: Card = {
  displayName: 'Kleeblatt',
  price: null,
  icon: 'mdi-flower-tulip',
  color: colors.green.darken2,
  backgroundColor: colors.green.lighten5,
};

const streets: Card[] = new Array(5).fill({ ...street });
const stops: Card[] = new Array(10).fill({ ...stop });
const fireworks: Card[] = new Array(5).fill({ ...firework });
const plusMinusS: Card[] = new Array(5).fill({ ...plusMinus });
const timesTwos: Card[] = new Array(5).fill({ ...timesTwo });
const bonus200: Card[] = new Array(5).fill({ ...bonus, price: 200 });
const bonus300: Card[] = new Array(5).fill({ ...bonus, price: 300 });
const bonus400: Card[] = new Array(5).fill({ ...bonus, price: 400 });
const bonus500: Card[] = new Array(5).fill({ ...bonus, price: 500 });
const bonus600: Card[] = new Array(5).fill({ ...bonus, price: 600 });

export const cards: Card[] = [
  ...bonus300,
  ...streets,
  ...plusMinusS,
  ...bonus400,
  ...timesTwos,
  ...bonus600,
  ...stops,
  shamrock,
  ...bonus200,
  ...fireworks,
  ...bonus500,
];

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
