export const TMBD_CONFIG ={
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers:{
        accept:'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
    }
}

export const fetchMovies = async ({query}:{query:string}) => {
    const endpoint = query
    ? `${TMBD_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMBD_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint,{
        method:'GET',
        headers: TMBD_CONFIG.headers,
    });

    if(!response.ok){
        //@ts-ignore
        throw new Error('Failed to fetch movies', response.statusText);
    }

    const data = await response.json();

    return data.results;
}

// const url = 'https://api.themoviedb.org/3/account/22494828/lists?page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2I5YzkzODk3Y2Y4YzZiYzgxMjhlMmE5NDNhNmE3NSIsIm5iZiI6MTc2Mzg4MzIwMS43NzcsInN1YiI6IjY5MjJiOGMxYTBjNGIxYjEzMjE4NmYxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zJCiwoBqp6nMiIo179J48BX8loH8cvylDR9ghiNahN8'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));