import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MoviesContext } from '../Context';
export default class SingleMovie extends Component {
  static contextType = MoviesContext;
  state = {
    added: [],
    found: false
  };
  componentDidMount() {
    try {
      let data = JSON.parse(localStorage.getItem('watchLater')) || [];
      if (data.length > 0) {
        this.setState({ added: [...new Set(data)] }, () => {
          const { added } = this.state;
          const found = added.filter(el => el === this.props.match.params.id);
          if (found.length > 0) {
            this.setState({ found: true });
          }
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  addToWatch = id => {
    try {
      this.setState({ added: [...this.state.added, id], found: true });
      localStorage.setItem(
        'watchLater',
        JSON.stringify([...new Set(this.state.added)])
      );
      // this.setState({ added: [...new Set(data)] });
    } catch (e) {
      console.log(e);
    }
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
              className={this.state.found ? 'btn added' : 'btn add'}
              onClick={this.addToWatch.bind(this, currentMovie.id)}
            >
              {this.state.found ? 'Added WatchList' : 'Add To Watch'}
            </a>
          </div>
        </main>
      </>
    );
  }
}
