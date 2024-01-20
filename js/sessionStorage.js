const sessionStorageKey = 'PRESS_FREQUENCY';

// Pengecekan apakaha data sessionStorage dengan key acount tersedia atau belum
if (typeof Storage != 'undefined') {
  if (sessionStorage.getItem(sessionStorageKey) === null) {
    sessionStorage.setItem(sessionStorageKey, 0);
  }
  const incrementButton = document.querySelector('#incrementButton');
  const clearButton = document.querySelector('#clear');
  const countDisplay = document.querySelector('#count');

  // Memberikan nilai
  countDisplay.innerText = sessionStorage.getItem(sessionStorageKey);

  // Mengupdate Nilai
  incrementButton.addEventListener('click', function () {
    let count = sessionStorage.getItem(sessionStorageKey);
    count++;
    sessionStorage.setItem(sessionStorageKey, count);
    countDisplay.innerText = sessionStorage.getItem(sessionStorageKey);
  });

  // Memberikan nilai 0
  clearButton.addEventListener('click', function () {
    sessionStorage.removeItem(sessionStorageKey);
    countDisplay.innerText = 0;
  });
} else {
  alert('your browser doesnt work!');
}
