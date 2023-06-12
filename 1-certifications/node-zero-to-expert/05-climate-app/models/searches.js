const axios = require('axios');

class Searches {
  history = ['Buenos Aires', 'Barcelona', 'Paris'];

  constructor() {
    // read db if exists
  }

  get paramsMapbox() {
    return {
      'access_token': process.env.MAPBOX_KEY,
      'limit': 5,
      'language': 'en',
    };
  }

  get paramsWeather() {
    return {
      appId: process.env.OPENWEATHER_KEY,
      units: 'metric',
      lang: 'en',
    };
  }

  async city(place = '') {
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
        params: this.paramsMapbox,
      });

      const ans = await instance.get();
      return ans.data.features.map(place => ({
        id: place.id,
        name: place.place_name,
        lng: place.center[0],
        lat: place.center[1],
      }));
    } catch (error) {
      return [];
    }
  }

  async climatePlace(lat, lon) {
    try {
      const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather`,
        params: { ...this.paramsWeather, lat, lon },
      });

      const ans = await instance.get();
      const { weather, main } = ans.data;

      return {
        desc: weather[0].description,
        min: main.temp_min,
        max: main.temp_max,
        temp: main.temp,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = Searches;
