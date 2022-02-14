export default class Model {
  constructor() {
    this.animes = [];
    this.wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  }

  addAnimes(array) {
    this.animes = array.data;
    this.updateData(this.animes);
  }

  addDataToWishList(card) {
    if (this.wishlist.indexOf(card) === -1) {
      this.wishlist.push(card);
    }
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
  }
}
