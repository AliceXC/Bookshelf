import React, { Component } from 'react';
import './App.css';
import * as Api from '../api'

class Edit extends Component{
    constructor(props){
        super(props);
        this.Edit = this.Edit.bind(this);
        this.submitEdit = this.submitEdit.bind(this);
    }

    submitEdit(){
        let file = document.querySelector("#edit-id");
        let id = file.value;
        if(id === ""){
            alert("book id cannot be empty");
            return false;
        }

        // TODO change swagger edit input [id,description]
        // fix server and uncomment below
        /*file = document.querySelector("textarea.description");
        file.value = file.value.trim();
        let description = file.value;

        let editInfo = {
            "id": parseInt(id),
            "description": description
        }
        console.log(editInfo);*/

        console.log(id);
        let api = new Api.DefaultApi();
        api.editBookBookIDPost(id);
    }

    Edit(){
        return(
            <div className="edit-element">
                <p>Enter the book id and new description.</p>
                <span>id</span>
                <input type="number" min="1" id="edit-id"></input>
                <span>description</span>
                <textarea rows="2" maxLength="100" className="description"></textarea>
                <div className="submit" onClick={this.submitEdit}>submit</div>
            </div>
        );
    }

    render(){
        return(
            <div id="edit-container">
                <this.Edit />
            </div>
        );
    }
}

export default Edit;