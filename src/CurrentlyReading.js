import React, { Component } from 'react'
import Books from './Books'

class CurrentlyReading extends Component {

  render() {
    const { books } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              books.filter(book => book.shelf === 'currentlyReading')
              .map(book =>(
                <Books
                  book={book}
                  key={book.id}
                  changeShelf={this.props.changeShelf}
                />
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default CurrentlyReading
