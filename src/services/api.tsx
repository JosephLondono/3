export async function getMovies(page: string) {
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: import.meta.env.Authorization
    }
};  

const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=es-US&page=${page}`, options);
const { results } = await response.json();

console.log(results)
return results;
}

export async function getMovieById(id: string) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: import.meta.env.Authorization
        }
    };
    
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-US`, options);
    const informacionPelicula = await response.json().catch(err => console.error(err));

    console.log(informacionPelicula)

    return informacionPelicula;
}
