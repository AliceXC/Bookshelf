import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Add from './Add'
import Delete from './Delete'
import Books from './Books'
import Edit from './Edit'

class App extends Component {
  constructor(props){
    super(props);
    this.addBook = this.addBook.bind(this);
    this.getBooks = this.getBooks.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.editBook = this.editBook.bind(this);
  }

  addBook(){
    ReactDOM.render(<Add />, document.querySelector("div#sub-app"));
  }

  getBooks(){
    ReactDOM.render(<Books />, document.querySelector("div#sub-app"));
  }

  deleteBook(){
    ReactDOM.render(<Delete />, document.querySelector("div#sub-app"));
  }

  editBook(){
    ReactDOM.render(<Edit />, document.querySelector("div#sub-app"));
  }

  render() {
    return (
      <div className="App">
        <div id="title">Bookshelf</div>
        <div className="app-navigation" onClick={this.addBook}>Add</div>
        <div className="app-navigation" onClick={this.getBooks}>Books</div>
        <div className="app-navigation" onClick={this.deleteBook}>Delete</div>
        <div className="app-navigation" onClick={this.editBook}>Edit</div>
        <div id="sub-app"></div>
      </div>
    );
  }
}

export default App;
