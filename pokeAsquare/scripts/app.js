//when we click the begin button the timer should start
let score = 0;
let time = 5;
let round = 1;
let numSquares = 20;
const button = $('button');
button.on('click', () => {
	setupRound(numSquares);
})

//Write a function that set ups the squares
//Create a div based on the number of inputs
//it should add that div to the squares class
const createSquares = (numOfSquares) => {
	const squaresDiv = $('.squares');
	for(let i = 0; i < numOfSquares; i++){
		const square = $('<div>').on('click',(e) => {
			$(e.currentTarget).css('opacity',0);
			checkBlue(e.currentTarget);
		});
		applyRandomColor(square);
		$('.squares').append(square);
	}
}

const applyRandomColor = (square) => {
	const rand = Math.floor(Math.random()*3);
	if(rand === 0)
		$(square).css('background-color','red');
	else if(rand === 1)
		$(square).css('background-color','blue');
	else
		$(square).css('background-color','green');
}

const checkBlue = (square) => {
	if($(square).css('background-color') === 'rgb(0, 0, 255)')
		score++;
	else
		score--;
	$('h1').text(`Scoreboard: ${score}`);
}

const setTimer = () => {
	const temp = setInterval( () => {
		time--;
		$('#timer').text(`Timer: ${time}`);
		if(time === 0){
			displayModal();
			clearInterval(temp);
		}
	}, 1000)
}

const setupRound = () => {
	$('.squares').empty();
	$('#round').text(`Round: ${round}`);
	$('#timer').text(`Timer: ${time}`);
	createSquares(numSquares);
	setTimer();
	round++;
	numSquares += 5;
	time = 5;
}

const displayModal = () => {
	$('p').text(`You scored ${score} points!`);
	$('.modal').css('display','block');
	$('.close').on('click', () => {
		$('.modal').css('display','none');
	});
}