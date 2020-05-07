import { cards, shuffle } from './cards';
import { AppState } from './types';
import router from '../plugins/router';

export default {
  addPlayer(state: AppState, playerName: string) {
    if (playerName === '') {
      state.messages.addPlayerError = 'Bitte gib einen Namen an.';
    } else if (state.players.findIndex((p) => p.name === playerName) === -1) {
      state.players.push({
        name: playerName,
        score: [],
      });
      state.messages.addPlayerError = null;
    } else {
      state.messages.addPlayerError = `Der Name ${playerName} ist bereits vergeben.`;
    }
  },
  deletePlayer(state: AppState, playerName: string) {
    state.players = state.players.filter((p) => p.name !== playerName);
  },
  newGame(state: AppState) {
    state.cards = shuffle(cards);
    state.currentCard = 0;
    state.players = state.players.map((p) => ({
      ...p,
      score: [],
    }));
    state.messages.startGameError = null;
    router.push('/game');
  },
  continueGame(state: AppState) {
    state.messages.startGameError = null;
    router.push('/game');
  },
  nextCard(state: AppState) {
    if (
      state.currentCard !== null &&
      state.cards.length > state.currentCard + 1
    ) {
      state.currentCard++;
    } else {
      state.cards = shuffle(shuffle(cards));
      state.currentCard = 0;
    }
  },
  addToScore(state: AppState, { player, amount }: any) {
    state.players = state.players.map((p) => {
      if (p.name === player) {
        return { ...p, score: [...p.score, parseInt(amount)] };
      } else {
        return p;
      }
    });
  },
};
