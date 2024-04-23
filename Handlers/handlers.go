package Handlers

import "net/http"

// ChoixJeuxHandler gère la page choixJeux
func ChoixJeuxHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "templates/choixJeux.html")
}

// SnakeHandler gère la page de jeux
func SnakeHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "templates/snake.html")
}

// TicTacToeHandler gère la page de jeux
func TicTacToeHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "templates/ticTacToe.html")
}

// CalculateurVitesseHandler gère la page de jeux
func CalculateurVitesseHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "templates/calculateurVitesse.html")
}
