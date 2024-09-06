const list = document.querySelector('.book-list');

const myLibrary = ['The Stand', 'Chainsaw Man'];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
      return title  + ' by ' + author + ', ' + pages + ", " + read;
  }
}


function addBookToLibrary(array) {
  for (const book of array) {
    const listItem = document.createElement("ul");
    listItem.textContent = book;
    list.appendChild(listItem);
  }
}

addBookToLibrary(myLibrary);

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet')

console.log(theHobbit.info())