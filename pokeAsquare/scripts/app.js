let score = 0; // Put this outside the checkValidPoke function to ensure the value saves
let time = 30; // Same reason as above
let round = 1; // Same reason as above

// When we click the begin button, the timer should start
$('button').on('click', () => {
	if (round > 1){
		$('.modal-overlay').hide();
		$('.active-modal').hide();
	}
	setTimer();
	setupRound();
})

// Write a function that sets up our squares

// createSquares, and it should take an input of numberOfSquares
	// Should create a div based on the number of the input
		// It should add that div to the .squares class
const createSquares = (numberOfSquares) => {
	for (let i = 0; i < numberOfSquares; i++){
		const square = $('<div>').on('click', (e) => {
			$(e.currentTarget).css('opacity', 0); // makes the squares disappear when clicked

			const color = $(e.currentTarget).css('backgroundColor'); // equals string of square's rgb
			checkValidPoke(color); // added for checking the poke, for the sake of the function below
			console.log(color + ': this is the color variable');
		});

		applyRandomColor(square); // applies a random color to the div thanks to the function below
		$('.squares').append(square); // appends the square to the web page
	}
}

// Write a function called applyRandomColor
	// The function will take an input of square
	// You'll apply a randomColor that is red, blue or green to your square that was inputed to the function
		// HINT: Math.random() may be useful
const applyRandomColor = (squareInput) => {
	const randNum = Math.floor(Math.random() * 3) + 1; // randomly assigns number between 1 and 3

	if (randNum === 1){
		squareInput.css('backgroundColor', 'red'); // makes the square red
	} else if (randNum === 2){
		squareInput.css('backgroundColor', 'blue'); // makes the square blue
	} else {
		squareInput.css('backgroundColor', 'green'); // makes the square green
	}
}

// Just determine whatever you are clicking, whether color is blue or not
// Lets write a function that takes a string
	// If it is blue, lets update a global score variable
	// Function call is checkValidPoke
// Create your score variable at the top like the following: let score = 0

// Now lets update the dom with the value of score
	// HINT: you can do it in the function you just made
const checkValidPoke = (color) => {
	console.log(color, " this is square", typeof color);
	const arrayOfNumbers = color.split(' '); // experiment in console to find value exclusive to blue
	const blueValue = parseInt(arrayOfNumbers[2]); // variable is blue's number in rgb(0, 0, 255)

	if (blueValue === 255){
		score++;
		console.log(score);
	} else {
		score--;
		console.log(score);
	}

	$('h1').text(`Scoreboard: ${score}`); // updates the score on the board
}

// Now write a function called setTimer that starts an interval and counts down to 0
	// When it reaches 0, increase the round
	// HINTS: setInterval, clearInterval
const setTimer = () => {
	const timer = setInterval(() => {

		time--

		if (time === 0){
			clearInterval(timer); // ends the countdown
			$('.modal-overlay').show();
			$('.active-modal').show();
			$('#modal-round').text(`That's the end of Round ${round}. Let's see how you did:`);
			$('#blue-squares').text(`In the time that was given to you, you were able to achieve a score of ${score}! If you want a tougher challenge, click the "Next Round?" button to start the next level. Thanks for playing!`);
			round++; // increases round by one, though it's only visable after setupRound function
		}

		$('#timer').text(`timer: ${time}s`) // updates the time on the board

	}, 1000) // each interval happens after every second
}

// Now write a function called setupRound
	// Will change the round number on the DOM and set up a new game, with:
		// an increase in number of squares
		// a decrease in the amount of time
	// If we do this, we can just call it in the button so we can reuse that button every round
const setupRound = () => {
	$('.squares').empty(); // empties out the previous round's squares
	$('#round').text(`round: ${round}`); // updates the round number on the board

	// everytime the button is pressed, the round increases by one
	if (round === 1){
		createSquares(50);
		time = 30;
	} else if (round === 2){
		createSquares(100);
		time = 20;
	} else if (round === 3){
		createSquares(150);
		time = 10;
	} else {
		createSquares(250);
		time = 10;
	}
}


// EXTRA CREDIT: START
// Make the squares lose transparency during each round so you have to click faster.

// Make a Modal to gather the players name at the beginning of the game, and leave them a greeting
// in the header

// Style it make it look nice

// Make a sound when you click a wrong one or a right one.

// have a modal pop up at the begining of a ready so the user knows how to continue

// make a section about how to play the game (how do you want to do that? an About page, in the header,
// a modal, idk???? anything you can imagine)
// EXTRA CREDIT: END



// Create a Modal
	// The modal will be a pop up window in the center of the screen at the end of each round
	// It will appear when the timer reaches 0
	// Leave a message that mentions the round they went through and the score they reached
	// You'll display some text like, "you click on x number of blue squares and you completed round y"


