function MovieList({ movies, error, onSelect }) {
  return (
    <section className="panel">
      <h1>Movie List</h1>
      {error ? <p className="message">{error}</p> : null}
      {!error && movies.length === 0 ? (
        <p className="message">No movies to show yet.</p>
      ) : null}
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id}>
            <button type="button" onClick={() => onSelect(movie.id)}>
              {movie.title}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MovieList;
