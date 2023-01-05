let myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        console.log(`${title} by ${author} has ${pages} pages and you have ${read} it`)
    }
};

const addBook = (book) => {
    return myLibrary.push(new Book(book))   
};

const theHobbit = ('The hobbit', 'J.R.R Tolkien', '269', 'Read');
const It = ('It', 'Stephen King', '269', 'Read');
const theShining = ('Tomilio', 'TOmás Sousa', '269', 'Read');