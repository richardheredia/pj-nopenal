document.addEventListener("DOMContentLoaded", function () {
  loadPartial("site-header", "partials/header.html");
  loadPartial("site-footer", "partials/footer.html");
});

function loadPartial(elementId, filePath) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`No se pudo cargar ${filePath}`);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => {
      console.error(error);
    });
}
