const axios = require('axios');

class Searches {
  history = ['Buenos Aires', 'Barcelona', 'Paris'];

  constructor() {
    // read db if exists
  }

  get paramsMapbox() {
    return {
      'access_token':
        'pk.eyJ1IjoiaW5ha2luYSIsImEiOiJjbGlycTU5angxNWdpM3FvY3hsMDhhOTQ4In0.FndhJN7qVnt-0Xu0usTOaw',
      'limit': 5,
      'language': 'en',
    };
  }

  async city(place = '') {
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
        params: this.paramsMapbox,
      });

      const ans = await instance.get();
      console.log(ans.data);

      return [];
    } catch (error) {
      return [];
    }
  }
}
module.exports = Searches;
