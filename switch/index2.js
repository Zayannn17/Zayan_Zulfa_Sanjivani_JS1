function tampilkanHari() {
    var hari = document.getElementById("inputHari").value;
    var hasilPesan = "";
    switch (hari) {
        case "Senin":
            hasilPesan = "Hari ini adalah hari Senin.";
            break;
        case "Selasa":
            hasilPesan = "Hari ini adalah hari Selasa.";
            break;
        case "Rabu":
            hasilPesan = "Hari ini adalah hari Rabu.";
            break;
        case "Kamis":
            hasilPesan = "Hari ini adalah hari Kamis.";
            break;
        case "Jumat":
            hasilPesan = "Hari ini adalah hari Jumat.";
            break;
        case "Sabtu":
            hasilPesan = "Hari ini adalah hari Sabtu.";
            break;
        case "Minggu":
        hasilPesan = "Hari ini adalah hari Minggu.";
        break;
        default:
            hasilPesan = "Tidak ada hari yang cocok.";
        }
        document.getElementById("hasil").innerHTML = hasilPesan;
}