const output = document.querySelector(".output_message");
const button = document.querySelector(".btn");

button.addEventListener("click", showMessage);
function showMessage() {
	const date = new Date();
	let cur_time = date.getHours();
	let message;
	// cur_time = 17;
	if (cur_time > 17) {
		message = `It's evening`;
		// output.style.backgroungColor = "gray";
	} else if (cur_time > 12) {
		message = `It's afternoon`;
		// output.style.backgroungColor = "orange";
	} else {
		message = `Good morning!`;
		// output.style.backgroungColor = "yellow";
	}

	output.innerHTML = message;
}
