const apiKey = '21616cbb6c4bc67b09bc62b557f025b8'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=italy'

async function checkWeather() {
    try{
        const response = await fetch(apiUrl + `&appid=${apiKey}`)
        if(!response.ok){
            throw new Error(`Ошибка: ${response.status}`)
        }
        const data = await response.json()
        console.log(data)
    } catch(error) {
        console.error(`Не удалось получить данные о погоде: ${error}` )
    }
}

checkWeather()