const answers = ['B', 'B', 'B','B']
const form = document.querySelector('.quiz-form')


form.addEventListener('submit', e => {
    e.preventDefault()
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
    let score = 0
    userAnswers.forEach((answer, index) => {
        if(answer === answers[index]){
            score += 25
            console.log("current score is : ", score)
        }
    });
    const showResult = document.querySelector('.result')
    // We overwrite the default value (0%) with a new one
    showResult.querySelector('span').textContent = `${score}%`
    showResult.classList.remove('d-none')
    
    scrollTo('.result')

    //Animate the score
    // For this you may need to comment the code on line 17
    let output = 0
    const timer = setInterval(() => {
        showResult.querySelector('span').textContent = `${output}%`
        if(output === score){
            clearInterval(timer)
        }else {
            output++
        }
    }, 10)
    
    //window.scrollTo(0,0)
})


const scrollTo = (element) => {
    document.querySelector(element).scrollIntoView({
        behavior: `smooth`,
    });
};