
var loadPageVar;

function loadPage() {
  loadPageVar = setTimeout(showLoadPage, 3000);
}

function showLoadPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
