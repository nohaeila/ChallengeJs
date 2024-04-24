package main

import (
	"ChallengeJs/Handlers"
	"fmt"
	"net/http"
)

func main() {
	// Gère le chemin pour les fichiers CSS
	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("./assets/css/"))))

	// Gère le chemin pour les fichiers images
	http.Handle("/img/", http.StripPrefix("/img/", http.FileServer(http.Dir("./assets/img/"))))

	// Gère le chemin pour les fichiers JavaScript
	http.Handle("/scripts/", http.StripPrefix("/scripts/", http.FileServer(http.Dir("./Web/scripts/"))))

	// Redirection de l'URL racine vers /choixJeux
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.Redirect(w, r, "/choixJeux.html", http.StatusSeeOther)
	})

	// Définition des gestionnaires pour les autres routes
	http.HandleFunc("/choixJeux", Handlers.ChoixJeuxHandler)
	http.HandleFunc("/snake", Handlers.SnakeHandler)
	http.HandleFunc("/ticTacToe", Handlers.TicTacToeHandler)
	http.HandleFunc("/typingSpeedTest", Handlers.TypingSpeedTestHandler)

	// Démarrage du serveur
	fmt.Println("Serveur démarré sur le port 8080, http://localhost:8080/")
	http.ListenAndServe(":8080", nil)
}
