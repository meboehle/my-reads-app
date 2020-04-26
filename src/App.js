import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';

class App extends Component {
  state = {
    allBooks: []
  }

  refreshBooks() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          allBooks: books
        }));
      });
  }

  componentDidMount() {
    this.refreshBooks();
  }

  render() {
    return (
      <div className='app'>
        <Route exact path='/'>
          <ListBooks
            books={this.state.allBooks}
            refreshBooks={() => this.refreshBooks()}
          />
        </Route>
        <Route path='/search'>
          <SearchBooks
            shelvedBooks={this.state.allBooks}
            refreshBooks={() => this.refreshBooks()}
          />
        </Route>
      </div>
    )
  }
}

export default App;