import { cards, shuffle } from './cards';
import { AppState } from './types';

export default {
  addPlayer(state: AppState, playerName: string) {
    if (playerName === '') {
      state.messages.addPlayerError = 'Bitte gib einen Namen an.';
    } else if (state.players.findIndex((p) => p.name === playerName) === -1) {
      state.players.push({
        name: playerName,
        score: 0,
      });
      state.messages.addPlayerError = null;
    } else {
      state.messages.addPlayerError = `Der Name ${playerName} ist bereits vergeben.`;
    }
  },
  deletePlayer(state: AppState, playerName: string) {
    state.players = state.players.filter((p) => p.name !== playerName);
  },
  setCurrentPlayer(state: AppState, playerName: string) {
    state.currentPlayer =
      state.players.find((p) => p.name !== playerName)?.name || null;
  },
  nextPlayer(state: AppState) {
    const currentPlayer = state.players.findIndex(
      (p) => p.name === state.currentPlayer
    );
    if (currentPlayer === -1) {
      state.currentPlayer = state.players[0].name || null;
    } else {
      if (state.players.length > currentPlayer + 1) {
        state.currentPlayer = state.players[currentPlayer + 1].name;
      } else {
        state.currentPlayer = state.players[0].name;
      }
    }
  },
  startGame(state: AppState) {
    state.cards = shuffle(cards);
    state.currentPlayer = state.players[0].name;
    state.messages.startGameError = null;
  },
  nextCard(state: AppState) {
    if (state.currentCard && state.cards.length > state.currentCard + 1) {
      state.currentCard++;
    } else {
      state.cards = shuffle(shuffle(cards));
      state.currentCard = 0;
    }
  },
  addToScore(state: AppState, score: number) {
    if (state.currentPlayer) {
      state.players.map((p) => {
        if (p.name === state.currentPlayer) {
          return { ...p, score: p.score + score };
        } else {
          return p;
        }
      });
    }
  },
};
