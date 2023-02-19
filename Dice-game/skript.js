const player1 = document.querySelector(".first_palyer");
const player2 = document.querySelector(".second_palyer");
const message = document.querySelector(".game_message");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
	let rolls = [roll(6), roll(6)];
	let tempt;
	if (rolls[0] === rolls[1]) {
		tempt = "Draw";
	} else if (rolls[0] > rolls[1]) {
		tempt = "Player 1 wins";
	} else {
		tempt = "Player 2 wins";
	}
	message.innerHTML = tempt;
	player1.innerHTML = rolls[0];
	player2.innerHTML = rolls[1];

	// console.log(rolls);
});

function roll(num) {
	const intNum = Math.floor(Math.random() * num) + 1;
	let unic = 9855 + intNum;
	let char = "&#" + unic + ";";
	return char;
}
