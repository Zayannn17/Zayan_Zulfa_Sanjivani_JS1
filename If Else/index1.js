// Cek Status Umur
function cekStatusUmur() {
  var umur = parseInt(document.getElementById("inputUmur").value);
  var hasilPesan = "";

  if (umur < 0) {
      hasilPesan = "Umur tidak valid.";
  } else if (umur < 18) {
      hasilPesan = "Anda adalah seorang anak.";
  } else if (umur < 60) {
      hasilPesan = "Anda adalah seorang dewasa.";
  } else {
      hasilPesan = "Anda adalah seorang senior.";
  }

  document.getElementById("hasilUmur").innerHTML = hasilPesan;
}

// Cek Status Nilai
function cekStatusNilai() {
  var nilai = parseInt(document.getElementById("inputNilai").value);
  var hasilPesan = "";

  if (nilai < 0 || nilai > 100) {
      hasilPesan = "Nilai tidak valid.";
  } else if (nilai < 50) {
      hasilPesan = "Anda tidak lulus.";
  } else {
      hasilPesan = "Selamat, Anda lulus!";
  }

  document.getElementById("hasilNilai").innerHTML = hasilPesan;
}