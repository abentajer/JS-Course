// 1 - Copy event
const copy = document.querySelector('.copy-me')
copy.addEventListener('copy', e => {
    console.log('You copied some content')
})

// 2 - mouseMove Event

const box = document.querySelector('.box')
box.addEventListener('mousemove', e =>{
    box.innerHTML = `Position of X = ${e.offsetX}  - Position of Y = ${e.offsetY}`
})


document.addEventListener('wheel', e => {
    console.log(e)
})