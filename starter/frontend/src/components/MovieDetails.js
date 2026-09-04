function MovieDetails({ movie }) {
  return (
    <section className="panel">
      <h1>Movie Details</h1>
      {movie ? (
        <>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
        </>
      ) : (
        <p className="message">Pick a movie above to see its details.</p>
      )}
    </section>
  );
}

export default MovieDetails;
