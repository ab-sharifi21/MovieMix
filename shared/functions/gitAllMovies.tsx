
export const getAllMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`);
    const body = await res.json();
    
    if (!res.ok) {
        throw new Error(body.error)
    }

    return body.results;
}