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
    const infoMovie = await response.json().catch(err => console.error(err));

    return infoMovie;
}

export async function getVideosById(id: string) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: import.meta.env.Authorization
        }
    };
    
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, options);
    const { results } = await response.json().catch(err => console.error(err));

    console.log(results);
    return results;
} 

export async function getTv(page: string) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: import.meta.env.Authorization
        }
    };
    
    const response = await fetch(`https://api.themoviedb.org/3/tv/popular?language=es-US&page${page}1`, options);
    const { results } = await response.json().catch(err => console.error(err));

    return results;
} 

export async function getPerson(page: string) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: import.meta.env.Authorization
        }
    };
    
    const response = await fetch(`https://api.themoviedb.org/3/person/popular?language=es-US&page=${page}`, options);
    const { results } = await response.json().catch(err => console.error(err));
    console.log(results);

    return results;
} 