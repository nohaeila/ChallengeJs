document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.getElementById("submitButton");
    var pseudoInput = document.getElementById("pseudoInput");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Empêcher le comportement par défaut du formulaire

        var pseudo = pseudoInput.value.trim(); // Récupérer le pseudo et supprimer les espaces vides

        if (pseudo) {
            // Rediriger l'utilisateur vers la page choixjeux.html avec le pseudo en tant que paramètre
            window.location.href = "choixjeux.html?pseudo=" + encodeURIComponent(pseudo);
        } else {
            // Gérer le cas où aucun pseudo n'est saisi
            alert("Veuillez entrer un pseudo !");
        }
    });
});