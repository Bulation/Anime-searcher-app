export default class Model {
  constructor() {
    this.animes = [];
  }

  addAnimes(array) {
    this.animes = array;
    this.updateData(this.animes);
  }
}
