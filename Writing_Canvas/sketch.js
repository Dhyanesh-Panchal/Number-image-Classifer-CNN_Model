let image_matrix

function setup() {
	createCanvas(280, 280);
	background(0);
	// Create a variable to store the current mouse position
	let mouseX = 0;
	let mouseY = 0;

	// Create a function to draw a pixel at the current mouse position
	function drawPixel(x, y) {
		fill(0);
		rect(x, y, 1, 1);
	}
}

function draw() {
	// Display the current mouse position
	textSize(12);
	fill(0);
}

function mouseClicked() {
	// Add a mouseMoved event listener to draw a pixel at the current mouse position
	fill(0);
	rect(mouseX, mouseY, 1, 1);
}
