import React, { Component } from 'react';
import ViewBook from './ViewBook';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component {
  state = {
    filteredBooks: [],
  }

  searchBooks = (query) => {
    if (query) {
      BooksAPI.search(query)
        .then((books) => {
          if (books instanceof Array) {
            this.setState(() => ({
              filteredBooks: books.map(book => ({
                ...this.props.shelvedBooks.find(b => b.id === book.id),
                ...book
              }))
            }));
          } else {
            this.setState(() => ({
              filteredBooks: []
            }));
          }
        })
    } else {
      this.setState(() => ({
        filteredBooks: []
      }));
    }
  }

  render() {
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
        <Link className='close-search' to='/'>
          Close
        </Link>
          <input
            type='text'
            placeholder='Search by title or author'
            onChange={(e) => this.searchBooks(e.target.value)}
          />
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {this.state.filteredBooks &&
             this.state.filteredBooks.length > 0 &&
             this.state.filteredBooks.map(book => (
              <li key={book.id}>
                <ViewBook book={book}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

SearchBooks.propTypes = {
  shelvedBooks: PropTypes.array.isRequired,
}

export default SearchBooks;