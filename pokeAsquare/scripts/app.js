//when we click the begin button the timer should start 

let score = 0;
let time = 30;
let round = 1;
const $modalActive = $(".modalActive")
const $hiddenModal = $(".hiddenModal")
const $button = $("button")
$('button').on('click', (e) => {
	// to opacity zero
	setTimer()
	setUpRound()
	s$( "button" ).addClass(".hiddenModal")

	// console.log('the click is working')

})

// write a function that sets up our squares 
// createSquare, and it should take an input
// of numberOfSquares
//1. should create a div based on the number of the input
// should add that div to the .square class
const createSquares = (numberOfSquares) => {
for(let i = 0; i < (numberOfSquares); i++){
	const square = $('<div>').on('click', (e) => {
		$(e.currentTarget).css('opacity', 0) //this click the square you are clicking. // css makes it invisible
		// console.log('click on square is working')

		const color = $(e.currentTarget).css('background-color')
		checkValidPoke(color);
		// console.log(color, ' this is the color variable')
	});
	applyRandomColor(square);
	$('.squares').append(square)
	}
}

// write a function called "applyRandomColor"
// the function will take an iput of square
// you'll apply a randomColor this is red, blue, or green to your square that was
//  inputed into the function hint......... Math.random() may be useful

const applyRandomColor = (square) => {
   const randNum = Math.floor(Math.random() * 3) + 1;
   if(randNum === 1){
   		square.css('background-color', 'red')
   }
   else if(randNum === 2){
   		square.css('background-color', 'blue')
   }
   else {
   		square.css('background-color', 'green')
   }

} 

const checkValidPoke = (color) => {
	const arrayOfNumbers = color.split(' ');
	const blueValue = parseInt(arrayOfNumbers[2]);

	if(blueValue === 255){
		score ++
		console.log(score)
	}else {
		score--;
		console.log(score)
	}
	//Now lets update the dom with the value of score,
//give it a try!
//(hint: you can do it in the function you just made)

	$('h1').text(`Scoreboard: ${score}`)

}	
// now try to write a function called setTimer that starts an interval and countsdown to 0 
// and when it reaches to 0 increase the round
// update the time on the dom for each second
// hints: setInterval, clearInterval
const setTimer = () => {
	const timer = setInterval(() =>{
		time --
		if(time === 0){
			$(".modalActive").text(`You click on ${score} of blue squares and you completed ${round} round`)
			clearInterval(timer)
			round++;
		}
		$('#timer').text(`timer: ${time}s`)
	}, 1000)
}
// Now write a function called setUpRound,
// that will change the round number on the dom
// and set up a new game, with an increase in the number of squares and a decrease
// in the amount of time, if we do this we can just call it in 
// the buton we can reuse that button every round 
const setUpRound = () => {
	$('.squares').empty();
	$('#round').text(`round: ${round}`)

	if(round === 1){
		createSquares(50);
		time = 3;
		  $(".modal").css('opacity', 1);
	}else if (round === 2){
		createSquares(100);
		time = 3;
		  $(".modal").css('opacity', 1);
	}else if (round === 3){
		createSquares(150);
		time = 3;
		  $(".modal").css('opacity', 1);
	}else{
		createSquares(250)
		time = 3;
		  $(".modal").css('opacity', 1);
	}
}
// const setHiddenModal = () => {
// 	$hiddenModal =
// }


// 1. Create a modal
// (pop up window in the center of the screen)

// You'll make this modal appear at the end of each
// round

// You'll display some text like, You click on
// x number of blue squares and you completed round
// y








