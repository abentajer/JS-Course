/*
    When using the setAttributes, the function overwrite the value
    if we want, for example, to add extra style css, using set attributes will overwrite the old value
    and write the new one (Example 1)
*/
//Example 1
const h1Style = document.querySelector('h1')
h1Style.setAttribute("style","margin: 100px;")
console.log(h1Style)

/*
    To bypass this, we use the style property to access all differents css attr (Example 2)
*/

//Example 2
const h2style = document.querySelector('h2')
console.log(h2style.style)
//With style we can access all css attributes and give them value, which will be appended the existing style
h2style.style.fontSize = "20px"
h2style.style.background = "yellow"
h2style.style.fontFamily= "cursive"
console.log(h2style.style.color,h2style.style.fontSize, h2style.style.background, h2style.style.fontFamily)



/***** GET CLASSES OF AN ELEMENT*******/

const content = document.querySelector('p')
//classList allow to get all class applied to an HTML tag
console.log(content.classList)

//1 - add a class
//content.classList.add('error')
content.classList.add('success')
//2 - Remove a class
//content.classList.remove('error')
//content.classList.remove('success')

/***** Toggle class *******/
//methods toggle enable to add/remove a class. If it exists it will be removed, else it will be added

const toggleClass = document.querySelector('.test')
toggleClass.classList.toggle('test2'); // Will add a new class test2
toggleClass.classList.toggle('test2'); // Will remove the class test2
