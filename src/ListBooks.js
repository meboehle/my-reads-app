import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

const SHELVES = [
  {
    title: 'Currently Reading',
    id: 'currentlyReading'
  },
  {
    title: 'Want To Read',
    id: 'wantToRead'
  },
  {
    title: 'Read',
    id: 'read'
  }
];
function ListBooks({books, refreshBooks}) {
  return(
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        {SHELVES.map(shelf => (
          <Bookshelf
            key={shelf.id}
            shelf={shelf.title}
            books={books.filter(book => book.shelf === shelf.id)}
            refreshBooks={refreshBooks}
          />
        ))}
      </div>
      <Link to='/search' className='open-search'>
        <button>Add a book</button>
      </Link>
    </div>
  )
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  refreshBooks: PropTypes.func.isRequired,
}

export default ListBooks;