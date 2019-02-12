'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.addBookPUT = function addBookPUT (req, res, next) {
  var book = req.swagger.params['book'].value;
  Default.addBookPUT(book)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBookBookIDDELETE = function deleteBookBookIDDELETE (req, res, next) {
  var bookID = req.swagger.params['bookID'].value;
  Default.deleteBookBookIDDELETE(bookID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editBookBookIDPOST = function editBookBookIDPOST (req, res, next) {
  var bookID = req.swagger.params['bookID'].value;
  Default.editBookBookIDPOST(bookID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBooksGET = function getBooksGET (req, res, next) {
  Default.getBooksGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
