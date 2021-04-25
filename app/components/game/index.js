import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { winningCombinations } from '../../utils/constants';

export default class GameFieldComponent extends Component {
  @tracked gameState = ["", "", "", "", "", "", "", "", ""];
  @tracked currentPlayer = "X";
  @tracked playing = true;
  @tracked victoryText = "";
  @tracked turn = 0;
  @tracked scoreX = 0;
  @tracked scoreO = 0;
  @tracked totalDraws = 0;

  @action clickCell(index) {
    if(this.gameState[index] === "" && this.playing) {
      this.gameState[index] = this.currentPlayer;
      this.gameState = this.gameState;
      this.turn = this.turn + 1
      if(this.checkWinner()){
        this.playing = false;
        this.victoryText = "Congratulations " + this.currentPlayer;
        if (this.currentPlayer === "O") {
          this.scoreO = this.scoreO + 1;
        } else {
          this.scoreX = this.scoreX + 1;
        }
        return;
      } else if(this.turn === 9) {
        this.playing = false;
        this.totalDraws = this.totalDraws + 1;
        this.victoryText = "Draw game";
      } else {
        this.switchPlayer();
      }

    }
  }

  @action switchPlayer() {
    if (this.currentPlayer === "O") {
      this.currentPlayer = "X";
    } else {
      this.currentPlayer = "O";
    }
  }

  @action newGame() {
    this.gameState = ["", "", "", "", "", "", "", "", ""];
    this.currentPlayer = "X";
    this.turn = 0;
    this.playing = true;
  }

  @action checkWinner() {
    let state = this.gameState;
    let current = this.currentPlayer;
    let match = false;
    winningCombinations.forEach(function(element) {
      let arr = element.every(function(num) {
        return state[num] === current;
      })
      if(arr) {
        match = true;
        return;
      }
    })
    return match;
  }
}
