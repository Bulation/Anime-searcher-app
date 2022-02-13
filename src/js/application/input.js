import Component from './component';

export default class Input extends Component {
  constructor(parent, tagName, className, content, type, placeholder) {
    super(parent, tagName, className, content);
    this.node.type = type;
    this.node.placeholder = placeholder;
    this.node.onkeydown = (e) => {
      if (e.code === 'Enter') {
        this.submitData(this.node.value);
      }
    };
  }
}
