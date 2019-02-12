import React, { Component } from 'react';
import './App.css';
import * as Api from '../api'

class Delete extends Component{
    constructor(props){
        super(props);
        this.Delete = this.Delete.bind(this);
        this.submitDelete = this.submitDelete.bind(this);
    }

    submitDelete(){
        let file = document.querySelector("#delete-id");
        let id = file.value;
        if(id === ""){
            alert("book id cannot be empty");
            return false;
        }
        let api = new Api.DefaultApi();
        api.deleteBookBookIDDelete(id);
    }

    Delete(){
        return(
            <div className="delete-element">
                <p>Enter the id of the book that you want to delete.</p>
                <span>id</span>
                <input type="number" min="1" id="delete-id"></input>
                <div className="submit" onClick={this.submitDelete}>submit</div>
            </div>
        );
    }
    render(){
        return(
            <div id="delete-container">
                <this.Delete />
            </div>
        );
    }
}

export default Delete;