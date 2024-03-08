// https://developer.mozilla.org/en-US/docs/Web/Events

const button = document.querySelector('button')

/* 
ADD Event lister is a method that accept two parameters : 
1 - First one is the event on which we want listen to
2 - Second one is a callback function, that will fire once the event occur
*/
button.addEventListener('click', () => {
    console.log("The button has been clicked")
})


// ATTACH EVENT LISTENER TO EACH LI TAG
const ul = document.querySelector('ul')

//OR WE MAY USE
//const lis = document.querySelectorAll('li')

const lis = Array.from(ul.children)
lis.forEach(li => {
    li.addEventListener('click', e => {
        e.target.classList.toggle('success')
    })
})