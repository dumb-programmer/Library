let myLibrary = [
    // new Book("JavaScript The Good Parts", "Douglas Croford", 170, false),
    // new Book("Atomic Habits", "James Clear", 290, true),
    // new Book("Elon Musk", "XXXX", 390, false)
];

function Book(title, author, pages, read, remove) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.remove = remove
}

function addBookToLibrary() {
    let title = document.querySelector('#title');
    let author = document.querySelector('#author');
    let pages = document.querySelector('#pages');
    let read = document.querySelector('#read');
    read.value = read.checked ? '✅' : '❌';
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    let index = myLibrary.length;
    removeBtn.setAttribute('data-book-index', index);
    removeBtn.setAttribute('class', 'removeBtn');
    removeBtn.addEventListener('click', (event) => {
        let index = removeBtn.getAttribute('data-book-index');
        let row = event.target.parentElement.parentElement;
        let tbody = document.querySelector('tbody')
        tbody.removeChild(row)
        myLibrary.splice(index, 1);
        console.log(myLibrary);
    })
    let book = new Book(title.value, author.value, pages.value, read.value, removeBtn);
    myLibrary.push(book);
    insertBookInTable(myLibrary[myLibrary.length - 1]);
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
        if (prop === 'remove') {
            let button = bookObject[prop];
            td.append(button);
        }
        else {
            td.textContent = bookObject[prop];
        }
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
    }
    else {
        form.style.display = "block";
        appendFormBtn.style.backgroundColor = "red";
        appendFormBtn.textContent = "x";
    }
})

appendFormBtn.addEventListener('mouseenter', () => {
    if (appendFormBtn.textContent === "x") {
        appendFormBtn.style.backgroundImage = "linear-gradient(#ff6a8a, #ff0037)";
    }
    else {
        appendFormBtn.style.backgroundImage = "linear-gradient(#84fc03, #03fc14)";
    }
})

appendFormBtn.addEventListener('mouseleave', () => {
    appendFormBtn.style.backgroundImage = "none";
    if (appendFormBtn.textContent === "x") {
        appendFormBtn.style.backgroundColor = "red";
    }
    else {
        appendFormBtn.style.backgroundColor = "rgba(55, 204, 9, 0.933)";
    }
})

okBtn.addEventListener('click', () => {
    addBookToLibrary();
})

displayBooks()