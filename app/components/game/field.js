import Component from '@glimmer/component';

export default class PlayerComponent extends Component {
  get winnerField() {
    let { winnerFields, index } = this.args;
    return winnerFields.includes(index);
  }
}
