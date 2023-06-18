function moviesFunc(input) {
    let movies = [];

    for (const line of input) {
        if (line.includes("addMovie")) {
            let lineArr = line.split("addMovie ");
            let name = lineArr[1];
            addMovie(name);
        } else if (line.includes("directedBy")) {
            let lineArr = line.split(" directedBy ");
            let name = lineArr[0];
            let director = lineArr[1];
            addDirector(name, director);
        } else if (line.includes("onDate")) {
            let lineArr = line.split(" onDate ");
            let name = lineArr[0];
            let date = lineArr[1];
            addDate(name, date);
        }
    }

    for (const movie of movies) {
        if (movie.hasOwnProperty("name") && movie.hasOwnProperty("director") && movie.hasOwnProperty("date")) {
            console.log(JSON.stringify(movie));
        }
    }

    function addMovie(name) {
        movies.push({ name });
    }

    function addDirector(name, director) {
        let movie = movies.find((m) => m.name === name);

        if (movie) {
            movie.director = director;
        }
    }

    function addDate(name, date) {
        let movie = movies.find((m) => m.name === name);

        if (movie) {
            movie.date = date;
        }
    }
}


moviesFunc([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);

moviesFunc([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]
);