const message = document.querySelector(".message");
const score = document.querySelector(".score");
const buttons = document.querySelectorAll(".btn");

let result = [0, 0];
// console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", playGame);
}
function playGame(ev) {
	let playerSelection = ev.target.innerHTML;
	let computerSelection = Math.random();
	if (computerSelection < 0.34) {
		computerSelection = "Rock";
	} else if (computerSelection <= 0.67) {
		computerSelection = "Paper";
	} else {
		computerSelection = "Scissors";
	}
	console.log(playerSelection, computerSelection);
	let winner = checkWinner(playerSelection, computerSelection);
	// console.log(winner);
	if (winner == "Player") {
		winner += "Wins!";
		result[0]++;
	} else if (winner == "Computer") {
		winner += "Wins!";
		result[1]++;
	} else {
		winner += "Results in a tie match";
	}
	score.innerHTML = "Player[" + result[0] + "]/Computer[" + result[1] + "]";
	messanger(
		playerSelection + "/" + computerSelection + "<br><b>" + winner + "<b>"
	);
}

function messanger(mes) {
	message.innerHTML = mes;
}

function checkWinner(pl, co) {
	if (pl === co) {
		return "Draw /";
	}
	if (pl === "Rock") {
		if (co === "Paper") {
			return "Computer";
		} else {
			return "Player";
		}
	}
	if (pl === "Paper") {
		if (co === "Scissors") {
			return "Computer";
		} else {
			return "Player";
		}
	}
	if (pl === "Scissors") {
		if (co === "Rock") {
			return "Computer";
		} else {
			return "Player";
		}
	}
}
