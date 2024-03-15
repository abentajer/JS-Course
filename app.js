const getTodos = (resource, callback) => {
    return new Promise((resolve, reject) => {
            const request = new  XMLHttpRequest()
            request.addEventListener('readystatechange', () => {
        // console.log(request)
            if(request.readyState === 4 && request.status === 200){
                // In the callbach here, the error is undefined since there is no error
                resolve(JSON.parse(request.responseText))
            }else if ( request.readyState === 4){
                reject('Could not fetch data')
            }
        })
        request.open('GET', resource)
        request.send()
    })
    
}
const urlEndPoint = 'https://jsonplaceholder.typicode.com/todos/'

/**
 * By convention when we do a callback from a network request we always pass the error first and data at sencond
 */
getTodos(urlEndPoint)
    .then(data => {
        console.log('Promise resolved : ', data)
    })
    .catch(error => {
        console.log('Promise rejected : ', error)
    })