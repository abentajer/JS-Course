const button = document.querySelector('button')
// 1 - Show popup
button.addEventListener('click', e => {
    const popup = document.querySelector('.popup-wrapper')
    popup.style.display = 'block'
})

// 2 - Close the popup 
document.querySelector('.popup-close').addEventListener('click', e => {
    const popup = document.querySelector('.popup-wrapper')
    popup.style.display = 'none'
})

// 3 - close the popup when we click anywhere on the page
document.querySelector('.popup-wrapper').addEventListener('click', e => {
    e.target.style.display = 'none'
})