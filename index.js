let myLibrary = [new Book ('The hobbit', 'J.R.R Tolkien', '269', 'Read'), new Book ('The hobbit', 'J.R.R Tolkien', '269', 'Read'),new Book ('It', 'Stephen King', '269', 'Read') ];

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
    return myLibrary.push(book)   
};

const showBooks = (library) => {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML =''
    library.forEach(book => {
        let element = document.createElement('div');
        element.classList.add('book-card');
        element.innerHTML = `
                <p class="title">Title: ${book.title} </p>
                <p class="author">Author: ${book.author}</p>
                <p class="pages">Pages Number: ${book.pages} </p>
                <p class="read">Read: ${book.read} </p>
                <button> Mark Read </button>
                <button> Delete </button> `  
    mainContent.appendChild(element)
    });
};

const form = document.getElementById('form')
const formSection = document.querySelector('.add-book');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let book = new Book (e.target[0].value,e.target[1].value,e.target[2].value,e.target[3].value);
    addBook(book);
    showBooks(myLibrary);
    formSection.style.display = '';
});


const displayForm = () => {
    if(formSection.style.display === ''){
        formSection.style.display = 'block'
    } else if (formSection.style.display === 'block'){
        formSection.style.display = ''
    } 
};




window.onload = (showBooks(myLibrary));