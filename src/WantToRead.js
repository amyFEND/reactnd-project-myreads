import React, { Component } from 'react'
import Books from './Books'

class WantToRead extends Component {

  render() {
    const { books } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.props.books
              .filter(book => book.shelf === 'wantToRead')
              .map(book =>(
                <Books book={book} key={book.id} />
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default WantToRead
