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
  });
});
