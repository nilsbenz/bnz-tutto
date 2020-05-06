export interface Player {
  name: string;
  score: number;
}

export interface Card {
  displayName: string;
  prize: number | null;
  icon: string;
}

export interface Message {
  text: string;
  type: 'success' | 'info' | 'error' | 'warning';
}

export interface AppState {
  players: Player[];
  cards: Card[];
  currentPlayer: string | null;
  currentCard: number | null;
  message: Message | null;
}
