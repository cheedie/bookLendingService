// defining the functions used in my bookLendingService task for testing.

let store = ["0. Apples Never Fall \n", "1. Tales of Life and Music \n", "2. Atomic Habits \n", "3. The Whistler \n", "4. The Guardians \n", "5. A Time for Mercy \n", "6. Sooley"]

let rentedBooks = ["3. The Whistler \n"];


function donateBookToStore(newBook) {
  if (newBook) {
    store.push(`${store.length}. ${newBook}`);
    console.log('You have successfully donated a book to the store')
  }
  else {
    console.log("Sorry, invalid input")
  }
  return store
}

function displayBooks() {
  if(store.length >= 1) {
    console.log("This is the list of avalaible books: \n", store.join(' '));
    return true;
  }
}

function lendBooks(lendIndex) {
  if (lendIndex >= 1) {
    const item = store.splice(lendIndex, 1)
    rentedBooks.push(item)
    return item[0]
  }

}

function showLendBooks() {
  if (rentedBooks.length >= 1) {
    console.log("This is the list of lent/borrowed books: \n ", rentedBooks.join(' '));
    return rentedBooks;
  }
}

function returnedBooks(returnIndex) {
   if (rentedBooks.length > 0) {
      let returnedItem = rentedBooks.splice(returnIndex - 1, 1)
      store.push(returnedItem[0]);
      console.log("You actually returned it. Weird. ", returnedItem[0], typeof returnedItem[0]);
      return returnedItem[0];
    }
  }

  



module.exports = {
  donateBookToStore,
  displayBooks,
  lendBooks,
  rentedBooks,
  showLendBooks,
  rentedBooks,
  returnedBooks
}



