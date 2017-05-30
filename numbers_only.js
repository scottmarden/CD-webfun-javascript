function numbersOnly(arr){ //creates & returns a new array with only numbers.
	
	var newArr = [];

	for(var i = 0; i < arr.length; i++){
		if(typeof arr[i] === "number"){
			newArr.push(arr[i]);
		}
		else {
			continue;
		}
	}
	return newArr;
}

function numbersOnly2(arr){//removes non-numbers and returns the modified array.

	for(var i = 0; i < arr.length; i++){
		if(typeof arr[i] !== "number"){
			var temp = arr[i];
			for (var j = i; j < arr.length; j++){
				arr[j] = arr[j+1];
			}
			arr[arr.length-1] = temp;
			arr.pop();
		}
	}
	return arr;
}
