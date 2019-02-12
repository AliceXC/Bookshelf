'use strict';
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

/**
 * add book
 * add book
 *
 * book Book 
 * no response value expected for this operation
 **/

function openDatabase(){
  return new Promise((resolve,reject) => {
    let db = new sqlite3.Database(path.join(__dirname, '../database/books'), (error) => {
     if(error){
        reject(error);
     }else {
        db.serialize(()=>{
          db.run('CREATE TABLE IF NOT EXISTS books(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, author TEXT NOT NULL, description TEXT)');
          });
        console.log('Connected to the database');
        resolve(db);
     }
     
   });
    
  });
}

exports.addBookPUT = function(book) {
  return new Promise(function(resolve, reject) {
    openDatabase().then(db => {
      db.run("INSERT INTO books(name,author,description) VALUES(?,?,?)",[book.name, book.author,book.description], (error) => {
        if(error){
          console.log("book cannot be created");
          reject(error.message);
        }else {
          console.log(book);
          console.log("book created");
          resolve("book created");
        }
      });
      db.close();
    }).catch((error)=>{
      console.error(error);
    });
  });
}


/**
 * delete book by id
 *
 * bookID Integer book id
 * no response value expected for this operation
 **/
exports.deleteBookBookIDDELETE = function(bookID) {
  return new Promise(function(resolve, reject) {
    openDatabase().then(async function(db){
      let bookExists = await checkBookExists(db,bookID);
      if(bookExists){
        await deleteBook(db,bookID);
        console.log("deleted");
        resolve();
      }else{
        console.log("fail to delete");
        reject();
      }
      db.close();
    }).catch((error)=>{
      console.error(error);
    });
  });
}

function deleteBook(db, id){
  return new Promise((resolve,reject)=>{
    db.run("DELETE FROM books WHERE id=?", id, (error)=>{
      if(error){
        reject(error);
      }else{
        resolve();
      }
    });
  });
}

/**
 * edit book description by id
 *
 * bookID Integer book id
 * no response value expected for this operation
 **/
exports.editBookBookIDPOST = function(bookID) {
  return new Promise(function(resolve, reject) {
    openDatabase().then(async function(db){
      let bookExists = await checkBookExists(db,bookID);
      if(bookExists){
        await editBook(db,bookID);
        resolve();
      }else{
        reject(error.message);
      }
      db.close();
    }).catch((error)=>{
      console.error(error);
    });
  });
}

function editBook(db,bookID){
  return new Promise((resolve,reject)=>{
    db.run("UPDATE books SET description='new description' WHERE id=?",[bookID], (error) => {
      if(error){
        reject(error);
      }else{
        resolve("book edited");
      }
    });
  });
}
function checkBookExists(db, id){
  return new Promise((resolve,reject)=>{
    db.all('SELECT COUNT(books.id) AS idCount FROM books WHERE books.id = ?', id, (error, count)=>{
        if(error){
          reject(error);
        }else if (count[0].idCount == 0){
          resolve(false);
        } else{
          console.log("book exists!");
          resolve(true);
        }
    });
  });
}

/**
 * return books
 *
 * returns List
 **/
exports.getBooksGET = function() {
  return new Promise(function(resolve, reject) {
    openDatabase().then(db => {
      db.all("SELECT * FROM books", (error, books) => {
        if(error){
          reject(error.message);
        } else {
          console.log(books);
          resolve(books);
        }
        db.close();
      });
    }).catch((error)=> {
      console.error(error);
    });
  });
}



