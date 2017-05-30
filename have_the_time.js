function whatTimeIsIt(){
	var hour = 8;
	var minute = 50;
	var period = "AM";
	var timeDay;

	if(hour <= 5 && period == "PM"){
		timeDay = "afternoon";
	}
	else if(hour > 5 && hour < 12 && period == "PM" ){
		timeDay = "evening";
	}
	else if (hour == 12 && period == "AM"){
		timeDay = "midnight";
	}
	else if (hour == 12 && period == "PM"){
		timeDay = "noon";
	}
	else {
		timeDay = "morning";
	}


	if(minute >= 0 && minute < 30){
		console.log("It's just after ", hour, " in the ", timeDay);
	}
	else if (minute >= 30 && minute < 60){
		console.log("It's almost ", hour+1, "in the ", timeDay);
	}
}
