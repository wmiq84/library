const newBook = document.querySelector('.new-book');
const list = document.querySelector('.book-list');
const popUp = document.querySelector('dialog');
const submit = document.querySelector('.submit')

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    const readStatus = (read.toLowerCase() === 'y') ? 'read' : 'not read yet';
    return `${title} by ${author}, ${pages} pages, ${readStatus}`;
  }
}


function addBookToLibrary(array) {
  for (const book of array) {
    const listItem = document.createElement('ul');
    listItem.textContent = book.info();
    list.appendChild(listItem);
  }
}

newBook.addEventListener('click', () => {
  console.log("New book added.");
  popUp.showModal();
});

submit.addEventListener('click', updateLibrary); 

function updateLibrary(event) {
  console.log("Form submitted.");
  event.preventDefault();
  popUp.close();

  // user form input values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').value;

  // create a new Book object
  const formResponse = new Book(title, author, pages, read);
  
  myLibrary.push(formResponse);
  addBookToLibrary(myLibrary);
}

addBookToLibrary(myLibrary);

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet')

console.log(theHobbit.info())