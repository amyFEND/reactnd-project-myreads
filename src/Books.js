import React, { Component } from 'react'

class Books extends Component {

  render() {
    const { book } = this.props
    let thumbnailImg = book.imageLinks ? book.imageLinks.thumbnail : ''

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ backgroundImage: `url("${thumbnailImg}")` }}></div>
            <div className="book-shelf-changer">
              <select
                value={book.shelf}
                onChange={(e) => this.props.changeShelf(
                  this.props.book, e.target.value
                )}
              >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }
}

export default Books
