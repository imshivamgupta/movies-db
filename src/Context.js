import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

const MoviesContext = React.createContext();
export default class MoviesProvider extends Component {
  state = {
    movies: [],
    recentReleased: [],
    topRated: []
  };
  async componentDidMount() {
    await axios
      .get(
        'https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/movies-in-theaters.json'
      )
      .then(movies => this.setState({ movies: movies.data }));
    this.newMovies();
    this.topRated();
  }
  newMovies = () => {
    const recentReleased = [...this.state.movies];
    recentReleased.sort(
      (a, b) =>
        moment(b.releaseDate).format('YYYMMDD') -
        moment(a.releaseDate).format('YYYMMDD')
    );

    this.setState({
      recentReleased
    });
  };
  topRated = () => {
    const topRated = [...this.state.movies];
    topRated.sort((a, b) => b.imdbRating - a.imdbRating);
    this.setState({
      topRated
    });
  };
  render() {
    return (
      <MoviesContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </MoviesContext.Provider>
    );
  }
}

const MoviesConsumer = MoviesContext.Consumer;

export { MoviesProvider, MoviesContext, MoviesConsumer };

export function WithMoviesConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <MoviesConsumer>
        {value => <Component {...props} context={value} />}
      </MoviesConsumer>
    );
  };
}
