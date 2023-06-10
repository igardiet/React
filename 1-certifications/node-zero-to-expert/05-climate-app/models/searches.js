const axios = require('axios');

class Searches {
  history = ['Buenos Aires', 'Barcelona', 'Paris'];

  constructor() {
    // read db if exists
  }

  async city(place = '') {
    try {
      // http petition
      // console.log('city', place);
      const ans = await axios.get('https://reqres.in/api/users?page=2');
      console.log(ans.data);
      return [];
    } catch (error) {
      return [];
    }
  }
}
module.exports = Searches;
