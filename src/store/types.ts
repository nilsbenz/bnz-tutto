export interface Player {
  name: string;
  score: number;
}

export interface Card {
  displayName: string;
  prize: number | null;
  icon: string;
}

export interface Messages {
  addPlayerError: string | null;
  startGameError: string | null;
}

export interface AppState {
  players: Player[];
  cards: Card[];
  currentPlayer: string | null;
  currentCard: number | null;
  messages: Messages;
}
