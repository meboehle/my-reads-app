import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MoveBook extends Component {
  state = {
    shelves: [
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
    ]
  }

  onChange = (shelf) => {
    this.props.onMoveBook(shelf, this.props.book);
  }

  render() {
    return (
      <div className='book-shelf-changer'>
        <select value={this.props.book.shelf || 'none'}
                onChange={(e) => this.onChange(e.target.value)}>
          <option value='move' disabled>Move to...</option>
          {this.state.shelves.map(shelf => (
            <option key={shelf.option} value={shelf.option}>{shelf.name}</option>
          ))}
        </select>
      </div>
    )
  }
}

MoveBook.propTypes = {
  book: PropTypes.object.isRequired
}

export default MoveBook;