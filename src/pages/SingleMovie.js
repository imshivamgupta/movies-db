import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MoviesContext } from '../Context';
export default class SingleMovie extends Component {
  static contextType = MoviesContext;
  addToWatch = id => {
    // e.preventDefault();
  };
  render() {
    const { id } = this.props.match.params;
    const { movies } = this.context;
    if (!movies.length) {
      return 'Loading...';
    }
    const currentMovie = movies.find(movie => movie.id === id);

    return (
      <>
        <Link to="/" className="btn back">
          &larr; Back
        </Link>
        <main>
          <img src={currentMovie.posterurl} alt={currentMovie.title} />
          <div className="details">
            <p>
              <span>Movie Name: </span> {currentMovie.title}
            </p>
            <p className="story">
              <span>Story Line: </span>
              {currentMovie.storyline}
            </p>
            <p>
              <span>Cast : </span>
              {currentMovie.actors.toString()}
            </p>
            <p>
              <span>Ratings : </span>
              {currentMovie.imdbRating}
            </p>
            <p>
              <span>Release Date : </span>
              {currentMovie.releaseDate}
            </p>
            <a
              href="#"
              className="btn add"
              onClick={this.addToWatch.bind(this, currentMovie.id)}
            >
              Add To Watch
            </a>
          </div>
        </main>
      </>
    );
  }
}
