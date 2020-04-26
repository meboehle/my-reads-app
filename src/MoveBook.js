import React from 'react';
import PropTypes from 'prop-types';

const SHELVES = [
  {
    option: 'currentlyReading',
    name: 'Currently Reading'
  },
  {
    option: 'wantToRead',
    name: 'Want to Read'
  },
  {
    option: 'read',
    name: 'Read'
  },
  {
    option: 'none',
    name: 'None'
  },
];

const MoveBook = ({book, onMoveBook}) => {
  return (
    <div className='book-shelf-changer'>
      <select value={book.shelf || 'none'}
              onChange={(e) => onMoveBook(e.target.value, book)}>
        <option value='move' disabled>Move to...</option>
        {SHELVES.map(shelf => (
          <option key={shelf.option} value={shelf.option}>{shelf.name}</option>
        ))}
      </select>
    </div>
  )
}

MoveBook.propTypes = {
  book: PropTypes.object.isRequired,
  onMoveBook: PropTypes.func.isRequired
}

export default MoveBook;