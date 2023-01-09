let myLibrary = [new Book ('The hobbit', 'J.R.R Tolkien', '269', 'Yes'), new Book ('The hobbit', 'J.R.R Tolkien', '269', 'No'),new Book ('It', 'Stephen King', '269', 'Currently Reading') ];

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
        if (book.read === 'Yes'){
            element.classList.add('book-card', 'yes');
        } else if(book.read === 'No'){
            element.classList.add('book-card', 'no');
        } else if(book.read === 'Currently Reading'){
            element.classList.add('book-card', 'reading');
        }
        element.innerHTML = `
                <div class="card-content"> 
                <p class="title">Title: ${book.title} </p>
                <p class="author">Author: ${book.author}</p>
                <p class="pages">Pages: ${book.pages} </p>
                <p class="read">Read: ${book.read} </p>
                </div>
                <div class="card-button">
                <button class = "tick"> &check; </button>
                <button class = "cross"> &#10539; </button>
                <button class = "trash" onclick = "trash()"> <i class="fa fa-trash-o"></i> </button> 
                </div>
                `  
    mainContent.appendChild(element)
    });
    markRead();
    unRead();
};

const form = document.getElementById('form')
const formSection = document.querySelector('.add-book');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let book = new Book (e.target[0].value,e.target[1].value,e.target[2].value,e.target[3].value);
    addBook(book);
    showBooks(myLibrary);
    formSection.style.display = '';
    container.style.display = 'block';
});

const markRead = () => {
    let clickedButton = document.querySelectorAll('.tick')
    clickedButton.forEach( button => {
        button.addEventListener('click', (e) => {
            let card = e.target.parentElement.parentElement;
            card.children[0].childNodes[7].innerHTML = "Read: Yes"
            card.className = '';
            card.classList.add('book-card', 'yes');
        }) 
    })
};

const unRead = () => {
    let clickedButton = document.querySelectorAll('.cross')
    clickedButton.forEach( button => {
        button.addEventListener('click', (e) => {
            let card = e.target.parentElement.parentElement;
            card.children[0].childNodes[7].innerHTML = "Read: No"
            card.className = '';
            card.classList.add('book-card', 'no');
            
        }) 
    })
};

const trash = () => {
    let mainContent = document.querySelector(".main-content");
    mainContent = mainContent.childNodes
    for (let i = 0; i<mainContent.length;i++){
          mainContent[i].addEventListener('click', () => {
              myLibrary.splice(i, 1);
              showBooks(myLibrary);
          })
      } 
};
let container = document.querySelector('.container');
const displayForm = () => {
    if(formSection.style.display === ''){
        container.style.display = 'none';
        formSection.style.display = 'block'

    } else if (formSection.style.display === 'block'){
        formSection.style.display = ''
        container.style.display = 'block';
    } 
};




window.onload = (showBooks(myLibrary));

