function spin(quarters){
	var result = 0;
	var winnings = 0;

	while (quarters > 0){
		result = Math.floor(Math.random()*100);
		if(result == 13){
			console.log(result);
			console.log("WINNER!!!");
			winnings = (Math.floor(Math.random()*49) + 51);
			quarters += winnings;
			console.log("You won " + winnings + " quarters!!!");

			return quarters;
		}
		else {
			console.log(result);
			console.log("Bad luck! Try again!");
		}
		quarters--;
	}
	if (quarters == 0){
		console.log("Thanks for playing, please insert more quarters!");
		return quarters;
	}
}
