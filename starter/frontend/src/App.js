import { useCallback, useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import { fetchMovie, fetchMovies } from './api';

function App() {
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    fetchMovies()
      .then((result) => {
        if (active) {
          setMovies(result);
        }
      })
      .catch(() => {
        if (active) {
          setError('Movies could not be loaded. Check the API URL and retry.');
        }
      });
    return () => {
      active = false;
    };
  }, []);

  const selectMovie = useCallback((id) => {
    fetchMovie(id)
      .then(setSelected)
      .catch(() => setError('That movie could not be loaded.'));
  }, []);

  return (
    <main className="app">
      <MovieList movies={movies} error={error} onSelect={selectMovie} />
      <MovieDetails movie={selected} />
    </main>
  );
}

export default App;
