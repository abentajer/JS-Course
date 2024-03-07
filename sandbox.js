// const para = document.querySelector('p');
// const para = document.querySelector('.error');
const para = document.querySelector('div.error');

console.log(para);

// query multiple elements at once
const paras = document.querySelectorAll('p');
//Iterate on all selectors returned by ocument.querySelectorAll('p');
paras.forEach(para => {
    console.log('---> : ',para);
})

const errors = document.querySelectorAll('.error');

console.log(paras, errors);

//Use table index to show elements in paras array
console.log(paras[1], errors[0]);