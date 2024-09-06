const newBook = document.querySelector('.new-book');
const list = document.querySelector('.book-list');
const popUp = document.querySelector('dialog');
const submit = document.querySelector('.submit')

const myLibrary = ['The Stand', 'Chainsaw Man'];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
      return title  + ' by ' + author + ', ' + pages + ', ' + read;
  }
}


function addBookToLibrary(array) {
  for (const book of array) {
    const listItem = document.createElement('ul');
    listItem.textContent = book;
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
}




addBookToLibrary(myLibrary);

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet')

console.log(theHobbit.info())