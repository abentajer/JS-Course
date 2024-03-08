/*********** 1 - CHILDREN ELEMENTS **********/
const article = document.querySelector('article')

//get the children of an element. children return an HTML Collection
const children = article.children
console.log(children)

//Since we can't iterate on an HTML Collection, we need to convert children to an array
const childrenArray = Array.from(children)
console.log(childrenArray)

childrenArray.forEach(child => {
    //we may also use tagName or localName
   // console.log('---> : ', child.tagName,' - ',child.localName)
  
    if(child.nodeName.toLocaleLowerCase() === 'p'){
        child.classList.add('error')
    }else{
        child.classList.add('success')
    }
})

/*********** 2 - PARENT ELEMENTS **********/

const title = document.querySelector('h2')
const parent = title.parentElement // THE PARENT IS ARTICLE
console.log('------> : Parent ',parent, ' - ', parent.nodeName)

// We can also get the parent of parent by chaining parentElement
//The parent of parent here is BODY
console.log('------> : Parent ',parent.parentElement, ' - ', parent.parentElement.nodeName) 


/*********** 3 - SIBLING ELEMENTS **********/
const title2 = document.querySelector('h2')
const nextSibling = title2.nextElementSibling
console.log("Next sibling of H2 : ", nextSibling) // WE GET P (we may get NULL if there is no next sibling)
const previousSibling = title2.previousElementSibling
console.log("Previous sibling of H2 : ", previousSibling) // WE GET NULL since there is no previous sibling