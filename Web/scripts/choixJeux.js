const carousel = document.querySelector('.carousel');

carousel.addEventListener('wheel', (event) => {
  event.preventDefault();
  carousel.scrollLeft += event.deltaX;
});

function scrollCarousel(scrollAmount) {
  const carousel = document.querySelector('.carousel');
  carousel.scrollLeft += scrollAmount;
}

// js pour Affichage du pseudo
document.addEventListener("DOMContentLoaded", function() {
  var pseudo = getParameterByName("pseudo");

  if (pseudo) {
      // Afficher le pseudo dans le message de bienvenue
      var welcomeMessage = document.getElementById("welcomeMessage");
      welcomeMessage.textContent = "Bienvenue " + pseudo + " !";
  } else {
      // Gérer le cas où aucun pseudo n'est transmis
      alert("Erreur : Aucun pseudo transmis !");
  }
});

// Fonction pour récupérer un paramètre depuis l'URL
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}