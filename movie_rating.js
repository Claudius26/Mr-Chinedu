const movie_collection = {movie_names:{}};

const add_movie = (name)=>{

	 if(movie_collection.movie_names[name]){

        	return `Movie "${name}" already exists.`;

   	 }

	const time = new Date();

	const movie_name = {

		movie: name,

		date: time,

		ratings : "no rating"


	};

	movie_collection.movie_names[name] = movie_name

	return `movie: ${movie_collection.movie_names[name].movie}, Date: ${movie_collection.movie_names[name].date}, Rating: ${movie_collection.movie_names[name].ratings}`;


}


const view_movie = ()=>{

	if(Object.keys(movie_collection.movie_names).length === 0){

		console.log("No movies added, please add a movie to view.")


	}

  for (const movieName in movie_collection.movie_names) {
        console.log(`movie: ${movie_collection.movie_names[movieName].movie}, Date: ${movie_collection.movie_names[movieName].date}, Rating: ${movie_collection.movie_names[movieName].ratings}`);
    }

};

//view_movie()

const rate_movie = (name, rating) =>{

	if(!movie_collection.movie_names[name]){

        	return "No movie of such name.";

  	}

	const movie = movie_collection.movie_names[name];

	if(typeof movie.ratings === "string"){

        	movie.ratings = [];

    	}

	movie.ratings.push(rating);

    	return `Movie: ${movie.movie}, Date: ${movie.date}, Ratings: ${movie.ratings.join(', ')}`;


};

add_movie("merlin");

rate_movie("merlin", 5.0);

console.log(rate_movie("merlin", 4.5));