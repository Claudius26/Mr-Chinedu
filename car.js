const car = {

	make: "Toyota",

	model: "Camry",

	year: 2021

};


const myCAr = (cars) =>{

	for(let key in cars){

		console.log(`${key}: ${cars[key]}`);

		
	}

};

myCAr(car)