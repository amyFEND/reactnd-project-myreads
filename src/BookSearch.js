import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Books from './Books'
import * as BooksAPI from './BooksAPI'

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
    query ?
      ( BooksAPI.search(query).then((searchedBooks) => {
          searchedBooks.error ?
          ( this.setState({ searchedBooks: [] }) )
          :
          ( this.setState({ searchedBooks }) )
        })
      )
      :
      ( this.setState({ searchedBooks: [] }) )
  }

  render() {
    const { books } = this.props
    const { query, searchedBooks } = this.state

    return (
      <div className="search-books">

        <div className="search-books-bar">

          <Link to="/" className="close-search">Close</Link>

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
          {
            query === '' && searchedBooks.length === 0 ?
              (null)
              :
              (query !== '' && searchedBooks.length > 0 ?
                (<h3>Showing {searchedBooks.length} books</h3>)
                :
                (<h3>No results found!</h3>)
              )
          }

          <ol className="books-grid">
            {
              searchedBooks.map((searchedBook) => {
                let shelf = 'none'

                books.map(book => (
                  book.id === searchedBook.id ?
                    shelf = book.shelf : ''
                ))

                return(
                  <Books
                    books={books}
                    book={searchedBook}
                    key={searchedBook.id}
                    changeShelf={this.props.changeShelf}
                    defaultShelf={shelf}
                  />
                )
              })
            }
          </ol>

        </div>

      </div>
    )
  }
}

export default BookSearch;
