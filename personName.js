const person = {

	firstName: "Claudius",

	lastName: "Otuzi"

};

const fullName = (names)=>{

	return (`${names.firstName} ${names.lastName}`);
	

};

console.log(fullName(person));