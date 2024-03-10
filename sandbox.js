const scores =  [10, 30, 15, 25, 50, 40, 5]
const users = [
    {"id":1,"last_name":"Dockwray","email":"wdockwray0@wikimedia.org","premium":true,"price":66},
    {"id":2,"last_name":"Gatchell","email":"hgatchell1@imdb.com","premium":false,"price":93},
    {"id":3,"last_name":"Beevers","email":"kbeevers2@nifty.com","premium":true,"price":41},
    {"id":4,"last_name":"Norree","email":"snorree3@so-net.ne.jp","premium":false,"price":10},
    {"id":5,"last_name":"Peasby","email":"rpeasby4@blog.com","premium":false,"price":55},
    {"id":6,"last_name":"Muff","email":"omuff5@google.cn","premium":true,"price":16},
    {"id":7,"last_name":"Ceresa","email":"mceresa6@imageshack.us","premium":false,"price":77},
    {"id":8,"last_name":"Esselen","email":"besselen7@nhs.uk","premium":true,"price":33},
    {"id":9,"last_name":"Ciccarelli","email":"mciccarelli8@msn.com","premium":false,"price":97},
    {"id":10,"last_name":"Peppard","email":"cpeppard9@apple.com","premium":true,"price":57}
]

// 1 - filter method
console.log("------------ EXAMPLES OF FILTER METHODS ------------")
/**
 * Filter method enables to filter the data in an array based on a certain condition
 * The filter() method creates a new array filled with elements that pass a test provided by a function.
 * The filter() method does not execute the function for empty elements.
 * The filter() method does not change the original array.
 */
// Example 1 : filter only value > 20
const filteredScores = scores.filter( score => {
    return score > 20
})

console.log(filteredScores)

//Example 2 : filter only premium users 
 const premiumUsers = users.filter( user => {
    return user.premium
 })
 console.log(premiumUsers)

 // 2 - map method
 /**
  * map() creates a new array from calling a function for every array element.
  * map() does not execute the function for empty elements.
  *  map() does not change the original array.
  */
console.log("------------ EXAMPLES OF MAP METHODS ------------")
 // Example 1 : update scores and ad 5 points
 const updatedScores = scores.map( score => {
    return score + 5
 })
 //Since there is one return statment in the function, we could shorten it 
 //const updatedScores = scores.map(score => score + 5)

 console.log(updatedScores)

 // Example 2 : apply a 20% discount for premium users and 10% for regular users
 const discount = users.map (user => {
    if(user.premium){
        return {
            id: user.id,
            last_name: user.last_name,
            email: user.email,
            premium: user.premium,
            price : user.price - user.price * 0.2
        }
        
    }else {
        return {
            id: user.id,
            last_name: user.last_name,
            email: user.email,
            premium: user.premium,
            price : user.price - user.pirce * 0.1
        }
    }
 })
 // In the example above, we could not make user.price = user.price - 0.2 * price,
 // because we will directly editing the price in the initial array and this will be destructive
 // so we need to return a new object 
 console.log(users)
 console.log(discount)

// 3 - find method
 /**
  * Find method returns the value of the first element inside an array that passes a certain condition
  * The find() method returns the value of the first element that passes a test.
  * The find() method executes a function for each array element.
  * The find() method returns undefined if no elements are found.
  * The find() method does not execute the function for empty elements.
  * The find() method does not change the original array.
  */
console.log("------------ EXAMPLES OF FIND METHODS ------------")

// Example 1 : first score > 50
const firstScoreGt50 = scores.find( score => score > 50)
console.log(firstScoreGt50)

// 4 - sort method
 /**
  * The sort() sorts the elements of an array.
  * The sort() OVERWRITES the original array.
  * The sort() sorts the elements as strings in alphabetical and ascending order.
  */
 console.log("------------ EXAMPLES OF SORT METHODS ------------")
 const fruits = ["Banana", "Orange", "Apple", "Mango"];
 console.log(fruits)
 console.log(fruits.sort())
 console.log(fruits.reverse())

 // When applied to numbers, it sorts the numbers not based on their entire value
 // for example if we have [10, 20, 5, 4] we will get [10, 20, 4, 5], because sort only take the first
 // value of 10 (which is 1) and start comparing it with other numbers
console.log(scores)
console.log(scores.sort((a,b) => a - b))


// When trying to compare complexe objects, sort() must take a function 
console.log(users)
users.sort( (a,b) => {
    return a.price - b.price
})
console.log(users)