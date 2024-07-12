import { useDispatch } from 'react-redux';
import { createRandomMovie } from "../../data";
import { useAppSelector } from '../../hooks/redux';
import { addMovie, removeMovie } from '../../store/movieSlice';

function MoviePlaylist() {
  const {movies} = useAppSelector(store => store.movies)
  const dispatch = useDispatch()
  const handleMovieAdd = (movie: string) => {
	dispatch(addMovie(movie))
  };
  const handleMovieRemove = (movie: string) => {
	dispatch(removeMovie(movie))
  };

  const renderedMovies = movies.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="button is-link"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
