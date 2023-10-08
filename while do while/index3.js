// Loop While
var whileList = document.getElementById("whileList");
var i = 1;

while (i <= 16) {
    var listItem = document.createElement("li");
    listItem.textContent = "Iterasi ke-" + i;
    whileList.appendChild(listItem);
    i++;
}

// Loop Do...While
var doWhileList = document.getElementById("doWhileList");
var j = 1;

do {
    var listItem = document.createElement("li");
    listItem.textContent = "Iterasi ke-" + j;
    doWhileList.appendChild(listItem);
    j++;
} while (j <= 16);