import Component from './component';
import Input from './input';
import Card from './card';

export default class View {
  constructor(node) {
    this.node = node;
    this.header = new Component(this.node, 'header', 'header', '');
    this.headerTitle = new Component(this.header.node, 'h1', 'header__title', 'Anime Searcher');
    const mainPageButton = new Component(this.header.node, 'button', 'header__main-button header__main-button_active', 'Main');
    const wishlistButton = new Component(this.header.node, 'button', 'header__wishlist-button', 'Wishlist');
    const input = new Input(this.header.node, 'input', 'header__search', '', 'search', 'search anime');
    input.node.focus();
    input.node.onkeydown = (e) => {
      if (e.key === 'Enter') {
        this.submitData(input.node.value);
      }
    };
    wishlistButton.node.onclick = () => {
      input.hide();
      wishlistButton.node.classList.toggle('header__wishlist-button_active');
      mainPageButton.node.classList.toggle('header__main-button_active');
      this.showWishList();
    };
    mainPageButton.node.onclick = () => {
      input.show();
      input.node.focus();
      wishlistButton.node.classList.toggle('header__wishlist-button_active');
      mainPageButton.node.classList.toggle('header__main-button_active');
      this.showMainPage();
    };
    this.main = new Component(this.node, 'main', 'main', '');
    this.footer = new Component(this.node, 'footer', 'footer', '');
    this.footerContainer = new Component(this.footer.node, 'div', 'footer-container', '');
    this.github = new Component(this.footerContainer.node, 'a', 'footer-item footer__github', 'Bulation');
    this.github.node.href = 'https://github.com/Bulation';
    this.year = new Component(this.footerContainer.node, 'time', 'footer-item footer__year', '2022');
    this.logo = new Component(this.footerContainer.node, 'a', 'footer-item footer__logo', '');
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
    animes.forEach((el) => {
      this.createCard(el.attributes);
    });
  }

  displayWishList(cards) {
    while (this.main.node.firstChild) {
      this.main.node.removeChild(this.main.node.firstChild);
    }
    if (cards.length === 0) {
      this.warning = new Component(this.main.node, 'p', '', 'Wishlist is empty, add some anime to wishlist');
      return;
    }
    cards.forEach((el) => {
      this.main.node.insertAdjacentHTML('beforeend', el);
    });
  }

  createCard(attributes) {
    const card = new Card(this.main.node, 'div', 'card', '');
    card.wishlistButton.node.onclick = () => {
      console.log(card);
      card.wishlistButton.node.remove();
      this.addToWishList(card.node.outerHTML);
      card.wishlistButton = new Component(card.buttonsContainer.node, 'button', 'card__wishlist-button', 'Add to wishlist');
    };
    card.img.node.src = `${attributes.posterImage.large}`;
    if (attributes.titles.en) {
      card.img.node.alt = `Poster of ${attributes.titles.en}`;
      card.title.node.textContent = `${attributes.titles.en}`;
    } else {
      card.img.node.alt = `Poster of ${attributes.canonicalTitle}`;
      card.title.node.textContent = `${attributes.canonicalTitle}`;
    }
    if (attributes.averageRating === null) {
      card.rating.node.textContent = 'N/A';
    } else {
      card.rating.node.textContent = `${attributes.averageRating}`;
    }
  }
}
