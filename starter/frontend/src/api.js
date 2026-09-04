const API_URL = process.env.REACT_APP_MOVIE_API_URL || 'http://localhost:5000';

async function getJson(path) {
  const response = await fetch(`${API_URL}${path}`);
  if (!response.ok) {
    throw new Error(`Request to ${path} failed with ${response.status}`);
  }
  return response.json();
}

export async function fetchMovies() {
  const data = await getJson('/movies');
  return data.movies || [];
}

export async function fetchMovie(id) {
  const data = await getJson(`/movies/${id}`);
  return data.movie || data;
}
