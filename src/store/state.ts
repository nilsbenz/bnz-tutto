import { AppState } from './types';

const state: AppState = {
  players: [],
  cards: [],
  currentPlayer: null,
  currentCard: null,
  messages: {
    addPlayerError: null,
    startGameError: null,
  },
};

export default state;
