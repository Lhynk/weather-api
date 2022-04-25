# Weather API :cloud: 
[<img src="https://help.apiary.io/images/swagger-logo.png" style="width:32px;"/>](https://app.swaggerhub.com/apis-docs/Lhynk/LWeather/1.0.0)

Using the [OpenWeather API](https://openweathermap.org/api) to get the information and filtering the information to only get the minimun of information.

## Endpoints
| Endpoint  | Description | Example |
| --------  | ------- | -------
| `/location` | Searching by city name will return the latitude and longitude  | `/location?name=Dallas`  |
| `/weather`  | Using the latitude and longitude of the city, it will return the weather information. Units is optional, only accepts metric (default) or imperial | `/weather?lat=32.7762719&lon=-96.7968559&units=imperial`

## Env values
|Key                |Value                            |Description
|-----------------  |-------------------------------  |---------------------------------    |
|API_KEY            |`ABCabc123`                      |Key provided by OpenWeather API      |
|WEATHER_URI        |`https://api.openweathermap.org` |Base uri of OpenWeather API          |
|LOCATION_ENDPOINT  |`/geo/1.0/direct`                |Uri to use the endpoint of location of OpenWeather API |
|WEATHER_ENDPOINT   |`data/2.5/weather`               |Uri to use the endpoint of weather of OpenWeather API  |

## Installation
Install the dependencies and devDependencies and start the server.
```
cd weather-api
npm install
npm run dev
```
