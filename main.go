package main

import (
	"ChallengeJs/Handlers"
	"fmt"
	"net/http"
)

func main() {
	// Gère le chemin pour les fichiers CSS
	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("./Web/assets/"))))

	// Gère le chemin pour les fichiers JavaScript
	http.Handle("/scripts/", http.StripPrefix("/scripts/", http.FileServer(http.Dir("./Web/scripts/"))))

	http.HandleFunc("/", Handlers.AccueilHandler)
	http.HandleFunc("/accueil", Handlers.AccueilHandler)
	http.HandleFunc("/snake", Handlers.SnakeHandler)
	http.HandleFunc("/ticTacToe", Handlers.TicTacToeHandler)

	// Démarrage du serveur
	fmt.Println("Serveur démarré sur le port 8080, http://localhost:8080/")
	http.ListenAndServe(":8080", nil)
}
