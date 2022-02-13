import Component from './component';

export default class Card extends Component {
  constructor(parent, tagName, className, content) {
    super(parent, tagName, className, content);
    this.img = new Component(this.node, 'img', '', '');
    this.description = new Component(this.node, 'div', 'card__description', '');
    this.title = new Component(this.description.node, 'h2', 'card__title', '');
    this.rating = new Component(this.description.node, 'p', 'card__rating', '');
  }
}
