// Espera até que o DOM esteja completamente carregado antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
  // Obter elementos do header e do footer
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");

  // Define os caminhos base para os templates, imagens e links
  let templatesPath, imagePath, hrefPathIndex, hrefPathPages;

  // Verifica o caminho atual da página
  const currentPagePath = window.location.pathname;

  // Define os caminhos com base na localização da página
  if (
    currentPagePath === "/ETE-PE/tourism-agency/" ||
    currentPagePath === "/ETE-PE/tourism-agency/index.html" ||
    currentPagePath === "/tourism-agency/" ||
    currentPagePath === "/tourism-agency/index.html" ||
    currentPagePath === "/" ||
    currentPagePath === "/index.html"
  ) {
    // Se a página estiver na raiz do domínio
    templatesPath = "static/templates/";
    imagePath = "static/img/";
    hrefPathIndex = "index.html";
    hrefPathPages = "pages/";
  } else {
    // Se a página estiver em um diretório diferente
    templatesPath = "../static/templates/";
    imagePath = "../static/img/";
    hrefPathIndex = "../index.html";
    hrefPathPages = "";
  }

  // Função para carregar o conteúdo do header
  fetchTemplate("header.html", header);

  // Função para carregar o conteúdo do footer
  fetchTemplate("footer.html", footer);

  // Função para carregar um template e substituir caminhos de imagens e links
  function fetchTemplate(templateName, targetElement) {
    fetch(templatesPath + templateName)
      .then((response) => response.text())
      .then((data) => {
        // Substitui os caminhos das imagens no conteúdo do template
        data = data.replace(/src="static\/img\//g, `src="${imagePath}`);
        // Substitui os caminhos dos links no conteúdo do template
        data = data.replace(/href="index.html/g, `href="${hrefPathIndex}`);
        data = data.replace(/href="pages\//g, `href="${hrefPathPages}`);
        // Define o conteúdo do elemento alvo
        targetElement.innerHTML = data;
      });
  }
});
