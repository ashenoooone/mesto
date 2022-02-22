export class UserInfo {
  constructor({ profileName, profileActivity, avatar }) {
    this._nameElement = document.querySelector(profileName);
    this._activityElement = document.querySelector(profileActivity);
    this._avatarElement = document.querySelector(avatar);
  }
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      activity: this._activityElement.textContent,
      id: this._id,
    };
  }
  setUserInfo(newName, newActivity, userId = this._id) {
    this._nameElement.textContent = newName;
    this._activityElement.textContent = newActivity;
    this._id = userId;
  }
  setUserAvatar(link) {
    this._avatarElement.src = link;
  }
}
