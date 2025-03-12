const counter = {

	count: 5,

	step: 2

};

const countingStep = (stepCounter)=>{

	for(let key in stepCounter){

		if(key == "count"){

			return stepCounter[key] += stepCounter.step;
		}
	}

};

console.log(`count is ${countingStep(counter)}`);