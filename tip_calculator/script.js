const button = document.querySelector(".btn");
// console.log(button);
const output = document.querySelector(".output");

button.addEventListener("click", function () {
	const cost = document.querySelector(".input");

	let tip = (cost.value * 0.15).toFixed(2);
	let mesaje = `Your tips consist 15% equel to  E${tip} of the amount E${cost.value}`;
	output.innerHTML = mesaje;
});
