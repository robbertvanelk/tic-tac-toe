import Component from '@glimmer/component';

export default class PlayerComponent extends Component {
  get current() {
    let { current, player } = this.args;
    return current === player;
  }
}
