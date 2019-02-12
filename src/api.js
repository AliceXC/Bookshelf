"use strict";
/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * bookshelf
 * bookshelf server
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var url = require("url");
var portableFetch = require("portable-fetch");
var BASE_PATH = "http://localhost:8080/v1".replace(/\/+$/, "");
/**
 *
 * @export
 */
exports.COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|"
};
/**
 *
 * @export
 * @class BaseAPI
 */
var BaseAPI = /** @class */ (function () {
    function BaseAPI(configuration, basePath, fetch) {
        if (basePath === void 0) { basePath = BASE_PATH; }
        if (fetch === void 0) { fetch = portableFetch; }
        this.basePath = basePath;
        this.fetch = fetch;
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
    return BaseAPI;
}());
exports.BaseAPI = BaseAPI;
;
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
var RequiredError = /** @class */ (function (_super) {
    __extends(RequiredError, _super);
    function RequiredError(field, msg) {
        var _this = _super.call(this, msg) || this;
        _this.field = field;
        return _this;
    }
    return RequiredError;
}(Error));
exports.RequiredError = RequiredError;
/**
 * DefaultApi - fetch parameter creator
 * @export
 */
exports.DefaultApiFetchParamCreator = function (configuration) {
    return {
        /**
         * add book
         * @summary add book
         * @param {Book} book
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addBookPut: function (book, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'book' is not null or undefined
            if (book === null || book === undefined) {
                throw new RequiredError('book', 'Required parameter book was null or undefined when calling addBookPut.');
            }
            var localVarPath = "/addBook";
            var localVarUrlObj = url.parse(localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            var needsSerialization = ("Book" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(book || {}) : (book || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         *
         * @summary delete book by id
         * @param {number} bookID book id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBookBookIDDelete: function (bookID, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'bookID' is not null or undefined
            if (bookID === null || bookID === undefined) {
                throw new RequiredError('bookID', 'Required parameter bookID was null or undefined when calling deleteBookBookIDDelete.');
            }
            var localVarPath = "/deleteBook/{bookID}"
                .replace("{" + "bookID" + "}", encodeURIComponent(String(bookID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'DELETE' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         *
         * @summary edit book description by id
         * @param {number} bookID book id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editBookBookIDPost: function (bookID, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'bookID' is not null or undefined
            if (bookID === null || bookID === undefined) {
                throw new RequiredError('bookID', 'Required parameter bookID was null or undefined when calling editBookBookIDPost.');
            }
            var localVarPath = "/editBook/{bookID}"
                .replace("{" + "bookID" + "}", encodeURIComponent(String(bookID)));
            var localVarUrlObj = url.parse(localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         *
         * @summary return books
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBooksGet: function (options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/getBooks";
            var localVarUrlObj = url.parse(localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions
            };
        }
    };
};
/**
 * DefaultApi - functional programming interface
 * @export
 */
exports.DefaultApiFp = function (configuration) {
    return {
        /**
         * add book
         * @summary add book
         * @param {Book} book
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addBookPut: function (book, options) {
            var localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).addBookPut(book, options);
            return function (fetch, basePath) {
                if (fetch === void 0) { fetch = portableFetch; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    }
                    else {
                        throw response;
                    }
                });
            };
        },
        /**
         *
         * @summary delete book by id
         * @param {number} bookID book id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBookBookIDDelete: function (bookID, options) {
            var localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).deleteBookBookIDDelete(bookID, options);
            return function (fetch, basePath) {
                if (fetch === void 0) { fetch = portableFetch; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    }
                    else {
                        throw response;
                    }
                });
            };
        },
        /**
         *
         * @summary edit book description by id
         * @param {number} bookID book id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editBookBookIDPost: function (bookID, options) {
            var localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).editBookBookIDPost(bookID, options);
            return function (fetch, basePath) {
                if (fetch === void 0) { fetch = portableFetch; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    }
                    else {
                        throw response;
                    }
                });
            };
        },
        /**
         *
         * @summary return books
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBooksGet: function (options) {
            var localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).getBooksGet(options);
            return function (fetch, basePath) {
                if (fetch === void 0) { fetch = portableFetch; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        throw response;
                    }
                });
            };
        }
    };
};
/**
 * DefaultApi - factory interface
 * @export
 */
exports.DefaultApiFactory = function (configuration, fetch, basePath) {
    return {
        /**
         * add book
         * @summary add book
         * @param {Book} book
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addBookPut: function (book, options) {
            return exports.DefaultApiFp(configuration).addBookPut(book, options)(fetch, basePath);
        },
        /**
         *
         * @summary delete book by id
         * @param {number} bookID book id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBookBookIDDelete: function (bookID, options) {
            return exports.DefaultApiFp(configuration).deleteBookBookIDDelete(bookID, options)(fetch, basePath);
        },
        /**
         *
         * @summary edit book description by id
         * @param {number} bookID book id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editBookBookIDPost: function (bookID, options) {
            return exports.DefaultApiFp(configuration).editBookBookIDPost(bookID, options)(fetch, basePath);
        },
        /**
         *
         * @summary return books
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBooksGet: function (options) {
            return exports.DefaultApiFp(configuration).getBooksGet(options)(fetch, basePath);
        }
    };
};
/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
var DefaultApi = /** @class */ (function (_super) {
    __extends(DefaultApi, _super);
    function DefaultApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * add book
     * @summary add book
     * @param {Book} book
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    DefaultApi.prototype.addBookPut = function (book, options) {
        return exports.DefaultApiFp(this.configuration).addBookPut(book, options)(this.fetch, this.basePath);
    };
    /**
     *
     * @summary delete book by id
     * @param {number} bookID book id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    DefaultApi.prototype.deleteBookBookIDDelete = function (bookID, options) {
        return exports.DefaultApiFp(this.configuration).deleteBookBookIDDelete(bookID, options)(this.fetch, this.basePath);
    };
    /**
     *
     * @summary edit book description by id
     * @param {number} bookID book id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    DefaultApi.prototype.editBookBookIDPost = function (bookID, options) {
        return exports.DefaultApiFp(this.configuration).editBookBookIDPost(bookID, options)(this.fetch, this.basePath);
    };
    /**
     *
     * @summary return books
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    DefaultApi.prototype.getBooksGet = function (options) {
        return exports.DefaultApiFp(this.configuration).getBooksGet(options)(this.fetch, this.basePath);
    };
    return DefaultApi;
}(BaseAPI));
exports.DefaultApi = DefaultApi;
