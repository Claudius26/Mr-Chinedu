const person = {

	firstName: "Claudius",

	lastName: "Otuzi",

	Age: 25

};

const fullName = (names)=>{

	return (`FirstName:${names.firstName}, LastName:${names.lastName}, Age: ${names.Age}`);
	

};

console.log(fullName(person));