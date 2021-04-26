import Component from '@glimmer/component';

export default class PlayerInfoComponent extends Component {
  get current() {
    let { currentPlayer, player } = this.args;
    return currentPlayer === player;
  }
}