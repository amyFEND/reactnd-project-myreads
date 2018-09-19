import React, { Component } from 'react'
import Books from './Books'

class Read extends Component {

  render() {
    const { books } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              books.filter(book => book.shelf === 'read')
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

export default Read
