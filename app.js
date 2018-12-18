const wmf = console.log(document.querySelector('#book-list li:nth-child(2) .name'));
//console.log(wmf)
var books = console.log(document.querySelector('#book-list li .name'));
//console.log(books)

books = document.querySelectorAll('#book-list li .name');
//console.log(books)
Array.from(books).forEach(function(book){ console.log(book)
})


// git add -A
// git commit -m "book list, nth child .name" 
// git checkout master
// git merge version 4.0
// git push 


// const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

// var books = document.querySelector('#book-list li .name');
// console.log(books);

// books = document.querySelectorAll('#book-list li .name');
// console.log(books);

// Array.from(books).forEach(function(book){
//   console.log(book);
// });
