const storageKey = 'STORAGE_KEY';
const submitAction = document.getElementById('form-data-user');

// check storage
function checkForStorage() {
  return typeof Storage !== 'undefined';
}

// putUserList dari local storage
function putUserList(data) {
  if (checkForStorage()) {
    let userData = [];
    if (localStorage.getItem(storageKey) !== null) {
      userData = JSON.parse(localStorage.getItem(storageKey));
    }

    userData.unshift(data);
    if (userData.length > 5) {
      userData.pop();
    }

    localStorage.setItem(storageKey, JSON.stringify(userData));
  }
}

// getUserList dari localStorage
function getUserList() {
  if (checkForStorage()) {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  } else {
    return [];
  }
}