import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';

class App extends Component {
  mounted = false;
  state = {
    currentlyReadingBooks: [],
    wantToReadBooks: [],
    readBooks: [],
    allBooks: []
  }

  refreshBooks() {
    if (this.mounted) {
      BooksAPI.getAll()
        .then((books) => {
          this.setState(() => ({
            allBooks: books,
            currentlyReadingBooks: books.filter(book => book.shelf === 'currentlyReading'),
            wantToReadBooks: books.filter(book => book.shelf === 'wantToRead'),
            readBooks: books.filter(book => book.shelf === 'read'),
          }));
        });
    }
  }

  componentDidMount() {
    this.mounted = true;
    this.refreshBooks();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidUpdate() {
    if (this.mounted) this.refreshBooks();
  }

  render() {
    return (
      <div className='app'>
        <Route exact path='/' render={() => (
          <ListBooks
            currentlyReadingBooks={this.state.currentlyReadingBooks}
            wantToReadBooks={this.state.wantToReadBooks}
            readBooks={this.state.readBooks}
          />
        )}
        />
        <Route path='/search' render={() => (
          <SearchBooks shelvedBooks={this.state.allBooks}/>
        )}
        />
      </div>
    )
  }
}

export default App;