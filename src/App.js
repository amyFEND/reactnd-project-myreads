import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'
import BookSearch from './BookSearch'
import './App.css'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <BookSearch />
        <BookList books={this.state.books}/>
      </div>
    )
  }
}

export default BooksApp
