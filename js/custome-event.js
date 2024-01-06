const changeOption = new Event('changeCaption');
window.addEventListener('load', function () {
  const tombol = document.getElementById('tombol');
  tombol.addEventListener('changeCaption', CustomEventHandler);
  tombol.addEventListener('click', function () {
    tombol.dispatchEvent(changeOption);
  });
});

function CustomEventHandler(ev) {
  console.log('Event ' + ev.type + ' telah dijalankan');
  const caption = document.getElementById('caption');
  caption.innerText = 'Anda telah membangkitkan custom event';
}
