// when we click the begin button the time should start

let score = 0
let time = 30 
let round = 1
let roundScore = 0

$("button").on("click", () => { //now the button is listening for a click to turn on
		setupRound();
		setTimer();
})


//Write a function that sets up our squares

// createSquares, and it should take an input
// of NumberOfSquares
// 1. should create a div based on the number of the
// input
// It should add that div to the .squares class

const createSquares = (numberOfSquares) => {
	for (let i = 0; i < numberOfSquares; i++) {
		const square = $("<div>").on("click", (e) => {					//can run a function without declaring it for .on(
			$(e.currentTarget).css("opacity", 0)
			const color = $(e.currentTarget).css("background-color")
			checkValidPoke(color)
		});
		applyRandomColor(square);
		$(".squares").append(square);			//sqaure.className = squares "why are we using append???" A: we get it form the html in this instance the class is a div we are appending to
	};
};


// Write a  functionc called applyRandomColor
//  the function will take an input of 'square'
// you'll apply a random color tht is red , blue 
// or green that was inputed into
// the function
// hint...... Math.random() may be useful

const applyRandomColor = (square) => {

	randomColor = Math.floor(Math.random() * 3) + 1

	if (randomColor === 1) {
		square.css("background-color", "red");
	} else if (randomColor === 2) {
		square.css("background-color", "blue");
	} else {
		square.css("background-color", "green");
	};
};

// just determine whatever you you are clicking,
// whether color is blue or not

// lets write a function that takes that string 
// and if it is blue lets update a global score variable.
// function calll is checkValidPoke


const checkValidPoke = (color) => {

const arrayOfNumbers = color.split(" ");
const blueValue = parseInt(arrayOfNumbers[2]);

if (blueValue === 255) {										//don't worry about bugs such as score bug from multiple clicks; fi later
	score ++;
	roundScore++;
	console.log(score);

} else {
	score --;
	console.log(score);
}

$("h1").text("scoreboard: " + score)	 ///UPDATES THE SCOREBOARD WITH NEW SCORE

	// then
}

//write a function calles setTime rhar starts ad intterval and counsdown to 0 ab when it reaches 0 increases the round

//hints
//setInterval
//clearInterval

const setTimer = () => {
	seconds = setInterval(() => {
	if (time === 0) {
		clearInterval(seconds);
		round++;
		$("p").text(`Round ${round - 1} complete. ${roundScore} blue squares captured.`);
		$("#modal").css("display", "block");
		$("#modal-overlay").css("display", "block");
	} else {
	time --;
	$("#timer").text(`timer: ${time}s`);
	}
}, 1000);
}

const setupRound = () => {

	$(".squares").empty();
	$("#round").text(`round: ${round}`);

	let roundScore = 0
	let grid = 50

	if (round === 1){
		createSquares(50);
		time = 30;
	} else if (round <= 5) {
	createSquares(grid * round);
	time = 30 - (round * 5);
	$("#timer").text(`timer: ${time}s`);
	} else {
		createSquares(500);
		time = 5;
	};
};


$("input").on("click", () => { //now the button is listening for a click to turn on
		$("#modal").css("display", "none")
		$("#modal-overlay").css("display", "none")
})

//





