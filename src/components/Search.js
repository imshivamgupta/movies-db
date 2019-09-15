import React, { Component } from 'react';
import { MoviesContext } from '../Context';
import { Link } from 'react-router-dom';
export default class Search extends Component {
  static contextType = MoviesContext;
  state = {
    search: '',
    display: 'none',
    results: []
  };
  handleSearch = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    if (e.target.value.length >= 3) {
      this.setState({ display: 'block' });
    } else {
      this.setState({ display: 'none' });
    }
    const { movies } = this.context;

    const results = movies.filter(movie =>
      movie.title.toLowerCase().includes(this.state.search)
    );
    this.setState({ results: [...results] });
  };
  render() {
    return (
      <>
        <div className="search">
          <input
            type="text"
            placeholder="Search Movie, Actor or Whatever"
            name="search"
            onChange={this.handleSearch}
            autoComplete="off"
          />
          <button>Search</button>
          <div className="result" style={{ display: this.state.display }}>
            {this.state.results.map(movie => (
              <div className="movie" key={movie.id}>
                <Link
                  to={`/movie/${movie.id}`}
                  onClick={() => this.setState({ display: 'none' })}
                >
                  <img src={movie.posterurl} alt={movie.title} />
                  <div className="text">
                    <p>{movie.title}</p>
                    <p className="actors">
                      <span>Actors:</span> {movie.actors}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
