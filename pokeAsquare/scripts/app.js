let score = 0;
let time = 3;
let round = 1;
const $modal = $('#modal');
const $h2 = $('h2');
const $h3 = $('h3');

// when we click the begin button the timer should start
// selects the button, create an event listener, and then creates a function for when it's clicked
$('#start').on('click', () => {
	setTimer();
	setupRound();
	$('.closed').css('display', 'none')
});

// write a function that sets up our squares
// createSquares, and it should take an input of numberOfSquares
// and this function should 1.) create a div based on the number
// of the input and it should add that div to the .squares class

const createSquares = (numberOfSquares) => {
	for (i = 0; i < numberOfSquares; i++) {
		const square = $('<div>').on('click', (e) => {
			$(e.currentTarget).css('opacity', 0)
			
			const color = $(e.currentTarget).css('backgroundColor');
			checkValidPoke(color);

		})
		applyRandomColor(square);
		$('.squares').append(square);
	}
};

// write a function called applyRandomColor, the function will take
// an input of square, and you'll apply a randomColor that is red,
// or green, that was inputed into the function
// hint... Math.random() may be useful

const applyRandomColor = (square) => {
	const randomNumber = Math.floor(Math.random() * 3) + 1;
	if (randomNumber === 1) {
		square.css('backgroundColor', 'red');
	}
	else if (randomNumber === 2) {
		square.css('backgroundColor', 'blue');
	}
	else {
		square.css('backgroundColor', 'green')
	}
};

// write a function that takes a string, and if it is blue, lets update a global score variable
// function call is check checkValidPoke
// determine whatever you're clicking on whether the color is blue or not

const checkValidPoke = (color) => {
	const arrayOfNumbers = color.split(' ');
	const blueValue = parseInt(arrayOfNumbers[2]);

	if (blueValue === 255) {
		score++
		console.log(score);
	} else {
		score --;
		console.log(score);
	}
	$('h1').text(`Scoreboard: ${score}`);
};

// Now lets update the dom with the value of the score,
// give it a try!
// (Hint: you can do it in the function you just made)
// reference the last line in the function


// now try to write a function called setTimer
// that starts an interval and countsdown to 0
// when it reaches 0, increase the round
// update the time on the dom for each second

const setTimer = () => {
	const timer = setInterval(() => {
		time--
		if (time ===0) {
			clearInterval(timer)
			$('.closed').css('display', 'block')
			$h2.text(`Round: ${round} Complete!`)
			$h3.text(`Your score was ${score}`)
			round++
		}
		$('#timer').text(`timer: ${time}s`)
	}, 1000)
}

// now write a function called setupRound
// that will change the round number on the DOM
// and setup a new game, with an increase in the number of squares, 
// and a decrease in the amount of time
//if we do this we can just call it in
// the button so we can reuse that button every round

const setupRound = () => {
	$('.squares').empty();
	$('#round').text(`round: ${round}`)
	
	if(round === 1) {
		createSquares(50);
		time = 3;
	} else if(round === 2) {
		createSquares(75);
		time = 3;
	} else if (round === 3) {
		createSquares(100);
		time = 3;
	} else if (round === 4) {
		createSquares(150);
		time = 5;
	}

};

// Step 1 - create a modal(big pop up window in the center of the screen)
// you'll make this modal appear at the beginning of each round
// when time === 0, have modal appear at beginning of screen
// on modal have it leave a message 'you scored x points in round x'
// can make the modal and css and switch a class in jquery

var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", function() {
  modal.classList.toggle("closed");
});



