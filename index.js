let myLibrary = [new Book ('The hobbit', 'J.R.R Tolkien', '269', 'Read'),new Book ('It', 'Stephen King', '269', 'Read') ];

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
    library.forEach(book => {
        let element = document.createElement('div');
        element.classList.add('book-card');
        element.innerHTML = `
                <p class="title">Title: ${book.title} </p>
                <p class="author">Author: ${book.author}</p>
                <p class="pages">Pages Number: ${book.pages} </p>
                <p class="read">Read: ${book.read} </p>
                <button> Mark Read </button>
                <button> Delete </button>
        `  
    mainContent.appendChild(element)
    });
};

const button = document.getElementById('add'); 
const form = document.getElementById('form')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target[0].name);

    const mainContent = document.querySelector('.main-content');
    let element = document.createElement('div');
    element.classList.add('book-card');
    element.innerHTML = `
            <p class="title">Title: ${e.target[0].name} </p>
            <p class="author">Author: ${e.target[1].name}</p>
            <p class="pages">Pages Number: ${e.target[2].name} </p>
            <p class="read">Read: ${e.target[3].name} </p>
            <button> Mark Read </button>
            <button> Delete </button>
    `  
mainContent.appendChild(element)

})



const displayForm = () => {
    const formSection = document.querySelector('.add-book');
    if(formSection.style.display === ''){
        formSection.style.display = 'block'
    } else if (formSection.style.display === 'block'){
        formSection.style.display = ''
    } 
};




window.onload = (showBooks(myLibrary));