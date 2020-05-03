const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8cc02d1877ccd5b93d2556d74a8a1e1b&query='+latitude+','+longitude
    request({ url, json: true }, (error, {body})=>{
        if(error) {
            callback('Unable to connect to Weather Web service!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try different coordinates', undefined)
        } else {
            callback(undefined, {
                temperature: body.current.temperature, 
                feelslike: body.current.feelslike
            })
        }
    })
}

module.exports = forecast