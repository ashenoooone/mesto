export class UserInfo {
  constructor({ profileName, profileActivity }) {
    this._nameElement = document.querySelector(profileName);
    this._activityElement = document.querySelector(profileActivity);
  }
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      activity: this._activityElement.textContent,
    };
  }
  setUserInfo(newName, newActivity) {
    this._nameElement.textContent = newName;
    this._activityElement.textContent = newActivity;
  }
}
