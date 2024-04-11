package main

import (
	"ChallengeJs/handlers"
	"fmt"
	"net/http"
)

func AccueilHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "C:/Users/lnoha/OneDrive/Bureau/Web/ChallengeJs/Web/templates/accueil.html")
}

func main() {
	http.HandleFunc("/", handlers.AccueilHandler)
	http.HandleFunc("/accueil", handlers.AccueilHandler)
	http.HandleFunc("/snake", handlers.SnakeHandler)
	//http.HandleFunc("/morpion", handlers.MorpionHandler)

	//css
	fs := http.FileServer(http.Dir("assets"))
	http.Handle("/assets/", http.StripPrefix("/assets/", fs))

	//js
	js := http.FileServer(http.Dir("scripts"))
	http.Handle("/scripts/", http.StripPrefix("/scripts/", js))

	// Démarrage du serveur
	fmt.Println("Serveur démarré sur le port 8080, http://localhost:8080/")
	http.ListenAndServe(":8080", nil)
}
