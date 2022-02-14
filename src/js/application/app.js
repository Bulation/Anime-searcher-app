import View from './view';
import Model from './model';

export default class Application {
  constructor(node) {
    this.node = node;
    this.model = new Model();
    this.view = new View(this.node);
    this.view.submitData = this.handleSubmitData;
    this.view.showWishList = this.handleShowWishList;
    this.view.showMainPage = this.handleShowMainPage;
    this.model.updateData = this.handleUpdateData;
    this.handleSubmitData('naruto');
    this.view.addToWishList = this.handleAddToWishList;
  }

  handleSubmitData = (data) => {
    fetch(`https://kitsu.io/api/edge/anime?filter[text]=${data}`)
      .then((res) => res.json())
      .then((response) => this.model.addAnimes(response));
  };

  handleUpdateData = (animes) => {
    this.view.displayCards(animes);
  };

  handleAddToWishList = (card) => {
    this.model.addDataToWishList(card);
  };

  handleShowWishList = () => {
    this.view.displayWishList(this.model.wishlist);
  };

  handleShowMainPage = () => {
    this.view.displayCards(this.model.animes);
  };
}
