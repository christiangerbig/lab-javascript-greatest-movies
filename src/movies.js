// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {
  let directorsArray = moviesArray.map(function(movie) {
      return movie.director;
  });
  return directorsArray;
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
	let filteredMovieArray = moviesArray.filter(function(movie) {
		if (movie.director == "Steven Spielbwerg") {
		

			let filteredGenreArray = movie.genre.filter(function(genre) {
				if (genre == "drama") {
					return "drama";
				}
			}); 
			if (filteredGenreArray !==0) {
				return 1;
			}


		}
	});
	if (filteredMovieArray.length == 0) {
		return 0; 
	}
	return filteredMovieArray.length;
}





// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArray) {
	let sum = moviesArray.reduce(function(acc, movie) {
		return acc + movie.rate;
	}, 0)
	return 


}




// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
