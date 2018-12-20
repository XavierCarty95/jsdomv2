var book = document.querySelector('li:first-child.name')
undefined
book 
null
var book = document.querySelector('li:first-child .name')
undefined
book 
<span class=​"name">​Name of the Wind​</span>​
book.getAttribute('class')
"name"
book.getAttribute('href')
null
book.setAttribute('class' , 'name-2')
undefined
book 
<span class=​"name-2">​Name of the Wind​</span>​
book 
<span class=​"name-2">​Name of the Wind​</span>​
book.hasAttribute('class')
true
book.hasAttribute('href')
false
book.removeAttribute('class')
undefined
book 
<span>​Name of the Wind​</span>​
book.setAttribute('class' , 'name' )
undefined
book 
<span class=​"name">​Name of the Wind​</span>​