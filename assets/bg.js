
var myVar;

function bgLoader() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.body.style.backgroundImage = "url('img/19.jpg')";
}