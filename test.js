const {
  donateBookToStore,
  displayBooks,
  lendBooks,
  showLendBooks,
  returnedBooks
} = require("./booklending.js");

test("check if a book has been donated to the store", () => {
  const newBook = `wizard of oz`;
  const store = donateBookToStore(newBook)
  expect(store).toContain(`${store.length - 1}. ${newBook}`);
});

test('check if a book is not donated to store', () => {
  const newBook ='';
  const store = donateBookToStore(newBook)
  expect(store).not.toContain(`${newBook}`)
})

test('display book in the store', () => {
  expect(displayBooks()).not.toEqual([])
})



test('to lend book', () => {
  const lendbook = 2
  const lentBook = lendBooks(lendbook)
  expect(lentBook).toMatch("2. Atomic Habits")
})

test('display rented books', () => {
  expect(showLendBooks()).not.toEqual([])
})


test ('return borrowed book to the store', () => {
  let returnedBookIndex = 0;
  expect(returnedBooks(returnedBookIndex)).toContain("2. Atomic Habits \n")
})




