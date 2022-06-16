/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {

;// CONCATENATED MODULE: ./src/js/application/component.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Component = /*#__PURE__*/function () {
  function Component(parent, tagName, className, content) {
    _classCallCheck(this, Component);

    this.node = document.createElement(tagName);
    this.node.className = className;
    this.node.textContent = content;
    parent.append(this.node);
  }

  _createClass(Component, [{
    key: "destroy",
    value: function destroy() {
      this.node.remove();
    }
  }]);

  return Component;
}();


;// CONCATENATED MODULE: ./src/js/application/input.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function input_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function input_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function input_createClass(Constructor, protoProps, staticProps) { if (protoProps) input_defineProperties(Constructor.prototype, protoProps); if (staticProps) input_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Input = /*#__PURE__*/function (_Component) {
  _inherits(Input, _Component);

  var _super = _createSuper(Input);

  function Input(parent, tagName, className, content, type, placeholder) {
    var _this;

    input_classCallCheck(this, Input);

    _this = _super.call(this, parent, tagName, className, content);
    _this.node.type = type;
    _this.node.placeholder = placeholder;
    return _this;
  }

  input_createClass(Input, [{
    key: "hide",
    value: function hide() {
      this.node.style.visibility = 'hidden';
    }
  }, {
    key: "show",
    value: function show() {
      this.node.style.visibility = 'visible';
    }
  }]);

  return Input;
}(Component);


;// CONCATENATED MODULE: ./src/js/application/card.js
function card_typeof(obj) { "@babel/helpers - typeof"; return card_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, card_typeof(obj); }

function card_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function card_createClass(Constructor, protoProps, staticProps) { if (protoProps) card_defineProperties(Constructor.prototype, protoProps); if (staticProps) card_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function card_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function card_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) card_setPrototypeOf(subClass, superClass); }

function card_setPrototypeOf(o, p) { card_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return card_setPrototypeOf(o, p); }

function card_createSuper(Derived) { var hasNativeReflectConstruct = card_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = card_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = card_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return card_possibleConstructorReturn(this, result); }; }

