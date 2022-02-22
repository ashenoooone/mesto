export class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._cardsUrl = options.cardsUrl;
    this._profileUrl = options.profileUrl;
    this._avatarUrl = options.avatarUrl;
    this._headers = options.headers;
    this.putLike = this.putLike.bind(this);
    this.deleteLike = this.deleteLike.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }
  getInitialCards() {
    return fetch(this._cardsUrl, { headers: this._headers }).then((res) =>
      res.ok
        ? res.json()
        : Promise.reject("Error: " + res.status + res.statusText)
    );
  }
  getInitialProfileInfo() {
    return fetch(this._profileUrl, {
      headers: this._headers,
    }).then((res) =>
      res.ok
        ? res.json()
        : Promise.reject("Error: " + res.status + res.statusText)
    );
  }
  editProfile(name, about) {
    return fetch(this._profileUrl, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then((res) =>
      res.ok
        ? res.json()
        : Promise.reject("Error: " + res.status + res.statusText)
    );
  }
  addCard(name, link) {
    return fetch(this._cardsUrl, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) =>
      res.ok
        ? res.json()
        : Promise.reject("Error: " + res.status + res.statusText)
    );
  }
  putLike(id) {
    return fetch(`${this._cardsUrl}/${id}/likes`, {
      headers: this._headers,
      method: "PUT",
    }).then((res) => {
      res.ok
        ? res.json
        : Promise.reject("Error: " + res.status + res.statusText);
    });
  }
  deleteLike(id) {
    return fetch(`${this._cardsUrl}/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) =>
      res.ok
        ? res.json()
        : Promise.reject("Error: " + res.status + res.statusText)
    );
  }
  deleteCard(id) {
    return fetch(`${this._cardsUrl}/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) =>
      res.ok
        ? res.json
        : Promise.reject("Error: " + res.status + res.statusText)
    );
  }
  setNewAvatar(link) {
    return fetch(this._avatarUrl, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link,
      }),
    }).then((res) =>
      res.ok
        ? res.json
        : Promise.reject("Error: " + res.status + res.statusText)
    );
  }
}
