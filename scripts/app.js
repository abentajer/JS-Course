const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time =  document.querySelector('.time')
const icon =  document.querySelector('.icon img')

const updateCity = async (city) => {
    //alert('inside')
    const cityDetails =  await getCity(city)
                                
    const cityWeather = await getCurrentWeather(cityDetails.Key)

    return {cityDetails, cityWeather}

   /* return {
        cityDetails: cityDetails,
        cityWeather: cityWeather
    }*/
                                
}

const showInformation = (data) => {
    //card.style.display = 'block'
    //Remove d-none css class if it exists 
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }
    //card.classList.remove('d-none')
    const cityDetails = data.cityDetails
    const cityWeather = data.cityWeather
    /**
     * Destructure properties from an object
     * const {cityDetails, cityWeather} = data
     */
    console.log(cityWeather)
    console.log(cityWeather.Temperature.Metric.value)
    details.innerHTML = `
        <div class="text-muted text-uppercase text-center details">
            <h5 class="my-3">${cityDetails.LocalizedName}</h5>
            <div class="my-3">${cityWeather.WeatherText}</div>
            <div class="display-4 my-4">
                <span>${cityWeather.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
            </div>
        </div>
        `
        if(cityWeather.IsDayTime){
            time.setAttribute('src', '../img/day.svg')
        }else {
            time.setAttribute('src', '../img/night.svg')
        }
        icon.setAttribute('src', '../img/icons/'+cityWeather.WeatherIcon+'.svg')
}

cityForm.addEventListener('submit', e => {
    e.preventDefault();
   // alert('Form submitted')
    const city = cityForm.city.value.trim()
    cityForm.reset()
    
    const infos = updateCity(city)
        .then(data => showInformation(data))
        .catch(error => console.error(error))
})

/*window.addEventListener('load', e => {
    card.style.display = 'none'
})*/