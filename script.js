const newBook = document.querySelector('.new-book');
const list = document.querySelector('.book-list');
const popUp = document.querySelector('dialog');
const submit = document.querySelector('.submit')

const myLibrary = [];

var index = -1;

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
  // Clear the list before adding new items
  

  array.forEach((book, index) => {
    const listItem = document.createElement('li'); 
    const deleteButton = document.createElement('button');

    listItem.textContent = book.info();
    listItem.setAttribute('data-index', index);
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute('data-index', index); 

    listItem.appendChild(deleteButton); 
    list.appendChild(listItem); 

    console.log(listItem.getAttribute('data-index'));
    console.log(deleteButton.getAttribute('data-index'));

    deleteButton.addEventListener('click', () => {
      list.removeChild(listItem);
    });
  });
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