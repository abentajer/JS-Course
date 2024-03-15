/**
 * This JS File is dedicated to course explanation
 * JS is a sync language, it execute one statement at a time
 * stmt 1
 * stmt 2
 * stmt 3 --> fetch database (this may take some time to be executed (blocking code), because it will block 
 * stmt4 from running until it fetchs data from db)
 * stmt4
 */

console.log(1)
console.log(2)
setTimeout(() => {
    console.log('callback function fired after 3s')
}, 3000)
console.log(3)
console.log(4)

/**
 * HTTP Request : Enable to get data from another server (make requests to API end point)
 * Example of an endpoint : https://jsonplaceholder.typicode.com/todos/1
 * Once we make a request to an Endpoint we get back data in format of Json 
 */

// ****** 1 - Make HTTP Request
// More about XMLHttpRequest : https://www.w3schools.com/xml/xml_http.asp  
const request = new XMLHttpRequest()

// open set up the request and does not make it
// open methods takes two arguments : 
// The first one is a String which represents the type of request we want to make (GET, POST, ....)
// The second arg is the endpoint where we want to get data from
request.open('GET', "https://jsonplaceholder.typicode.com/todos/")

// Send the request
request.send()

// We don't know in our code when the call is complete neither how to access the data
// To do so, we can track the progress of the request using an event listener  readystatechange
// This event listener track every change in the request
// more on the readystate (https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState)
request.addEventListener('readystatechange', e => {
    console.log(request, request.readyState)
    //the readystate 4 is when the request is complete and we can access the data
    /** readystate 4 does not mean that we got data from the endPoint, it only mean that 
     * the request is done and if we get data we will get a status of 200, else we will get 404 or 
     * other 
     * In order to be sur to get data we need to have readyState = 4 and status = 200
     */
    if(request.readyState === 4 && request.status === 200){
        console.log(request.responseText)
    }
})

/**
 * When we get data from an API, they are returned as A String that looks like a JSON 
 * In order to use it with JS , we need to parse it with JSON.parse()
 */