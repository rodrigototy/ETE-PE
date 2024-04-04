document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");

  // Carrega o header
  fetch("templates/header.html")
    .then((response) => response.text())
    .then((data) => {
      header.innerHTML = data;
    });

  // Carrega o footer
  fetch("../static/templates/footer.html")
    .then((response) => response.text())
    .then((data) => {
      footer.innerHTML = data;
    });
});
