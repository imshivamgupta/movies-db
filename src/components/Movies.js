import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
export default class Movies extends Component {
  state = {
    rating: 0
  };
  render() {
    const { title, movies } = this.props;
    if (!movies.length) {
      return 'Loading...';
    }
    return (
      <div className="movies">
        <h4>{title}</h4>
        <section>
          {movies.map(movie => (
            <Link to={`/movie/${movie.id}`} className="movie" key={movie.id}>
              <img src={movie.posterurl} alt="" />
              <p>{movie.title}</p>
              <p>
                <span>Rating: {movie.imdbRating || 'NIL'}</span>
                <span>{moment(movie.releaseDate).format('DD MMM YYYY')}</span>
              </p>
            </Link>
          ))}
        </section>
      </div>
    );
  }
}
