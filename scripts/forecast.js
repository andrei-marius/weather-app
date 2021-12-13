class Forecast{
    constructor(){
        this.key = 'pUJ4ivW54aP5GWTajWeADTg9ub63CGHW'
        this.cityURI = 'https://dataservice.accuweather.com/locations/v1/cities/search'
        this.weatherURI = 'https://dataservice.accuweather.com/currentconditions/v1/'
    }
    async updateCity(city){
        const cityDets = await this.getCity(city)
        const weather = await this.getWeather(cityDets.Key)

        return { cityDets, weather }
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`
        const res = await fetch(this.cityURI + query)
        const data = await res.json()

        return data[0]
    }
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`
        const res = await fetch(this.weatherURI + query)
        const data = await res.json()

        return data[0]
    }
}