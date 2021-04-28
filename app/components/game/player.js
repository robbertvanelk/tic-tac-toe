export default class Player {
  constructor(symbol, current) {
    this.symbol = symbol;
    this.wins = 0;
  }
  addWin() {
    this.wins = this.wins + 1;
  }

  resetWins() {
    this.wins = 0;
  }
}