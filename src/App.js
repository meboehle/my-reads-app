import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Bookshelf from './Bookshelf';
import SearchBooks from './SearchBooks';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <Bookshelf/>
        )}
        />
        <Route path='/search' render={({ history }) => (
          <SearchBooks/>
        )}
        />
      </div>
    )
  }
}

export default App;
