/**
 * When a form is submitted the DEFAULT behavior is that the page refreshes
 * In order to handle the submit form in our way, we need to prevent the default action
 */

const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')
const usernamePattern = /^[a-zA-Z]{6,12}$/

form.addEventListener('submit', e => {
    // Prevent the default behavior
    e.preventDefault()
    // 1 - First way to get data in different input fields
    const username = document.getElementById('username')
    console.log(username.value)

    // 2 - Second way to get data in different input fields
    // We use the form we got in line 6, then we use the id or name attributes in inputs the get them
    console.log(form.username.value)
})


form.addEventListener('keyup', e => {
    if(usernamePattern.test(e.target.value)){
        feedback.textContent = "Passed"
        e.target.setAttribute('class','success')
        console.log('Passed')
    }else {
        e.target.setAttribute('class','error')
        feedback.textContent = "Failed"
        console.log('Not passed')
    }
})