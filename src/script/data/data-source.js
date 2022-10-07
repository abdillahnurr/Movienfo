class DataSource {
    static searchMovie(keyword) {
        return fetch(`http://www.omdbapi.com/?apikey=9a8841b2&s=${keyword}`)
            .then((response) => response.json())
            .then((response) => {
                const movies = response.Search;
                return movies;
            });
    }
}

export default DataSource;
