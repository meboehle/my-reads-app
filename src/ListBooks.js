import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

function ListBooks(props) {
  return(
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <Bookshelf
          shelf='Currently Reading'
          books={props.currentlyReadingBooks}
        />
        <Bookshelf
          shelf='Want to Read'
          books={props.wantToReadBooks}
        />
        <Bookshelf
          shelf='Read Books'
          books={props.readBooks}
        />
      </div>
      <Link to='/search' className='open-search'>
        <button>Add a book</button>
      </Link>
    </div>
  )
}

ListBooks.propTypes = {
  currentlyReadingBooks: PropTypes.array.isRequired,
  wantToReadBooks: PropTypes.array.isRequired,
  readBooks: PropTypes.array.isRequired
}

export default ListBooks;