import React, { Component } from 'react';
import './App.css';
import * as Api from '../api'

class Add extends Component{
    constructor(props){
        super(props);
        this.Book = this.Book.bind(this);
        this.submitBook = this.submitBook.bind(this);
    }
    submitBook(){
        let file = document.querySelector("#name");
        file.value = file.value.replace('/\s/g',"");
        let name = file.value;
        if(name === ""){
            alert("book name cannot be empty");
            return false;
        }
        file = document.querySelector("#author");
        file.value = file.value.replace('/\s/g',"");
        let author = file.value;
        if(author === ""){
            alert("author name cannot be empty");
            return false;
        }
        file = document.querySelector("#description");
        file.value = file.value.trim();
        let description = file.value;
        let book = {
            "name": name,
            "author": author,
            "description": description
        }
        console.log(book);
        let api = new Api.DefaultApi();
        api.addBookPut(book);
    }

    Book(){
        return(
            <div className="add-element">
                <p>add a book</p>
                name:
                <input type="text" id="name"></input>
                author:
                <input type="text" id="author"></input>
                Description:
                <textarea id="description" maxLength="100" rows="2"></textarea>
                <div className="submit" onClick={this.submitBook}>submit</div>
            </div>
        );
    }

    render(){
        return(
            <div id="add-container">
                <this.Book />
            </div>
        );
    }
}

export default Add;