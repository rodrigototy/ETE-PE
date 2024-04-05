document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");

  // Obtém o caminho relativo para os templates e imagens com base na localização da página
  let templatesPath, imagePath, hrefPath;
  console.log(window.location.pathname);

  if (
    window.location.pathname === "/ETE-PE/tourism-agency/" ||
    window.location.pathname === "/ETE-PE/tourism-agency/index.html" ||
    window.location.pathname === "/tourism-agency/" ||
    window.location.pathname === "/tourism-agency/index.html" ||
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html"
  ) {
    templatesPath = "static/templates/";
    imagePath = "static/img/";
    hrefPath = "index.html";
  } else {
    templatesPath = "../static/templates/";
    imagePath = "../static/img/";
    hrefPath = "../index.html";
  }

  // Carrega o header
  fetch(templatesPath + "header.html")
    .then((response) => response.text())
    .then((data) => {
      // Substitui os caminhos das imagens no conteúdo do header
      data = data.replace(/src="static\/img\//g, `src="${imagePath}`);
      data = data.replace(/href="index.html/g, `href="${hrefPath}`);
      header.innerHTML = data;
    });

  // Carrega o footer
  fetch(templatesPath + "footer.html")
    .then((response) => response.text())
    .then((data) => {
      // Substitui os caminhos das imagens no conteúdo do footer
      data = data.replace(/src="static\/img\//g, `src="${imagePath}`);
      footer.innerHTML = data;
    });
});
