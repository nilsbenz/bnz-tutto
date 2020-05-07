import { AppState } from './types';

const state: AppState = {
  players: [],
  cards: [],
  currentCard: null,
  messages: {
    addPlayerError: null,
  },
};

export default state;
