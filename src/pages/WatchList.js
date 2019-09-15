import React, { Component } from 'react';
import { MoviesContext } from '../Context';
import Movies from '../components/Movies';
export default class WatchList extends Component {
  static contextType = MoviesContext;
  state = {
    found: false
  };
  componentDidMount() {}
  render() {
    const addedMovies = JSON.parse(localStorage.getItem('watchLater')) || [];
    const { movies } = this.context;
    let finalarr = [];
    const arr = movies.filter(movie =>
      addedMovies.map(saved => {
        if (movie.id === saved) {
          finalarr.push(movie);
        }
      })
    );

    return (
      <div>
        {true ? (
          <Movies title="WatchList" movies={finalarr}></Movies>
        ) : (
          'Loading...'
        )}
      </div>
    );
  }
}
