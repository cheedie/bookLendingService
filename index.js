// AUTHOR: CHIDINMA EBEOGU
// TASK: BOOK LENDING SERVICE
// TOPIC:JAVASCRIPT DESIGN PATTERN

let BookLending = (function() {
  'use strict'

  let store = 
   ["0. Apples Never Fall \n", "1. Tales of Life and Music \n", "2. Atomic Habits \n", "3. The Whistler \n", "4. The Guardians \n", "5. A Time for Mercy \n", "6. Sooley"]
  ;
  let rentedBooks = [];
  
  function donateBookToStore() {
    let newBook = prompt(
      ' What book do you want to donate?'
    ).trim();
    if(newBook){
      store.push(`${store.length}.${newBook}`);
      console.log('You have successfully donated a book to the store')
      
    }
       else {
        console.log("Sorry, invalid input")
        donateBookToStore();
      }
    } 

  function displayBooks() {
    if (store.length == 0) {
      console.log("No books in store at the moment");
      return false;
    } else {
      console.log("This is the list of avalaible books: \n", store.join(' '));
      return true;
    }
  }
  function lendBooks() {
    if (displayBooks()) {
      let lendIndex = prompt(
        "Please input the INDEX of a book to be lent from this list: "
      );
      rentedBooks.push(store.splice(lendIndex, 1));
      console.log("Successfully lent book.");
    }
  }

  function showLendBooks() {
    if (rentedBooks.length == 0) {
      console.log("No lent/borrowed books to show");
      return false;
    } else {
      console.log("This is the list of lent/borrowed books: \n " , rentedBooks.join(' '));
    }
  }
  function returnedBooks() {
    let returnIndex;
    if (rentedBooks.length > 0) {
       returnIndex = prompt(
        `Please input the INDEX of the book to be returned from this list: \n ${rentedBooks.join('')}`
      );

      if (returnIndex) {
        store.push(rentedBooks.splice(returnIndex - 1, 1));
        console.log("You actually returned it. Weird. ");
      } else {
        console.log("You had one job! Input an index. ");
      }
    } else {
      console.log("You cannot return what you didnt borrow.")
    }
  }

  return {
    donateBook: donateBookToStore,
    lendBook: lendBooks,
    returnBook: returnedBooks,
    viewAvailableBooks: displayBooks,
    viewLentBooks: showLendBooks,
  };
})();


console.log('Hey Avid reader! Come in and get lost.');

function userInterface() {
  var userName = prompt('What is your name? ');
  function displayMsg() {
    let action;

    if (userName) {
      action = prompt('\nHello ' + userName + ', Books are cool so is our bookstore. How can we help you today? \n a. Donate book \n b. Borrow book \n c. Return book \n d. View available books  \n e. View borrowed books \n f. Exit\n ')
    } 

    if (action) {
      switch (action) {
        case 'a':  case 'Donate book':
          BookLending.donateBook();
          displayMsg();
          break;

        case 'b': case 'Lend book': case 'Borrow book':
          BookLending.lendBook();
          displayMsg();
          break;

        case 'c': case 'Return book':
          BookLending.returnBook();
          displayMsg();
          break;

        case 'd': case 'View available books':
          BookLending.viewAvailableBooks();
          displayMsg();
          break;

        case 'e': case 'View lent books': case 'View borrowed books':
          BookLending.viewLentBooks();
          displayMsg();
          break;
          case 'f': case 'Exit': 
         console.log('We hate to see you go');
          break;
        default:
          console.log('That was not a valid option. Pls re-enter.');
          displayMsg();
          break;
      }
    }
    
  }
  displayMsg();
  
}

userInterface();



