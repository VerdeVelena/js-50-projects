let score = [0, 0];
const coinArr = ["Heads", "Tails"];

const message = document.querySelector(".message");
const buttons = document.querySelectorAll(".btn");
// console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
	// console.log(buttons[i]);
	buttons[i].addEventListener("click", tossCoin);
}
function tossCoin(ev) {
	const playerGuess = ev.target.innerText;
	let compToos = Math.floor(Math.random() * 2);
	const computerGuess = coinArr[compToos];
	message.innerHTML = `Computer selected : ${computerGuess} <br>`;
	let output;

	if (playerGuess === computerGuess) {
		//  win
		output = "Player wins";
		score[0]++;
	} else {
		// loss
		output = "Computer wins";
		score[1]++;
	}

	message.innerHTML = `${message.innerHTML}  
  ${output}! <br>  Player: ${score[0]} /  Computer: ${score[1]}`;
}
