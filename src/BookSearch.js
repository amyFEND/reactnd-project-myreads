import React, { Component } from 'react'
import Books from './Books'
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'

class BookSearch extends Component {

  state = {
    query: '',
    searchedBooks: []
  }

  updateQuery = (query) => {
    this.setState({ query })

    this.searchBooks(query)
  }

  searchBooks = (query) => {
    { query ?
      ( BooksAPI.search(query).then((searchedBooks) => {
          searchedBooks.error ?
            ( this.setState({ searchedBooks: [] }) )
          : ( this.setState({ searchedBooks }) )
        })
      )
      : ( this.setState({ searchedBooks: [] }) )
    }
  }

  render() {
    const { books } = this.props
    const { query, searchedBooks } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              searchedBooks.map((searchedBook) => (
                <Books books={books} book={searchedBook} key={searchedBook.id} />
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch;
