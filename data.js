//Your code comes  here
let favMovies = [{
	title: "Mary Poppins",
	year: 1964,
	rating: 7.8,
	description: "In turn of the century London, a magical nanny employs music and adventure to help two neglected children become closer to their father.",
	director: "Robert Stevenson",
	writer: "P.L. Travers",
	stars: "Julie Andrews, Dick Van Dyke",
	genres: "musical",
	review: "This is one of the favorite movies from my childhood. "



},
{
	title: "Scream",
	year: 1996,
	rating: 7.4,
	description: "A year after the murder of her mother, a teenage girl is terrorized by a new killer, who targets the girl and her friends by using horror films as part of a deadly game.",
	director: "Wes Craven",
	writer: "Kevin Williamson",
	stars: "Neve Campbell, Courteney Cox",
	genres: "horror",
	review: "That was the first horror movie that I saw as a child. "
},
{
	title: "Mr. Nobody",
	year: 2009,
	rating: 7.8,
	description: "A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn't choose, anything is possible.",
	director: "Jaco Van Dormael",
	writer: "Jaco Van Dormael",
	stars: "Jared Leto, Sarah Polley",
	genres: "drama",
	review: "I love life philosophy movies with meanings that you have to think about and this is one of my favorites. "
},
{
	title: "The Fast and the Furious: Tokyo Drift",
	year: 2006,
	rating: 6.0,
	description: "A teenager becomes a major competitor in the world of drift racing after moving in with his father in Tokyo to avoid a jail sentence in America.",
	director: "Justin Lin",
	writer: "Chris Morgan",
	stars: "Lucas Black, Sung Kang",
	genres: "action",
	review: "However my favorite car is in the first movie, I think the third one is the best from the series. "
}];

function moviesList(movies, titleLogger) {
	let timeOut = 1000;
	Object.values(movies).forEach(val => {
		setTimeout(() => {
		titleLogger(val.title);
		}, timeOut)
		timeOut += 1000

	})


};

function titleLogger(favMovies) {
console.log(favMovies);
};

moviesList(favMovies, titleLogger);

































// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{ name: "favMovies", content: favMovies, type: "array" },
		{ name: "moviesList", content: moviesList, type: "function" },
		{ name: "titleLogger", content: titleLogger, type: "function" },
	]
} catch (error) {

	toExport = { error: error.message }

}

export { toExport };
