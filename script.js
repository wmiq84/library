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
    const readStatus = (this.read.toLowerCase() === 'y') ? 'read' : 'not read yet';
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
  }
}
// Book.prototype.info = function() {
//   const readStatus = (this.read.toLowerCase() === 'y') ? 'read' : 'not read yet';
//   return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
// }

function addBookToLibrary(array) {
  for (const book of array) {
    const listItem = document.createElement('ul');
    const deleteButton = document.createElement('button');

    listItem.textContent = book.info();
    deleteButton.textContent = "Delete";

    list.appendChild(listItem);
    list.appendChild(deleteButton);
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

  while (list.children.length > 1) {
    list.removeChild(list.children[1]);
  };

  addBookToLibrary(myLibrary);
}

addBookToLibrary(myLibrary);

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet')

console.log(theHobbit.info());  