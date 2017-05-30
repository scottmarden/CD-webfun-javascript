function printRoster(){
	var students = [
		{first_name:  'Michael', last_name : 'Jordan'},
		{first_name : 'John', last_name : 'Rosales'},
		{first_name : 'Mark', last_name : 'Guillen'},
		{first_name : 'KB', last_name : 'Tonel'}
 	];

	for (var i = 0; i < students.length; i++){
		console.log(students[i].first_name + " " + students[i].last_name);
	}

}



function printRoster2(){

	var nameLength = 0;

	var students = [
		{first_name : 'Michael', last_name : 'Jordan'},
		{first_name : 'John', last_name : 'Rosales'},
		{first_name : 'Mark', last_name : 'Guillen'},
		{first_name : 'KB', last_name : 'Tonel'}
	];

	var instructors = [
		{first_name : 'Michael', last_name : 'Choi'},
		{first_name : 'Martin', last_name: 'Puryear'}
	];

	console.log("Students:");

	for (var i =0; i<students.length; i++){
		nameLength = (students[i].first_name).length + (students[i].last_name).length;
		console.log(i+1 + " - " + students[i].first_name + " " + students[i].last_name + " - " + nameLength);
	}

	console.log("Instructors:");

	for (var j =0; j<instructors.length; j++){
		nameLength = (instructors[j].first_name).length + (instructors[j].last_name).length;
		console.log(j+1 + " - " + instructors[j].first_name + " " + instructors[j].last_name + " - " + nameLength);
	}

}
