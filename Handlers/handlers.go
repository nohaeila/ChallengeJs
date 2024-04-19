package Handlers

import "net/http"

// AccueilHandler gère la page d'accueil
func AccueilHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "templates/accueil.html")
}

// SnakeHandler gère les pages de jeux
func SnakeHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "templates/snake.html")
}

// TicTacToeHandler gère les pages de jeux
func TicTacToeHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "templates/ticTacToe.html")
}

/*func MorpionHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "templates/morpion.html")
}*/
