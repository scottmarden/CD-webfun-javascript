function printRange(start,end,amt){

	var num = start;

	if(amt == null){
		amt = 1;
	}

	if(end == null){

		end = start;
		num = 0;
	}

	if (end > num){
		while(num < end){
			console.log(num);
			num = num + amt;
		}
	}

	if (end < num){
		while(num > end){
			console.log(num);
			num = num - amt;
		}
	}

}
