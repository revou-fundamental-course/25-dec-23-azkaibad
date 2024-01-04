document.addEventListener('DOMContentLoaded', function() {
    showContent('keliling');
  });
function showContent(type) {
    // Sembunyikan semua konten terlebih dahulu
    document.getElementById('kelilingContent').style.display = 'none';
    document.getElementById('luasContent').style.display = 'none';

    // Tampilkan konten sesuai dengan tombol yang diklik
    if (type === 'keliling') {
      document.getElementById('kelilingContent').style.display = 'block';
    } else if (type === 'luas') {
    resetForm(); 
      document.getElementById('luasContent').style.display = 'block';
    }

    // Tampilkan div content secara keseluruhan
    document.getElementById('content').style.display = 'block';
  }
  

function hitungKeliling() {
    var sisiA = parseFloat(document.getElementById('sideA').value);
    var sisiB = parseFloat(document.getElementById('sideB').value);
    var sisiC = parseFloat(document.getElementById('sideC').value);

    if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC) || sisiA <= 0 || sisiB <= 0 || sisiC <= 0) {
      document.getElementById('hasil').innerHTML = 'Masukkan panjang sisi yang valid.';
      return;
    }

    var keliling = sisiA + sisiB + sisiC;
    document.getElementById('hasil').innerHTML = 'Keliling Segitiga: ' + keliling;
  }

  function hitungLuas() {
    var alas = parseFloat(document.getElementById('inputAlas').value);
    var tinggi = parseFloat(document.getElementById('inputTinggi').value);

    if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
      document.getElementById('hasil').innerHTML = 'Masukkan panjang alas dan tinggi yang valid.';
      return;
    }

    var luas = 0.5 * alas * tinggi;
    document.getElementById('hasil').innerHTML = 'Luas Segitiga: ' + luas.toFixed(2);
  }

  function resetForm() {
    document.getElementById('inputAlas').value = '';
    document.getElementById('inputTinggi').value = '';
    document.getElementById('hasil').innerHTML = '';
  }