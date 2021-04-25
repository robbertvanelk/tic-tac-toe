import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GameFieldComponent extends Component {
  @tracked gameState = ["", "", "", "", "", "", "", "", ""];
  @tracked currentPlayer = "X";

  @action switchPlayer() {
    if (this.currentPlayer === "O") {
      this.currentPlayer = "X";
    } else {
      this.currentPlayer = "O";
    }
  }

  @action clickCell(index) {
    if(this.gameState[index] === "") {
      this.gameState[index] = this.currentPlayer;
      this.gameState = this.gameState;
      this.switchPlayer();
    }
  }
}
