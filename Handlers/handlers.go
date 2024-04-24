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

// TypingSpeedTestHandler gère la page de jeux
func TypingSpeedTestHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "templates/typingSpeedTest.html")
}
