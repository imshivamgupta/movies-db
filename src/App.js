import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import WatchList from './pages/WatchList';
import SingleMovie from './pages/SingleMovie';
import NotFound from './pages/NotFound';

import { MoviesProvider } from './Context';
import RecentMovies from './pages/RecentMovies';
import TopRated from './pages/TopRated';
class App extends Component {
  render() {
    return (
      <MoviesProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Homepage}></Route>
            <Route exact path="/watchlist" component={WatchList}></Route>
            <Route exact path="/movie/:id" component={SingleMovie}></Route>
            <Route exact path="/recent" component={RecentMovies}></Route>
            <Route exact path="/toprated" component={TopRated}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </Router>
      </MoviesProvider>
    );
  }
}
export default App;