function card_possibleConstructorReturn(self, call) { if (call && (card_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return card_assertThisInitialized(self); }

function card_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function card_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function card_getPrototypeOf(o) { card_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return card_getPrototypeOf(o); }



var Card = /*#__PURE__*/function (_Component) {
  card_inherits(Card, _Component);

  var _super = card_createSuper(Card);

  function Card(parent, tagName, className, content) {
    var _this;

    card_classCallCheck(this, Card);

    _this = _super.call(this, parent, tagName, className, content);
    _this.img = new Component(_this.node, 'img', '', '');
    _this.description = new Component(_this.node, 'div', 'card__description', '');
    _this.title = new Component(_this.description.node, 'h2', 'card__title', '');
    _this.rating = new Component(_this.description.node, 'p', 'card__rating', '');
    _this.buttonsContainer = new Component(_this.node, 'div', 'card__buttons-container', '');
    _this.wishlistButton = new Component(_this.buttonsContainer.node, 'button', 'card__wishlist-button', 'Add to wishlist');
    return _this;
  }

  return card_createClass(Card);
}(Component);


;// CONCATENATED MODULE: ./src/js/application/view.js
function view_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function view_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function view_createClass(Constructor, protoProps, staticProps) { if (protoProps) view_defineProperties(Constructor.prototype, protoProps); if (staticProps) view_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }





var View = /*#__PURE__*/function () {
  function View(node) {
    var _this = this;

    view_classCallCheck(this, View);

    this.node = node;
    this.header = new Component(this.node, 'header', 'header', '');
    this.headerTitle = new Component(this.header.node, 'h1', 'header__title', 'Anime Searcher');
    var mainPageButton = new Component(this.header.node, 'button', 'header__main-button header__main-button_active', 'Main');
    var wishlistButton = new Component(this.header.node, 'button', 'header__wishlist-button', 'Wishlist');
    var input = new Input(this.header.node, 'input', 'header__search', '', 'search', 'search anime');
    input.node.focus();

    input.node.onkeydown = function (e) {
      if (e.key === 'Enter') {
        _this.submitData(input.node.value);
      }
    };

    wishlistButton.node.onclick = function () {
      input.hide();
      wishlistButton.node.classList.toggle('header__wishlist-button_active');
      mainPageButton.node.classList.toggle('header__main-button_active');

      _this.showWishList();
    };

    mainPageButton.node.onclick = function () {
      input.show();
      input.node.focus();
      wishlistButton.node.classList.toggle('header__wishlist-button_active');
      mainPageButton.node.classList.toggle('header__main-button_active');

      _this.showMainPage();
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

  view_createClass(View, [{
    key: "displayCards",
    value: function displayCards(animes) {
      var _this2 = this;

      while (this.main.node.firstChild) {
        this.main.node.removeChild(this.main.node.firstChild);
      }

      if (animes.length === 0) {
        this.warning = new Component(this.main.node, 'p', '', 'Anime is not found, please, try again');
        return;
      }

      animes.forEach(function (el) {
        _this2.createCard(el.attributes);
      });
    }
  }, {
    key: "displayWishList",
    value: function displayWishList(cards) {
      var _this3 = this;

      while (this.main.node.firstChild) {
        this.main.node.removeChild(this.main.node.firstChild);
      }

      if (cards.length === 0) {
        this.warning = new Component(this.main.node, 'p', '', 'Wishlist is empty, add some anime to wishlist');
        return;
      }

      cards.forEach(function (el) {
        _this3.main.node.insertAdjacentHTML('beforeend', el);
      });
    }
  }, {
    key: "createCard",
    value: function createCard(attributes) {
      var _this4 = this;

      var card = new Card(this.main.node, 'div', 'card', '');

      card.wishlistButton.node.onclick = function () {
        console.log(card);
        card.wishlistButton.node.remove();

        _this4.addToWishList(card.node.outerHTML);

        card.wishlistButton = new Component(card.buttonsContainer.node, 'button', 'card__wishlist-button', 'Add to wishlist');
      };

      card.img.node.src = "".concat(attributes.posterImage.large);

      if (attributes.titles.en) {
        card.img.node.alt = "Poster of ".concat(attributes.titles.en);
        card.title.node.textContent = "".concat(attributes.titles.en);
      } else {
        card.img.node.alt = "Poster of ".concat(attributes.canonicalTitle);
        card.title.node.textContent = "".concat(attributes.canonicalTitle);
      }

      if (attributes.averageRating === null) {
        card.rating.node.textContent = 'N/A';
      } else {
        card.rating.node.textContent = "".concat(attributes.averageRating);
      }
    }
  }]);

  return View;
}();


;// CONCATENATED MODULE: ./src/js/application/model.js
function model_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function model_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function model_createClass(Constructor, protoProps, staticProps) { if (protoProps) model_defineProperties(Constructor.prototype, protoProps); if (staticProps) model_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Model = /*#__PURE__*/function () {
  function Model() {
    model_classCallCheck(this, Model);

    this.animes = JSON.parse(localStorage.getItem('main')) || [];
    this.wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  }

  model_createClass(Model, [{
    key: "addAnimes",
    value: function addAnimes(array) {
      this.animes = array.data;
      console.log(this.animes);
      this.updateData(this.animes);
      localStorage.setItem('main', JSON.stringify(this.animes));
    }
  }, {
    key: "addDataToWishList",
    value: function addDataToWishList(card) {
      if (this.wishlist.indexOf(card) === -1) {
        this.wishlist.push(card);
      }

      localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    }
  }]);

  return Model;
}();


;// CONCATENATED MODULE: ./src/js/application/app.js
function app_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function app_createClass(Constructor, protoProps, staticProps) { if (protoProps) app_defineProperties(Constructor.prototype, protoProps); if (staticProps) app_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function app_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Application = /*#__PURE__*/app_createClass(function Application(node) {
  var _this = this;

  app_classCallCheck(this, Application);

  _defineProperty(this, "handleSubmitData", function (data) {
    fetch("https://kitsu.io/api/edge/anime?filter[text]=".concat(data)).then(function (res) {
      return res.json();
    }).then(function (response) {
      return _this.model.addAnimes(response);
    });
  });

  _defineProperty(this, "handleUpdateData", function (animes) {
    _this.view.displayCards(animes);
  });

  _defineProperty(this, "handleAddToWishList", function (card) {
    _this.model.addDataToWishList(card);
  });

  _defineProperty(this, "handleShowWishList", function () {
    _this.view.displayWishList(_this.model.wishlist);
  });

  _defineProperty(this, "handleShowMainPage", function () {
    _this.view.displayCards(_this.model.animes);
  });

  this.node = node;
  this.model = new Model();
  this.view = new View(this.node);
  this.view.submitData = this.handleSubmitData;
  this.view.showWishList = this.handleShowWishList;
  this.view.showMainPage = this.handleShowMainPage;
  this.model.updateData = this.handleUpdateData;

  if (this.model.animes.length === 0) {
    this.handleSubmitData('naruto');
  } else {
    this.handleUpdateData(this.model.animes);
  }

  this.view.addToWishList = this.handleAddToWishList;
});


;// CONCATENATED MODULE: ./src/js/index.js
 // eslint-disable-next-line no-unused-vars

var app = new Application(document.body);
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
// extracted by mini-css-extract-plugin

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
// Module
var code = "<!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"> <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"> <title>Anime Searcher</title> </head> <body> </body> </html>";
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (code)));
})();

/******/ })()
;