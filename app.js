
var books = document.querySelectorAll("#book-list li.name");
Array.from(books).forEach(function(book){
  book.textContent += '(book title")';
});

const booklist = document.querySelector("#book-list");
//booklist.innerHTML = "<h2>Books and more books </h2>";
booklist.innerHTML += "<p> This is how you add html<p>"; 
=======
const banner = document.querySelector("#page-banner");
console.log('#page-banner node type is:', banner.nodeType);
console.log('#page-banner node type is:', banner.nodeName);
console.log('#page-banner node type is:', banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true)
console.log(clonedBanner)
>>>>>>> version6.0












// //const books = document.querySelectorAll('#book-list li .name');

<<<<<<< HEAD
// Array.from(books).forEach(function(book){
//   book.textContent += ' (Book title)';
// });

// const bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>Books and more books...</h2>';
// bookList.innerHTML += '<p>This is how you add HTML content</p>';
=======








// const banner = document.querySelector('#page-banner');

// console.log('#page-banner node type is:', banner.nodeType);
// console.log('#page-banner node name is:', banner.nodeName);
// console.log('#page-banner has child nodes:', banner.hasChildNodes());

// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);
>>>>>>> version6.0
