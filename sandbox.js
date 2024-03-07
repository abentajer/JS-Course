//1 - GET an element by its ID
//getElementById grab only a single node
const title = document.getElementById('h1-title')
console.log('----> : ',title)

//2 - GET elements by their class name
//getElementsByClassName grap multiple node
/* Difference between getElementsByClassName and querySelectorAll, is that the first one return 
an HTMLCollection on which we can't apply a foreach loop to loop into different node returned
QuerySelectorAll return a nodeList 
*/
const errors = document.getElementsByClassName('error')
console.log('----> : ',errors)


//3 -  Get elements based on their tagName
const paras = document.getElementsByTagName('p')
console.log(paras)