import { AppState, Player } from './types';

export default {
  addPlayer(state: AppState, player: Player) {
    state.players.push(player);
  },
};
