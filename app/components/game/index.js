import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { winningCombinations } from '../../utils/constants';
import Player from './player';

export default class GameFieldComponent extends Component {
  @tracked gameState = ["", "", "", "", "", "", "", "", ""];
  @tracked playing = true;
  @tracked victoryText = "";
  @tracked turn = 0;
  @tracked totalDraws = 0;
  @tracked winnerFields = [];
  @tracked playerOne = new Player("X")
  @tracked playerTwo = new Player("O")
  @tracked currentPlayer = this.playerOne;

  @action clickCell(index) {
    if(this.gameState[index] === "" && this.playing) {
      this.gameState[index] = this.currentPlayer.symbol;
      this.gameState = this.gameState;
      this.turn = this.turn + 1
      if(this.checkWinner()){
        this.playing = false;
        this.victoryText = "Congratulations " + this.currentPlayer.symbol;
        this.currentPlayer.addWin();
        this.displayPlayers()
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
    if (this.currentPlayer === this.playerOne) {
      this.currentPlayer = this.playerTwo;
    } else {
      this.currentPlayer = this.playerOne;
    }
  }

  @action newGame() {
    this.gameState = ["", "", "", "", "", "", "", "", ""];
    this.currentPlayer = this.playerOne;
    this.turn = 0;
    this.playing = true;
    this.winnerFields = [];
  }

  @action resetScores() {
    this.playerOne.resetWins();
    this.playerTwo.resetWins();
    this.totalDraws = 0;
    this.displayPlayers()
  }

  @action checkWinner() {
    let state = this.gameState;
    let current = this.currentPlayer.symbol;
    let match = false;
    let winnerFields = this.winnerFields
    winningCombinations.forEach(function(element) {
      let arr = element.every(function(num) {
        return state[num] === current;
      })
      if(arr) {
        match = true;
        winnerFields = element
        return;
      }
    })
    this.winnerFields = winnerFields;
    return match;
  }

  @action displayPlayers() {
    this.playerOne = this.playerOne;
    this.playerTwo = this.playerTwo;
  }
}
