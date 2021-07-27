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
    insertBookInTable(myLibrary[myLibrary.length - 1])
}

function displayBooks() {
    for (let i = 0; i < myLibrary.length; ++i) {
        let element = myLibrary[i];
        insertBookInTable(element);
    }
}

function insertBookInTable(bookObject) {
    const tbody = document.querySelector('tbody');
    const tr = document.createElement('tr');
    tbody.append(tr);
    for (let prop in bookObject) {
        const td = document.createElement('td');
        td.textContent = bookObject[prop];
        tr.append(td);
    }
}

const appendFormBtn = document.querySelector('#add-book');
const okBtn = document.querySelector("#ok-btn");

appendFormBtn.addEventListener('click', () => {
    const form = document.querySelector("form")
    if (appendFormBtn.textContent === "x") {
        form.style.display = "none";
        appendFormBtn.style.backgroundColor = "rgba(55, 204, 9, 0.933)";
        appendFormBtn.textContent = "+";
        appendFormBtn.style = hoverStyle;
    }
    else {
        form.style.display = "block";
        appendFormBtn.style.backgroundColor = "red";
        appendFormBtn.textContent = "x";
        appendFormBtn.style.hover.backgroundImage = "linear-gradient(#ff6a8a, #ff0037)";
    }
})

appendFormBtn.addEventListener('mouseenter',() => {
    if(appendFormBtn.textContent === "x"){
        appendFormBtn.style.backgroundImage = "linear-gradient(#ff6a8a, #ff0037)";
    }
    else{
        appendFormBtn.style.backgroundImage = "linear-gradient(#84fc03, #03fc14)";
    }
})

appendFormBtn.addEventListener('mouseleave', () => {
    appendFormBtn.style.backgroundImage = "none";
    if(appendFormBtn.textContent === "x"){
        appendFormBtn.style.backgroundColor = "red";
    }
    else{
        appendFormBtn.style.backgroundColor = "rgba(55, 204, 9, 0.933)";
    }
})

okBtn.addEventListener('click', () => {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const read = document.querySelector("#read");
    const book = new Book(title.value, author.value, pages.value, read.value);
    insertBookInTable(book);
})

displayBooks()