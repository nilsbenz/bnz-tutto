export interface Player {
  name: string;
  score: number[];
}

export interface Card {
  displayName: string;
  price: string | number | null;
  icon: string;
  color: string;
  backgroundColor: string;
}

export interface Messages {
  addPlayerError: string | null;
}

export interface AppState {
  players: Player[];
  cards: Card[];
  currentCard: number | null;
  messages: Messages;
}
