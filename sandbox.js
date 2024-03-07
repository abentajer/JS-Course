const link = document.querySelector('a')

// 1 - Get current value of href and target
const linkValue = link.getAttribute('href')
const linkTarget = link.getAttribute('target')
console.log(linkValue, linkTarget)

// 2 - Set new value for href and target
// set methods take 2 args : first one is the name of the attr. 2nd one is the value
link.setAttribute('href', 'https://www.bing.com')
link.setAttribute('target', '_parent')
link.innerHTML = 'Link to bing'
console.log(link)


const img = document.querySelector('img')
console.log(img)
img.setAttribute('title', 'title of the image')