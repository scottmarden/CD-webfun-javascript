function bdayCountdown(){
	var daysUntilMyBirthday = 60;

	while (daysUntilMyBirthday >= 0){
		if (daysUntilMyBirthday == 0){
			console.log("Happy HAPPY happy HAPPY BiRtHdAy!!!!!!!1!!!!!!!!1!!!!!");
		}
		else if(daysUntilMyBirthday == 1){
			console.log(daysUntilMyBirthday + " DAY UNTIL MY BIRTHDAAAAAY!!!!!");
		}
		else if (daysUntilMyBirthday <= 5 && daysUntilMyBirthday > 0){
			console.log(daysUntilMyBirthday + " DAYS UNTIL MY BIRTHDAAAAAY!!!!!");
		}
		else if (daysUntilMyBirthday <=30 && daysUntilMyBirthday > 5){
			console.log(daysUntilMyBirthday + " days until my Birthdaaaaay!!!!");
		}
		else {
			console.log(daysUntilMyBirthday + " days until my birthday. Such a long time...");
		}
		daysUntilMyBirthday--;
	}
}
