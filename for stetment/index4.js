// Mengakses elemen HTML dengan ID 'angkaList'
var angkaList = document.getElementById("angkaList");

// Menggunakan pernyataan for untuk menambahkan angka dari 1 hingga 10 ke dalam elemen <ul>
for (var i = 1; i <= 10; i++) {
    // Membuat elemen <li> untuk setiap angka
    var listItem = document.createElement("li");
            
    // Menambahkan teks angka ke dalam elemen <li>
    listItem.textContent = i;

    // Menambahkan elemen <li> ke dalam elemen <ul>
    angkaList.appendChild(listItem);
}