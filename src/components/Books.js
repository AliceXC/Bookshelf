import React, { Component } from 'react';
import './App.css';
import * as Api from '../api'

class Books extends Component{
    constructor(props){
        super(props);

        this.state = {
            books: []
        }
        this.BookList = this.BookList.bind(this);
        this.Book = this.Book.bind(this);
    }
    componentDidMount(){
        let api = new Api.DefaultApi();
        api.getBooksGet().then((elements)=>{
            this.setState({
                books: elements
            });
        });
    }
    Book(props) {
        return(
            <div className="book">
                <span>{props.id}  </span>
                <span>{props.name}  </span>
                <span>{props.author}  </span>
                <span>{props.description}  </span>
            </div>
        );
    }

    BookList(){
        return(
            <div>
                {
                    this.state.books.map((a)=>{
                        console.log(a);
                        return <this.Book key={a.id} id={a.id} name={a.name} author={a.author} description={a.description}/>
                    })
                }
            </div>
            
        );
    }

    render(){
        // NOTE: Calling setState in render causes infinite loop !!!!!!!!!
        // NOTE: When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle method.
        // ERROR: this.getActors(); (explanation as above)
        return(
            <div id="books-container">
                <p>hey books</p>
                <this.BookList />
            </div>
        );
    }
}

export default Books;