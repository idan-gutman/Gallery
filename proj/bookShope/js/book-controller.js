'use strict';

function onInit() {
    renderBooks();
}

function renderBooks() {
    var books = getBooksForDisplay();
    var strHTMLs = books.map(function (book) {
        return `
        <tr>
        <td>${book.id}</td> <td>${book.name}</td> <td>${book.price}</td> <td>${book.rate}</td>
        <td><button onclick = "renderModal('${book.id}')">Read</button></td>
        <td><button onclick="onUpdateBook('${book.id}')">Update</button></td> 
        <td><button class = "btn-delete" onclick = "onRemoveBook('${book.id}')">Delete</button></td>
        </tr>
        `
    });
    var elBookTable = document.querySelector('.board-books');
    elBookTable.innerHTML = strHTMLs.join('');
}

function onRemoveBook(bookId) {
    removeBook(bookId);
    renderBooks();
}

function onAddBook(ev) {
    ev.preventDefault();
    var elMame = document.querySelector('input[name=name]').value;
    var elPrice = document.querySelector('input[name=price]').value;
    addBook(elMame, elPrice);
    elMame = '';
    elPrice = '';
    renderBooks();
}

function onUpdateBook (bookId){
    var bookPrice = +prompt('Please enter price');
    updateBook(bookId, bookPrice)
    renderBooks();
}



function renderModal(bookId){
    var elModal = document.querySelector('.modal')
    elModal.hidden = false;

    var book = getBookById(bookId);
    var strHTML = `
    <button onclick = "onCloseModel()" class="btn btn-close-model">Close</button>
    <h3>${book.name}</h3>
    <h4>Price: ${book.price} || Book Id: ${book.id} || Rate: ${book.rate} </h4>
    <p>${makeLorem()}</p>
    <input value="0" type="number" name="rate" min="0" max="10" />
    <button class = "btn" onclick="onUpdateRate('${book.id}')">Update rate</button>
    ` 
    elModal.innerHTML = strHTML;
    renderBooks();
}


function onUpdateRate(bookId){
    var elRate = document.querySelector('input[name=rate]');
    var rate = elRate.value;
    elRate.value = '';
    if(!rate || rate > 10 || rate < 0) return;
    updateRate(bookId,rate);
    renderBooks();

}

function onCloseModel(){
    var elModal = document.querySelector('.modal')
    elModal.hidden = true;
}

function onNextPage() {
    nextPage()
    renderBooks()
}

function onPreviousPage() {
    previousPage()
    renderBooks()
}