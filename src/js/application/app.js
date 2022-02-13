import View from './view';
import Model from './model';

export default class Application {
  constructor(node) {
    this.node = node;
    this.model = new Model();
    this.view = new View(this.node);
    this.view.input.node.focus();
    this.view.input.submitData = this.handleSubmitData;
    this.model.updateData = this.handleUpdateData;
    this.handleSubmitData('naruto');
  }

  handleSubmitData = (data) => {
    fetch(`https://kitsu.io/api/edge/anime?filter[text]=${data}`)
      .then((res) => res.json())
      .then((response) => this.model.addAnimes(response));
  };

  handleUpdateData = (animes) => {
    this.view.displayCards(animes.data);
  };
}
