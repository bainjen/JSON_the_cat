
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function (error, response, body) {
    // console.log(typeof body);
    if (error) {
      console.log(`There's an error!:`, error);
      // return; 
    }
    
    const data = JSON.parse(body);

    if (!data[0]) {
      console.log(`This breed does not exist. Try again!`);
      // return;

    } else {
      callback(null, data[0].description)
      // console.log(`Here's some info about ${breedName} cats:`, data[0].description);

    }
    
  });  
};

module.exports = { fetchBreedDescription };
