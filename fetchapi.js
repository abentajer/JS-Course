/**
 * XMLHTTPRequest is a way to fetch data from and endpoint
 * however there is a quick way to do it using the native built in fetch, which is built into the language
 */
/**
 * The Fetch API interface allows web browser to make HTTP requests to web servers. 
 * No need for XMLHttpRequest anymore.
 * It takes as an argument the resource we want to fetch, it can be a URL or a file on the server
 */

const urlEndPoint = 'https://jsonplaceholder.typicode.com/todos/'
/*fetch(urlEndPoint)
    .then( response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })*/

// ASYNC et AWAIT
const getTodos = async () => {
    const response = await fetch(urlEndPoint)
    if(response.status !== 200){
        throw new Error('Cannot fetch the data')
    }
   // console.log(response)
    const data = await response.json()
    return data
    //console.log(data)
}

getTodos()
    .then(data => {
            console.log(data)
    })
    .catch( err => {
        console.log(err.message)
    })