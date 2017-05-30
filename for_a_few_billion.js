function doubleOrNothing(){
	var day = 1;
	var cash = 0.1;

	while (day <= 30){
		cash *= 2;
		day++;
	}
	console.log(cash);
}

function doubleOrNothing(amt){
	var day = 1;
	var cash = 0.1;

	while (cash < amt){
		cash *= 2;
		day++;
	}
	console.log("It took " + day + " days to make " + cash + "dollars");
}

//use the above function to find out how many days to make $10,000 or 1 billion dollars. Even infinite.
