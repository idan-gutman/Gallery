'use strict';


const KEY = 'books';
const PAGE_SIZE = 4;
var gBooks;
var gPageIdx = 0;

var gNames = [
    'The hobbit',
    'The Da Vinci code',
    'The Alchimist',
    'Darkmans',
    'Lolita',
    'Black beauty'
]

_createBooks()

function getBooksForDisplay() {
    // var startIdx = gPageIdx * PAGE_SIZE;
    // return gBooks.slice(startIdx, startIdx + PAGE_SIZE);
    return gBooks
}

function removeBook(bookId) {
    var idx = gBooks.findIndex(function (book) {
        return bookId === book.id
    })
    if (bookId === -1) return;
    gBooks.splice(idx, 1);
    _saveBookToStorage()
}

function _createBooks() {
    var books = loadFromStorage(KEY);
    if (!books || !books.length) {
        books = [];
        for (var i = 0; i < 6; i++) {
            var name = gNames[getRandomIntInclusive(0, gNames.length - 1)]
            books.push(_createBook(name))
        }
    }
    gBooks = books;
    _saveBookToStorage();
}

function addBook(name, price) {
    var book = _createBook(name, price)
    gBooks.unshift(book);
    _saveBookToStorage();
}

function _createBook(name, price) {
    var book = {
        id: _makeId(),
        name,
        price,
        imgUrl: "pic_trulli.jpg",
        rate: 0
    };
    return book;
}

function updateBook(bookId, bookPrice) {
    var bookIdx = gBooks.findIndex(function (book) {
        return book.id === bookId;
    });
    gBooks[bookIdx].price = bookPrice;
    _saveBookToStorage()
}


function getBookById(bookId) {
    var book = gBooks.find(function (book) {
        return bookId === book.id
    })
    return book;
}


function updateRate(bookId, rate) {
    var book = getBookById(bookId);
    book.rate = rate;
    _saveBookToStorage()
}

function _saveBookToStorage() {
    saveToStorage(KEY, gBooks)
}

function nextPage() {
    gPageIdx++;
    if (gPageIdx * PAGE_SIZE >= gBooks.length) {
        gPageIdx = 0;
    }
}

function previousPage() {

    gPageIdx--;
    if (!gPageIdx * PAGE_SIZE || PAGE_SIZE) {
        gPageIdx = 0;
    }
}