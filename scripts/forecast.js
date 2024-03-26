const apiKey = "5i32gJ5cdkuhGKcSwifggZSeAEATnwH4"

const getCity = async (city) => {
    const baseUrl = "http://dataservice.accuweather.com/locations/v1/cities/search"
    const query = `?apikey=${apiKey}&q=${city}`

    const response = await fetch(baseUrl+query)
    const data =  await response.json()
    //console.log(data)
    return data[0]
}

/*const cityCode = getCity('Safi')
    .then(data => data.Key)
    .catch(error => console.log(error))*/
  // console.log("------>",cityCode)

/*const currentWeather = getCity('Safi')
    .then(data => {
        return getCurrentWeather(data.Key).then(data => data)
    })
   .catch(error => console.log(error))

    console.log(currentWeather)*/

const getCurrentWeather = async cityCode => {
    const baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/"+cityCode
    const query = `?apikey=${apiKey}`

    const response = await fetch(baseUrl+query)
    const data = await response.json()
    return data[0]
}

//getCurrentWeather(cityCode)