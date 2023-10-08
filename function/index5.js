// Fungsi untuk menjumlahkan dua angka
function tambah() {
    var angka1 = parseFloat(document.getElementById("angka1").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
    var hasil = angka1 + angka2;
    document.getElementById("hasil").textContent = hasil;
}

// Fungsi untuk mengurangkan dua angka
function kurang() {
    var angka1 = parseFloat(document.getElementById("angka1").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
    var hasil = angka1 - angka2;
    document.getElementById("hasil").textContent = hasil;
}

// Fungsi untuk mengalikan dua angka
function kali() {
    var angka1 = parseFloat(document.getElementById("angka1").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
    var hasil = angka1 * angka2;
    document.getElementById("hasil").textContent = hasil;
}

// Fungsi untuk membagi dua angka
function bagi() {
    var angka1 = parseFloat(document.getElementById("angka1").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (angka2 !== 0) {
        var hasil = angka1 / angka2;
        document.getElementById("hasil").textContent = hasil;
    } else {
        document.getElementById("hasil").textContent = "Tidak dapat dibagi oleh nol.";
    }
}