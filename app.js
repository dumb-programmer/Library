let myLibrary = [
    new Book("JavaScript The Good Parts", "Douglas Croford", 170, false),
    new Book("Atomic Habits", "James Clear", 290, true),
    new Book("Elon Musk", "XXXX", 390, false)
];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    // this.info = function () {
    //     return this.read ? `${this.title} by ${this.author}, ${pages} pages, have read it` : `${this.title} by ${this.author}, ${pages} pages, not read yet`;
    // };
}

function addBookToLibrary() {
    let title = document.querySelector('#title');
    let author = document.querySelector('#author');;
    let pages = document.querySelector('#pages');;
    let read = document.querySelector('#read');;
    let book = new Book(title.value, author.value, pages.value, read.value);
    myLibrary.push(book);
    insertBookInTheTable(myLibrary[myLibrary.length - 1])
}

function displayBooks() {
    for (let i = 0; i < myLibrary.length; ++i) {
        let element = myLibrary[i];
        insertBookInTheTable(element);
    }
}

function insertBookInTheTable(bookObject) {
    const tbody = document.querySelector('tbody');
    const tr = document.createElement('tr');
    tbody.append(tr);
    for (let prop in bookObject) {
        const td = document.createElement('td');
        td.textContent = bookObject[prop];
        tr.append(td);
    }
}

const btn = document.querySelector('button');

btn.addEventListener('click', addBookToLibrary)

displayBooks()