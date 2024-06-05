// api key from TMDB
const api = "api_key=121b487399b7fc89200412d80608e6c7";

// base url of the site
const base_url = "https://api.themoviedb.org/3";

// img url
const banner_url = "https://image.tmdb.org/t/p/original";

const img_url = "https://image.tmdb.org/t/p/w500";

//request for movies data
const requests = {fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOriginals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};

// used to truncate the string
function truncate(str, n){
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

// banner
fetch(requests.fetchNetflixOriginals)

    .then((res) => res.json())

    .then((data) => {
        //every refresh the movie will be change
        const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];

        var banner = document.getElementById("banner");
        var banner__title = document.getElementById("banner__title");
        var banner__desc = document.getElementById("banner__description");

        banner.style.backgroundImage = "url("+banner_url+setMovie.backdrop_path+")";
        banner__desc.innerText = truncate(setMovie.overview, 150);
        banner__title.innerText = setMovie.name;
    });

// movies rows
fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "NETFLIX ORIGINALS";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
           const poster = document.createElement("img");
           poster.className = "row__posterLarge";

           var s = movie.name.replace(/\s+/g, "");

           poster.id = s;
           poster.src = img_url + movie.poster_path;
           row_posters.appendChild(poster);
        });
    });

//Trending
//top rated
fetch(requests.fetchTrending)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Top Rated";
        row.appendChild(title);
        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";
            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

// action
fetch(requests.fetchActionMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Action Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row__poster";
            var s3 = movie.id;
            poster.id = s3;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

// comedy
fetch(requests.fetchComedyMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Comedy Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row__poster";
            var s4 = movie.id;
            poster.id = s4;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

// Horror
fetch(requests.fetchHorrorMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Horror Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row__poster";
            var s5 = movie.id;
            poster.id = s5;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

// Romance
fetch(requests.fetchRomanceMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Romance Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row__poster";
            var s6 = movie.id;
            poster.id = s6;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

// documentaries
fetch(requests.fetchDocumentaries)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Documentaries";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row__poster";
            var s7 = movie.id;
            poster.id = s7;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });