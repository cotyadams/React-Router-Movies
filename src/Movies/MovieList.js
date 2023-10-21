import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function MovieList(props) {
  const navigate = useNavigate();
  const movieClickHandler = (id) => () => {
    navigate(`movies/${id}`)
  }
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} movieClickHandler={movieClickHandler(movie.id)} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  const { movieClickHandler } = props;
  return (
    <div className="movie-card" onClick={movieClickHandler}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
