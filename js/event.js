// EVENT HANDLER
function increment() {
  const countElement = document.getElementById('count');
  countElement.innerText++;

  const contents = document.querySelector('.contents');

  //condition
  if (countElement.innerText == 7) {
    const hiddenMessage = document.createElement('h4');
    hiddenMessage.innerText = 'Selamat! anda menemukan hadiah tersembunyi...';
    const image = document.createElement('img');
    image.setAttribute('src', 'https://i.ibb.co/0V49VRZ/catto.jpg');
    contents.appendChild(hiddenMessage).appendChild(image);
  } else if (countElement.innerText >= 7) {
    const hiddenMessage = contents.querySelector('h4');
    const imageElement = contents.querySelector('img');
    imageElement.remove();
    hiddenMessage.remove();

    const newMessage = document.createElement('h4');
    newMessage.innerText = 'Anda sudah lebih dari 7 kali...';
    contents.appendChild(newMessage);
  }
}

//   document.getElementById('incrementButton').onclick = increment;
function welcome() {
  alert('Sim salabim muncullah elemen-elemen HTML!');
  const contents = document.querySelector('.contents');
  contents.removeAttribute('hidden');
}
//  document.body.onload = welcome;

//  ADDEVENTLISTENER
window.addEventListener('load', welcome);
document.getElementById('incrementButton').addEventListener('click', increment);
