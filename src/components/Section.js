export class Section {
  constructor({ data, renderer }, selector) {
    this._renderer = renderer;
    this._container = document.querySelector(selector);
    this._items = data;
  }
  renderInitialCards() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
  addItem(item, toEnd) {
    toEnd ? this._container.append(item) : this._container.prepend(item);
  }
}
