var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var randomize = document.querySelector(".random");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

/* Function to select two random colors and set the gradient based on these values */
function randomizeGradient() {
	/* Logic to generate random color string from: 
	   https://stackoverflow.com/questions/1152024/best-way-to-generate-a-random-color-in-javascript/1152508 */
	color1.value = "#" + (0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	color2.value = "#" + (0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	
	setGradient();
}

/* Call randomizeGradient to set the initial gradient on page load */
randomizeGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomize.addEventListener("click", randomizeGradient);