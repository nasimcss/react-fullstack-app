const request = require('request-promise');



class Weather{
    static retrieveByCity(city, callback){
        request({
            //https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY
            //http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
            uri:`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`,
            json: true
        }).then(function(res){
            callback(res);
        }).catch(function(err){
            console.log(err);
            callback({error: 'Could not reach OpenWeatherMap API.'});
        });
    }
}

module.exports = Weather;
