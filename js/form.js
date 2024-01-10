document.addEventListener('DOMContentLoaded', function () {
  const inputMaxLengthOnLoad = document.getElementById('inputNama').maxLength;
  document.getElementById('sisaKarakter').innerText = inputMaxLengthOnLoad;

  document.getElementById('inputNama').addEventListener('input', function () {
    const jumlahKarakterDiketik =
      document.getElementById('inputNama').value.length;
    const jumlahKarakterMaksimal =
      document.getElementById('inputNama').maxLength;

    console.log('JumlahKarakterDiketik: ', jumlahKarakterDiketik);
    console.log('JumlahKarakterMaks: ', jumlahKarakterMaksimal);

    const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
    document.getElementById('sisaKarakter').innerText =
      sisaKarakterUpdate.toString();

    if (sisaKarakterUpdate === 0) {
      document.getElementById('sisaKarakter').innerText =
        'Batas Maksimal Tercapai!';
    } else if (sisaKarakterUpdate <= 5) {
      document.getElementById('notifikasiSisaKarakter').style.color = 'red';
    } else {
      document.getElementById('notifikasiSisaKarakter').style.color = 'black';
    }

    //onFocus
    document.getElementById('inputNama').addEventListener('focus', function () {
      console.log('inputNama: focus');
      document.getElementById('notifikasiSisaKarakter').style.visibility =
        'visible';
    });

    //onBlur
    document.getElementById('inputNama').addEventListener('blur', function () {
      console.log('inputNama: blur');
      document.getElementById('notifikasiSisaKarakter').style.visibility =
        'hidden';
    });

    //onChange
    document
      .getElementById('inputCaptcha')
      .addEventListener('change', function () {
        console.log('inputCaptcha: change');

        const inputCaptcha = document.getElementById('inputCaptcha').value;
        const submitButtonStatus = document.getElementById('submitButton');

        if (inputCaptcha === 'PRNU') {
          submitButtonStatus.removeAttribute('disabled');
        } else {
          submitButtonStatus.setAttribute('disabled', '');
        }
      });

    //validation
    document
      .getElementById('formDataDiri')
      .addEventListener('submit', function (even) {
        const inputCaptcha = document.getElementById('inputCaptcha').value;

        if (inputCaptcha === 'PRNU') {
          alert('selamat anda lolos!');
        } else {
          alert('Ulangi!');
          document.getElementById('submitButton').setAttribute('disabled', '');
        }
        even.preventDefault();
      });
  });
});
