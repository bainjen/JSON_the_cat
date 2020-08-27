
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    // console.log(typeof body);
    if (error) {
      callback(`failed to request deatils ${error}`, null);
    }
    
    const data = JSON.parse(body);

    if (!data[0]) {
      callback(`${breedName} does not exist. Try again!`, null);

    } else {
      callback(null, `Here are some details about ${data[0].description}`);
      // console.log(`Here's some info about ${breedName} cats:`, data[0].description);

    }
    
  });
};

module.exports = { fetchBreedDescription };
