const request = require('request');
const catBreed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, function (error, response, body) {
  // console.log(typeof body);
  if (error) {
    console.log(`There's an error!:`, error);
  }
  
  const data = JSON.parse(body);
  
  if (data.length === 0) {
    console.log(`This breed does not exist. Try again!`);
    return;
  }
  
  console.log(`Here's some info about ${catBreed} cats:`, data[0].description);
  
});  


// const catURI = 'https://api.thecatapi.com/v1/breeds/search?q=';
// const breedSearchURI = catURI + breedName;


//https://api.thecatapi.com/v1/breeds/search
//?q = 
//siberian
// const data = JSON.parse(body);
// console.log(data);
// console.log(typeof data);


  //     if (error) {
  //       console.log(`Error: `, error);
  //       return; 
  //     }

  //   // console.log(data);
  //   // console.log(typeof data);

  //   console.log(data[0].description)