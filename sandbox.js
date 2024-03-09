// 1 - REMOVE AN ELEMENT
//  ATTACH EVENT LISTENER TO EACH LI TAG
const lis = document.querySelectorAll('li')

/*lis.forEach(li => {
    li.addEventListener('click', e => {
        console.log('Event in the LI')
        if(confirm("Voulez-vous vraiment supprimer la tâche ?")){
            // REMOVE A NODE
            e.target.remove()
        }
        e.stopPropagation()
    })
})*/

// 2 - ATTACHE A NEW ELEMENT 
// Method 1
/*
const button = document.querySelector('button')
button.addEventListener('click', () => {
    let task = prompt("Entrer le nom de la task à ajouter : ")
    if(task){
        document.querySelector('ul').innerHTML += `<li>${task}</li>`
    }
    else{
        alert('aucune donnée enregistrée')
    }
})
*/

// Method 2
const button = document.querySelector('button')
button.addEventListener('click', () => {
    let task = prompt("Entrer le nom de la task à ajouter : ")
    if(task){
        // Step 1 : Create the element
        const li = document.createElement('li') // createElement creates an HTML element, and take as argument the name of it
        //Step 2 : We may need to add text value
        li.textContent = task;
        //Step 3 : Insert the created element into the DOM
        document.querySelector('ul').append(li) // append add it to the end. prepend first
    }
    else{
        alert('aucune donnée enregistrée')
    }
})

/**
 * When we add a new <li> element the click event is not attached to it.
 * that's because we have already done this for existing elements not new ones
 * ***** About Events bubbling :
 * When an event occurs it bubble to it's parent and so on until the body element, this is 
 * called event bubbling (See Example 1 : Event Bubbling) 
 *  
 */

// Exemple 1 : Event bubbling
const ul = document.querySelector('ul')

// WE ALREADY HAVE AN EVENT ATTACHED TO LI's (See line 5)
// When we will click on an li element we show a message : Event in the li (see line 7)
// However the event bubbles to the parent of li (ul in this case) and fire the click event
// if it is attached to it
ul.addEventListener('click', e => {
    if(e.target.tagName === 'LI'){
        if(confirm("Voulez-vous vraiment supprimer la tâche ?")){
            // REMOVE A NODE
            e.target.remove()
        }
    }
})


// In order to stop the propagation of event to parent element we use the methode
// stopPropagation() (See line 12) in this case the event won't bubble to parent element (ul)


/***
 * TO ADRESSE THE ISSUE OF EVENT NOT ADDED TO NEWLY CREATED LI
 * WE WILL ATTACH THE EVENT CLICK ON UL INSTEAD OF LI. And the Event will also be applied to
 * li's (event delegation)
 * 
 * WE WILL COMMENT THE CODE ON WHICH WE ATTACH CLICK EVENT TO LI'S AND THEN USE THE CODE IN LINE 64 
 * TO ATTACH EVENT TO UL AND DELEGATE TO LI.
 * In the case that event is tied to UL, we need to verify the tagName value which need to be LI before to proceed with deletion
 */
