import Component from './component';
import Input from './input';
import Card from './card';

export default class View {
  constructor(node) {
    this.node = node;
    this.header = new Component(this.node, 'header', 'header', '');
    this.headerTitle = new Component(this.header.node, 'h1', 'header__title', 'Anime Searcher');
    this.main = new Component(this.node, 'main', 'main', '');
    this.footer = new Component(this.node, 'footer', 'footer', '');
    this.footerContainer = new Component(this.footer.node, 'div', 'footer-container', '');
    this.github = new Component(this.footerContainer.node, 'a', 'footer-item footer__github', 'Bulation');
    this.github.node.href = 'https://github.com/Bulation';
    this.year = new Component(this.footerContainer.node, 'time', 'footer-item footer__year', '2022');
    this.logo = new Component(this.footerContainer.node, 'a', 'footer-item footer__logo', '');
    this.input = new Input(this.header.node, 'input', 'header__search', '', 'search', 'search');
    this.logo.node.href = 'https://rs.school/js';
  }

  displayCards(animes) {
    while (this.main.node.firstChild) {
      this.main.node.removeChild(this.main.node.firstChild);
    }
    if (animes.length === 0) {
      this.warning = new Component(this.main.node, 'p', '', 'Anime is not found, please, try again');
      return;
    }
    animes.forEach((el, i) => {
      this.card = new Card(this.main.node, 'div', 'card', '');
      this.card.img.node.src = `${animes[i].attributes.posterImage.large}`;
      if (animes[i].attributes.titles.en !== undefined) {
        this.card.img.node.alt = `Poster of ${animes[i].attributes.titles.en}`;
        this.card.title.node.textContent = `${animes[i].attributes.titles.en}`;
      } else {
        this.card.img.node.alt = `Poster of ${animes[i].attributes.canonicalTitle}`;
        this.card.title.node.textContent = `${animes[i].attributes.canonicalTitle}`;
      }
      if (animes[i].attributes.averageRating === null) {
        this.card.rating.node.textContent = 'N/A';
      } else {
        this.card.rating.node.textContent = `${animes[i].attributes.averageRating}`;
      }
    });
  }
}
