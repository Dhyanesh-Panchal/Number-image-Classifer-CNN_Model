let pixel_array
let clearButton, submitButton

function setup() {
	createCanvas(280, 280);
	background(0);
	// Create a variable to store the current mouse position
	let mouseX = 0;
	let mouseY = 0;

	// Clear button
	clearButton = select("#clear");
	// console.log(clearButton);
	clearButton.mousePressed(clearCanvas);


	// Submit button
	submitButton = select("#submit");
	submitButton.mousePressed(submitData);

	pixel_array = new Array(28);

	for (let i = 0; i < 28; i++) {
		pixel_array[ i ] = new Array(28).fill(0);
	}

	console.log(pixel_array);
}

function draw() {
	// Display the current mouse position
	textSize(12);
	fill(0);
}

function mouseDragged() {
	// Add a mouseMoved event listener to draw a pixel at the current mouse position
	fill(255);
	stroke(255);
	rect(mouseX - mouseX % 10, mouseY - mouseY % 10, 10, 10);
	pixel_array[ Math.floor(mouseY / 10) ][ Math.floor(mouseX / 10) ] = 1
	// console.log(pixel_array);	
}


function clearCanvas() {
	// Clear the canvas and reset the pixel_array
	console.log('Clear')
	pixel_array = new Array(28);

	for (let i = 0; i < 28; i++) {
		pixel_array[ i ] = new Array(28).fill(0);
	}

	// clear the number
	number_span = document.getElementById('number')
	number_span.textContent = ''
	setup() //this will clear the canvas
}

async function loadClassifierModel() {
	console.log("load function called");
	const model = await tf.loadLayersModel('./model.json');
	return model
}

async function submitData() {
	console.log(pixel_array)

	tensor_array = tf.tensor([].concat.apply([], pixel_array), [ 1, 28, 28, 1 ])
	// tensor_array.reshape([ 28, 28, 1 ])
	console.log(tensor_array.shape)
	try {
		// console.log("Inside the trycatch")
		classifier = await loadClassifierModel()
		// console.log(classifier)
		prediction_mat = classifier.predict(tensor_array).dataSync()
		predicted_number = prediction_mat.indexOf(Math.max(...prediction_mat))
		console.log(predicted_number)

		// write the number on the screen
		number_span = document.getElementById('number')
		number_span.textContent = predicted_number

	} catch (error) {
		console.log(error);
	}
}	