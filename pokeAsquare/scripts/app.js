let score = 0;
let time = 30;
let round = 1;

//when we click the begin button, the time should start

$('button').on('click', () => {
	setTimer();
	setupRound();


})


//write a function that sets up our squares
//should take numberOfSquaered
//should create div based on imput
//it should add that div to the .squares class


const createSquares = (numberOfSquares) => {
	for(i = 0; i < numberOfSquares; i++){
		const square = $('<div>').on('click', (event)=> {
			$(event.currentTarget).css('opacity', 0)
			const color = $(event.currentTarget).css('background-color');
			console.log(color);
			checkValidPoke(color);
		})
		applyRandomColor(square);
		$('.squares').append(square)

	} 
	keepOn();

}

//write a function called applyRandomColor
//it will take square input 
//apply randomColor that is red, blue, or green to your square thsat was inputted into the function
//hint: Math.random may be useful



const applyRandomColor = (square) => {
	const randNum = Math.floor(Math.random() *3) +1;

	if (randNum === 1){
		square.css('background-color', 'red')
	} else if (randNum === 2){
		square.css('background-color', 'blue')
	} else if (randNum === 3){
		square.css('background-color', 'green')
	}

}


const checkValidPoke = (color) => {
	const arrayOfNumbers = color.split (' ');
	const blueValue = parseInt(arrayOfNumbers[2]);

	if (blueValue === 255) {
		score++
		console.log(score)
	} else {
		score --;
		console.log(score)
	}
	$('h1').text(`scoreboard: ${score}`)
}






const setTimer = () =>{
	const timer = setInterval(() => {
		time--
		if(time === 0){
			clearInterval(timer)
			round ++
			$('.modal').css('display', 'block')
			$('.modal-overlay').css('display','block')
			$('.modal-guts').css('display', 'block')
			$('p').text(`You\'ve scored ${score} points`)
		}

		$('#timer').text(`timer: ${time}s`)
	}, 1000)
}

const keepOn = () => {
			$('.modal-overlay').css('display','none')
			$('.modal-guts').css('display', 'none')
			$('p').text(`You\'ve scored ${score} points`)

}


const setupRound = () => {
	$('.squares').empty();
	$('#timer').text(`timer: ${time}s`);

	$('#round').text(`round: ${round}s`)

	if(round === 1){
		createSquares(50);
		time = 30;
	} else if(round === 2){
		createSquares(150);
		time = 20;
	} else if(round === 3){
		createSquares(175);
		time = 10;
	} else if(round === 4){
		createSquares(250);
		time = 10;
	}

}








$('.close-button').on('click', (e) => {
	$('.modal').css('display', 'none')
	$('modal-overlay').css('display', 'none')
	$('modal-guts').css('display', 'none')
	$('close-button').css('display', 'none')

})





// const master = $('.master');
// closeButton.addEventListener("click", function() {
//  master.css('display', 'none')
// });



//create a modal

// const modal = document.querySelector("#modal");
// const modalOverlay = document.querySelector("#modal-overlay");
// const closeButton = document.querySelector("#close-button");
// const openButton = document.querySelector("#open-button");

// closeButton.addEventListener("click", function() {
//   modal.classList.toggle("closed");
//   modalOverlay.classList.toggle("closed");
// });
