(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._id=e._id,this._owner=e.owner,this._cardSelector=n,this._popup=r,this._confirmationPopup=o,this._api=i,this._response=e}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"_likeClickHandler",value:function(){var e=this;this._likeButton.classList.contains("card__like-button_active")?this._api.deleteLike(this._element._cardId).then((function(t){e._likeButton.classList.remove("card__like-button_active"),e._likesElement.textContent--})).catch((function(e){return alert(e)})):this._api.putLike(this._element._cardId).then((function(t){e._likeButton.classList.add("card__like-button_active"),e._likesElement.textContent++})).catch((function(e){return alert(e)}))}},{key:"_deleteCardHandler",value:function(){this._confirmationPopup.open(this._element)}},{key:"_openPopupHandler",value:function(){this._popup.open(this._name,this._link)}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._likeClickHandler()})),this._deleteButton.addEventListener("click",(function(){e._deleteCardHandler()})),this._imageElement.addEventListener("click",(function(t){e._openPopupHandler(t)}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._titleElement=this._element.querySelector(".card__title"),this._imageElement=this._element.querySelector(".card__image"),this._likeButton=this._element.querySelector(".card__like-button"),this._deleteButton=this._element.querySelector(".card__delete-button"),this._likesElement=this._element.querySelector(".card__like-counter"),this._likesElement.textContent=this._likes.length,this._titleElement.textContent=this._name,this._imageElement.src=this._link,this._imageElement.alt=this._name,this._element._cardId=this._id,this._element._owner=this._owner,this._likes.some((function(e){return"f803110ccd9630f1871c1819"==e._id}))&&this._likeButton.classList.add("card__like-button_active"),"f803110ccd9630f1871c1819"!=this._element._owner._id&&this._deleteButton.remove(),this._setEventListeners(),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass}var t,r;return t=e,(r=[{key:"_showErrorMessage",value:function(e,t){this._errorElement=this._form.querySelector(".".concat(e.id,"-error")),this._errorElement.textContent=t,e.classList.add(this._inputErrorClass)}},{key:"_hideErrorMessage",value:function(e){this._errorElement=this._form.querySelector(".".concat(e.id,"-error")),this._errorElement.textContent="",e.classList.remove(this._inputErrorClass)}},{key:"_inputValidity",value:function(e){e.validity.valid?this._hideErrorMessage(e):this._showErrorMessage(e,e.validationMessage)}},{key:"_toggleButton",value:function(){this._hasInvalidInput()?(this._button.classList.add(this._inactiveButtonClass),this._button.disabled=!0):(this._button.classList.remove(this._inactiveButtonClass),this._button.disabled=!1)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._button=this._form.querySelector(this._submitButtonSelector),this._toggleButton(),this._inputList.forEach((function(t){t.addEventListener("input",(function(n){e._inputValidity(t),e._toggleButton()}))}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButton(),this._inputList.forEach((function(t){e._hideErrorMessage(t)}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._element=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._element.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._element.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._element.querySelector(".popup__close-button").addEventListener("click",(function(){return e.close()})),this._element.addEventListener("mousedown",(function(t){t.target.classList.contains("popup")&&e.close()}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=s(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},c.apply(this,arguments)}function s(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitFunc=t,n._form=n._element.querySelector(".popup__form"),n}return t=a,(n=[{key:"open",value:function(e){this._card=e,c(p(a.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;c(p(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitFunc(e._card)}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i),_={inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__input_type_error"},d=document.querySelector(".popup__form_type-edit"),y=document.querySelector(".popup__form_type_add-card"),v=document.querySelector(".profile__edit-button"),m=document.querySelector(".popup__input_type_name"),b=document.querySelector(".popup__input_type_activity"),k=document.querySelector(".profile__add-button"),E=Array.from(document.querySelectorAll(".popup__form")),g={},w=".template__card",S=".profile__name",O=".profile__activity",j=".popup_type_add-card",L=".popup_type_edit-profile",C=(document.querySelector(S),document.querySelector(O),document.querySelector(".profile__avatar"),".popup_type_delete-card"),P=document.querySelector(".profile__image-container"),q=".popup_type_edit-avatar",T=document.querySelector(j).querySelector(".popup__save-button"),x=document.querySelector(L).querySelector(".popup__save-button"),U=document.querySelector(C).querySelector(".popup__save-button"),B=document.querySelector(q).querySelector(".popup__save-button");function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._container=document.querySelector(n),this._items=r}var t,n;return t=e,(n=[{key:"renderInitialCards",value:function(){var e=this;this._items.then((function(t){t.forEach((function(t){e._renderer(t)}))}))}},{key:"addItem",value:function(e,t){t?this._container.append(e):this._container.prepend(e)}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=N(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},D.apply(this,arguments)}function N(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=z(e)););return e}function H(e,t){return H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},H(e,t)}function M(e,t){if(t&&("object"===A(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},z(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&H(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(r);if(o){var n=z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return M(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._title=t._element.querySelector(".zoomed-card__title"),t._image=t._element.querySelector(".zoomed-card__image"),t}return t=a,(n=[{key:"open",value:function(e,t){this._title.textContent=e,this._image.alt=e,this._image.src=t,D(z(a.prototype),"open",this).call(this)}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(){return K="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=Q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},K.apply(this,arguments)}function Q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Y(e)););return e}function W(e,t){return W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},W(e,t)}function X(e,t){if(t&&("object"===J(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function Y(e){return Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Y(e)}var Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&W(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Y(r);if(o){var n=Y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return X(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitFunc=t,n._form=n._element.querySelector(".popup__form"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=Array.from(this._element.querySelectorAll(".popup__input")),this._inputValues={},this._inputList.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"close",value:function(){var e=this;K(Y(a.prototype),"close",this).call(this),setTimeout((function(){e._form.reset()}),300)}},{key:"setEventListeners",value:function(){var e=this;K(Y(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitFunc(e._getInputValues())}))}}])&&G(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ee=function(){function e(t){var n=t.profileName,r=t.profileActivity,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._activityElement=document.querySelector(r),this._avatarElement=document.querySelector(o)}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,activity:this._activityElement.textContent,id:this._id}}},{key:"setUserInfo",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._id;this._nameElement.textContent=e,this._activityElement.textContent=t,this._id=n}},{key:"setUserAvatar",value:function(e){this._avatarElement.src=e}}],n&&$(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ne=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._cardsUrl=t.cardsUrl,this._profileUrl=t.profileUrl,this._avatarUrl=t.avatarUrl,this._headers=t.headers,this.putLike=this.putLike.bind(this),this.deleteLike=this.deleteLike.bind(this),this.deleteCard=this.deleteCard.bind(this)}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch(this._cardsUrl,{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: "+e.status+e.statusText)}))}},{key:"getInitialProfileInfo",value:function(){return fetch(this._profileUrl,{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: "+e.status+e.statusText)}))}},{key:"editProfile",value:function(e,t){return fetch(this._profileUrl,{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("Error: "+e.status+e.statusText)}))}},{key:"addCard",value:function(e,t){return fetch(this._cardsUrl,{headers:this._headers,method:"POST",body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("Error: "+e.status+e.statusText)}))}},{key:"putLike",value:function(e){return fetch("".concat(this._cardsUrl,"/").concat(e,"/likes"),{headers:this._headers,method:"PUT"}).then((function(e){e.ok?e.json:Promise.reject("Error: "+e.status+e.statusText)}))}},{key:"deleteLike",value:function(e){return fetch("".concat(this._cardsUrl,"/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: "+e.status+e.statusText)}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._cardsUrl,"/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json:Promise.reject("Error: "+e.status+e.statusText)}))}},{key:"setNewAvatar",value:function(e){return fetch(this._avatarUrl,{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json:Promise.reject("Error: "+e.status+e.statusText)}))}}])&&te(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort36",profileUrl:"https://nomoreparties.co/v1/cohort36/users/me",avatarUrl:"https://mesto.nomoreparties.co/v1/cohort36/users/me/avatar",cardsUrl:"https://mesto.nomoreparties.co/v1/cohort36/cards",headers:{authorization:"d44c6c7e-d802-4b13-ab66-d4df3d277557","Content-Type":"application/json"}}),re=new h(C,(function(e){U.textContent="Удаление...",ne.deleteCard(e._cardId).then((function(t){e.remove(),re.close()})).then((function(){U.textContent="Да"})).catch((function(e){alert(e)}))})),oe=new Z(j,(function(e){T.textContent="Создаю...",ne.addCard(e.inputTitle,e.inputLink).then((function(e){ce.addItem(le(e,w,re,{putLike:ne.putLike,deleteLike:ne.deleteLike}),!1),oe.close()})).then((function(){T.textContent="Создать"})).catch((function(e){return alert(e)})),setTimeout((function(){}),2e3)})),ie=new Z(L,(function(e){x.textContent="Сохраняю...",ne.editProfile(e.inputName,e.inputActivity).then((function(e){se.setUserInfo(e.name,e.about)})).then((function(){x.textContent="Сохранить"})).catch((function(e){return alert(e)})),ie.close()})),ae=new Z(q,(function(e){B.textContent="Сохраняю...",ne.setNewAvatar(e.inputAvatarLink).then((function(t){se.setUserAvatar(e.inputAvatarLink),ae.close()})).then((function(){B.textContent="Сохранить"})).catch((function(e){return alert(e)}))})),ue=new F(".popup_type_zoomed-card");re.setEventListeners(),ue.setEventListeners(),ie.setEventListeners(),oe.setEventListeners(),ae.setEventListeners();var ce=new R({data:ne.getInitialCards(),renderer:function(e){var t=le(e,w,re,{putLike:ne.putLike,deleteLike:ne.deleteLike});ce.addItem(t,!0)}},".elements");ce.renderInitialCards();var se=new ee({profileName:S,profileActivity:O,avatar:".profile__avatar"});function le(e,n,r,o){return new t(e,n,ue,r,o).generateCard()}ne.getInitialProfileInfo().then((function(e){se.setUserInfo(e.name,e.about,e._id),se.setUserAvatar(e.avatar)})).catch((function(e){return alert(e)})),E.forEach((function(e){var t=new r(_,e);g[e.name]=t,g[e.name].enableValidation()})),v.addEventListener("click",(function(){m.value=se.getUserInfo().name,b.value=se.getUserInfo().activity,g[d.name].resetValidation(),ie.open()})),k.addEventListener("click",(function(){g[y.name].resetValidation(),oe.open()})),P.addEventListener("click",(function(){ae.open()}))})();